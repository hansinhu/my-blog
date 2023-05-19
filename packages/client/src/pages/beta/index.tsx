import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.css'

const betaList = [{
  name: 'ChatGPT-3',
  url: '/beta/chatgpt-3'
},{
  name: 'WebRTC 视频聊天室',
  url: '/beta/webrtc-chat-room'
}]

function Beta() {
  return (
    <Layout
      title={`Hello from `}
      description="hansinhu's blog">
      <main>
      <div className='beta'>
        <div className='beta-row'>
        {
          betaList.map(item => (
            <div key={item.name} className='beta-col'>
              <Link to={item.url}>
              <div className='beta-card'>
                <div>{item.name}</div>
              </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
      </main>
    </Layout>
    
  );
}

export default Beta;
