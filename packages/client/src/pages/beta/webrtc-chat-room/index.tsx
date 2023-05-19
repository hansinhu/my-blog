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
				<button onClick={() => roomController.createAndJoin('456789')}>createAndJoinRoom</button>
				<br/>
				<button id="exit">exit</button>
				{/* <LocalVideo /> */}
			</div>
		</Layout>
	)
	
}

export default Index