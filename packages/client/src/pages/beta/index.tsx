import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.css'

const betaList = [{
  name: 'ChatGPT-3',
  url: '/beta/chatgpt-3'
}]

function Beta() {
  return (
    <Layout
      title={`Hello from `}
      description="minma.hu's blog">
      <main>
      <div className='beta'>
        <div className='beta-row'>
        {
          betaList.map(item => (
            <div key={item.name} className='beta-col'>
              <Link to={item.url}>
              <div className='beta-card'>
                <div>ChatGPT</div>
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
