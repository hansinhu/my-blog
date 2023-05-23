import { useEffect, useState, useRef } from 'react'
import { io } from 'socket.io-client'

const config: RTCConfiguration = {
	// ice服务器
	'iceServers': [{ 'urls': 'stun:stun.xten.com' }]
}

const offerOptions = {
	offerToReceiveAudio: 1,
	offerToReceiveVideo: 1
}

const useRoomController = () => {
	const socket = useRef(null)
	const remoteDiv = useRef(null)
	// 本地socket id
	const [socketId, setSocketId] = useState(null)
	// room id
	const [roomId, setRoomId] = useState(null)
	const [localStream, setLocalStream] = useState(null)
	const [rtcConnects, setRTCConnects] = useState({})
	const [joined, setJoined] = useState(false)

	useEffect(() => {

		console.log('=====useEffect=======')

		remoteDiv.current = document.querySelector('#remoteDiv')

		socket.current = io('http://127.0.0.1:3001', {
			transports: ['websocket'],
			allowUpgrades: false,
			pingTimeout: 30000,
			autoConnect: true,
		})
		
		socket.current.on("connect", () => {
			console.log(`socket connectd, id:${socket.current.id}`); // "G5p5..."
		});
				

		socket.current.on("disconnect", (reason) => {
			console.log(`disconnect ${reason}`)
		});

		/** 信令socket监听 */
		//created [id,room,peers]
		socket.current.on('created', async function (data) {
			console.log('created: ' + JSON.stringify(data));
			setSocketId(data.id)
			setRoomId(data.room)
			// 根据回应peers 循环创建WebRtcPeerConnection & 发送offer消息 [from,to,room,sdp]
			for (let i = 0; i < data.peers.length; i++) {
					var otherSocketId = data.peers[i].id;
					// 创建WebRtcPeerConnection
					var pc = getOrCreateRtcConnect(otherSocketId);
					// 设置offer
					const offer = await pc.createOffer(offerOptions);
					onCreateOfferSuccess(pc, otherSocketId, offer);
			}
		})

		// joined [id,room]
		socket.current.on('joined', function (data) {
			console.log('joined: ' + JSON.stringify(data));
			//构建Peer
			getOrCreateRtcConnect(data.from);
		})

		//offer [from,to,room,sdp]
		socket.current.on('offer', function (data) {
			console.log('offer: ' + JSON.stringify(data));
			//获取peer
			var pc = getOrCreateRtcConnect(data.from);
			//构建RTCSessionDescription参数
			const rtcDescription = { type: 'offer' as RTCSdpType, sdp: data.sdp };
			//设置远端setRemoteDescription
			pc.setRemoteDescription(new RTCSessionDescription(rtcDescription));
			//createAnswer
			pc.createAnswer(offerOptions).then(offer => onCreateAnswerSuccess(pc, data.from, offer), error => onCreateAnswerError(pc, data.from, error));
		})

		//answer [from,to,room,sdp]
		socket.current.on('answer', function (data) {
			console.log('answer: ' + JSON.stringify(data));
			//获取peer
			var pc = getOrCreateRtcConnect(data.from);
			//构建RTCSessionDescription参数
			var rtcDescription = { type: 'answer' as RTCSdpType, sdp: data.sdp };
			//设置远端setRemoteDescription
			pc.setRemoteDescription(new RTCSessionDescription(rtcDescription));
		})

		//candidate  [from,to,room,candidate[sdpMid,sdpMLineIndex,sdp]]
		socket.current.on('candidate', function (data) {
			console.log('candidate: ' + JSON.stringify(data));
			var iceData = data.candidate;
			//获取Peer
			var pc = getOrCreateRtcConnect(data.from);
			var rtcIceCandidate = new RTCIceCandidate({
					candidate: iceData.sdp,
					sdpMid: iceData.sdpMid,
					sdpMLineIndex: iceData.sdpMLineIndex
			});
			//添加对端Candidate
			pc.addIceCandidate(rtcIceCandidate);
		})

		//exit [from,room]
		socket.current.on('exit', function (data) {
			console.log('exit: ' + JSON.stringify(data));
			//判断是否为当前连接 
			var pc = rtcConnects[data.from];
			if (typeof (pc) == 'undefined') {
					return;
			} else {
					//peer关闭
					getOrCreateRtcConnect(data.from).close;
					//删除peer对象
					delete rtcConnects[data.from];
					setRTCConnects({
						...rtcConnects,
					})
					//移除video
					const videoEl = document.querySelector(`#${data.from}`)
					remoteDiv.current.removeChild(videoEl);
			}
		})
	}, [])

	//创建并加入聊天室
	const createAndJoin = (roomName) => {
		if (roomName) {
			console.log('createAndJoin: ', roomName)
			socket.current.emit('createAndJoinRoom', { room: roomName })
		} else {
			console.log('请输入聊天室名');
		}
	}

	// 退出聊天室 [from,room]
	const exit = (cb) => {
		//信令服务器发送 exit [from room]
		var data = {
			from: socketId,
			room: roomId,
		}
		socket.current.emit('exit', data);
		setSocketId(null)
		setRoomId(null)
		// cb && cb?.()
	}

	/** WebRtc相关 */
	// 构建webRtc连接并返回
	function getOrCreateRtcConnect(socketId) {
		var pc = rtcConnects[socketId];
		if (typeof (pc) == 'undefined') {

				// 构建RTCPeerConnection
				pc = new RTCPeerConnection(config);

				//设置获取icecandidate信息回调
				pc.onicecandidate = e => onIceCandidate(pc, socketId, e);

				//设置获取对端stream数据回调--track方式
				pc.ontrack = e => onTrack(pc, socketId, e);
				if (localStream != null) {
						//peer设置本地流
						localStream.getTracks().forEach(function(track) {
									pc.addTrack(track, localStream);
						});
				}
				//设置获取对端stream数据回调
				pc.onremovestream = e => onRemoveStream(pc, socketId, e);
				//保存peer连接
				rtcConnects[socketId] = pc;
		}
		return pc;
	}

	//移除webRtc连接
	function removeRtcConnect(socketId) {
			delete rtcConnects[socketId];
	}

	/** WebRtc RTCPeerConnection 事件回调 */
	//获取icecandidate信息回调
	function onIceCandidate(pc, id, event) {
		//向信令服务器发送 candidate [from,to,room,candidate[sdpMid,sdpMLineIndex,sdp]]
		console.log('onIceCandidate to ' + id + ' candidate ' + event);
		if (event.candidate != null) {
				
				var candidate = {
					sdpMid: event.candidate.sdpMid,
					sdpMLineIndex: event.candidate.sdpMLineIndex,
					sdp: event.candidate.candidate,
				};

				var message = {
					from: socketId,
					to: id,
					room: roomId,
					candidate,
				};

				socket.current.emit('candidate', message);
		}
	}

	//获取对端stream数据回调--onTrack模式
	function onTrack(pc, id, event) {
		console.log('onTrack from ' + id);
		var video = document.createElement('video');
		video.id = id;
		video.autoplay = true;
		video.style.width = '200px';
		video.style.height = '200px';
		video.style.marginRight = '5px';
		remoteDiv.current.appendChild(video);
		// @ts-ignore
		document.querySelector(`#${id}`).srcObject = event.streams[0];
	}

	//onRemoveStream回调
	function onRemoveStream(pc, id, event) {
		console.log('onRemoveStream from ' + id);
		//peer关闭
		getOrCreateRtcConnect(id).close;
		//删除peer对象
		delete rtcConnects[id];
		setRTCConnects({
			...rtcConnects,
		})
		//移除video
		const videoEl = document.querySelector(`#${id}`)
		remoteDiv.current.removeChild(videoEl)
	}

	//offer创建成功回调
	function onCreateOfferSuccess(pc, id, offer) {
		console.log('createOffer: success ' + ' id:' + id + ' offer ' + JSON.stringify(offer));
		//设置本地setLocalDescription
		pc.setLocalDescription(offer);
		//发送offer消息
		var message = {
			from: socketId,
			to: id,
			room: roomId,
			sdp: offer.sdp,
		};
		socket.current.emit('offer', message);
	}

	//offer创建失败回调
	function onCreateOfferError(pc, id, error) {
			console.log('createOffer: fail error ' + error);
	}

	//answer创建成功回调
	function onCreateAnswerSuccess(pc, id, offer) {
			console.log('createAnswer: success ' + ' id:' + id + ' offer ' + JSON.stringify(offer));
			//设置本地setLocalDescription
			pc.setLocalDescription(offer);
			//发送answer消息
			var message = {
				from: socketId,
				to: id,
				room: roomId,
				sdp: offer.sdp,
			};
			socket.current.emit('answer', message);
	}

	//answer创建失败回调
	function onCreateAnswerError(pc, id, error) {
			console.log('createAnswer: fail error ' + error);
	}

	return {
		createAndJoin,
		exit,
		joined,
		setLocalStream,
	}
}

export default useRoomController
