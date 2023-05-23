import React, { useEffect, useRef } from 'react'
import Layout from '@theme/Layout';
import LocalVideo from './LocalVideo'
import useRoomController from './useRoomController';
import './index.css'

interface Props {}

const Index = () => {
	const roomController = useRoomController()

  return (
		<Layout>
			<div className='webrct-main'>
				<input type="text" id="roomName" placeholder="请填写Room名称" />
				<br/>
				<button disabled={roomController.joined} onClick={() => roomController.createAndJoin('456789')}>createAndJoinRoom</button>
				<br/>
				<button onClick={roomController.exit} id="exit">exit</button>
				<LocalVideo setLocalStream={roomController.setLocalStream} />
			</div>
		</Layout>
	)
	
}

export default Index