import PageContainer from '@/components/Layout/PageContainer'
import { Button, Tag } from 'antd';
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

function Home() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <p style={{ marginBottom: 24, maxWidth: 400, lineHeight: '24px' }}>
        在App内查看商城时，常常遇到：APP过期、多区频繁切换账号、APP网络异常、调试页面麻烦 等问题！
        </p>
        <div style={{ marginBottom: 24 }}>现在你可以快速获取 app token了</div>
        <Button
          style={{ marginBottom: 24 }}
          size='large'
          type='primary'
        ><Link to='/detail' style={{ color: '#fff' }}>开始使用</Link></Button>

        <p style={{ marginBottom: 24, maxWidth: 400, lineHeight: '24px' }}>
          这个方案是借用H5的登录能力，调用atop接口获取token。<br />
          这就要求当前商城<Tag color="green">绑定了app</Tag>并绑定了<Tag color="green">独立域名</Tag>。<br />
          预发、线上token是通用的，只需要预发环境配置独立域名即可
        </p>
      </div>
    </PageContainer>
  );
}

export default Home;
