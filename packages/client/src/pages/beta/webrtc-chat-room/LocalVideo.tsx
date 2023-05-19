import React, { useRef, useEffect } from 'react'

interface Props {}

const LocalVideo = () => {
	const localStream = useRef(null)
	const videoEl = useRef(null)

	useEffect(() => {
		//初始启动摄像头
		startLocalCamera();
	}, [])

	//启动摄像头
	function startLocalCamera() {
			//启动摄像头
			navigator.mediaDevices
				.getUserMedia({
						audio: false,
						video: true
				})
				.then(stream => gotStream(stream))
				.catch(e => alert('getUserMedia() error: ${e.name}'));
	}

	function gotStream(stream) {
		console.log('收到本地视频流');
		videoEl.current.srcObject = stream;
		localStream.current = stream;
	}

  return (
		<div className='webrct-item'>
				<video ref={videoEl} muted controls autoPlay style={{ width:200,height:200 }}></video>
				<br/>
				<div id='remoteDiv'></div>
				<div className=''></div>
			</div>
	)
	
}
export default LocalVideo