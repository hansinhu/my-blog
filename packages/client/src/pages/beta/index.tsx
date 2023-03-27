import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

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
      <div>
        {
          betaList.map(item => (
            <Link to={item.url}>
              <div>ChatGPT</div>
            </Link>
          ))
        }
      </div>
      </main>
    </Layout>
    
  );
}

export default Beta;
