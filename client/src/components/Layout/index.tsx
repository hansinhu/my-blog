import { useState, useEffect } from 'react';
import { ConfigProvider, Layout, Menu,Alert, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import 'antd/dist/reset.css';
import Icon from '@/components/Icon'
// import { useLocation } from 'react-router-dom'
import styles from './index.module.scss';

const { defaultAlgorithm, darkAlgorithm } = theme;
const { Content } = Layout;

interface Props {
  children: any
}

enum ThemeMode {
  light = 'light',
  dark = 'dark',
}

const AlertKey = 'AlertKey'
const ModeKey = 'ThemeMode'

const algorithmMap = {
  [ThemeMode.light]: defaultAlgorithm,
  [ThemeMode.dark]: darkAlgorithm,
}

function DefaultLayout ({ children }: Props){
  const [themeMode, setThemeMode] = useState(ThemeMode.light)
  const [showAlert, setShowAlert] = useState(false)
  const [menuKey, setMenuKey] = useState('')

  useEffect(() => {
    // 首次打开判断系统是不是 “深色” 模式
    let systemMode = null
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      systemMode = ThemeMode.dark
    } else {
      systemMode = ThemeMode.light
    }

    // 优先取本地历史记录
    const mode = localStorage.getItem(ModeKey) || systemMode
    setThemeMode(mode as ThemeMode)

    // 全局提示
    const alertLasterTime = localStorage.getItem(AlertKey) || ''
    if (!alertLasterTime || +alertLasterTime < Date.now()) {
      setShowAlert(true)
    }

    setMenuKey('')
  }, [])

  useEffect(() => {
    var element = document.body;
    if (themeMode === 'dark') {
      element.classList.add(`dark-mode`);
    } else {
      element.classList.remove(`dark-mode`);
    }
  }, [themeMode])

  

  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm: algorithmMap[themeMode],
          token: {
            colorPrimary: '#FF4800',
          },
        }}
      >
        <Layout>
          <div className={styles.header} style={{ backgroundColor: themeMode === ThemeMode.dark ? '#001529' : '#fff' }}>
            <Menu
              style={{ width: '100%' }}
              theme={themeMode}
              mode="horizontal"
              selectedKeys={[menuKey]}
              items={[
                {
                  label: <a href='/detail'>日常</a>,
                  key: 'daily',
                },{
                label: <a href='/detail'>国区</a>,
                key: 'AY',
              },{
                label: <a href='/detail'>美区</a>,
                key: 'AZ',
              },{
                label: <a href='/detail'>欧区</a>,
                key: 'EU',
              },{
                label: <a href='/detail'>印区</a>,
                key: 'IN',
              }]}
            />
            <div>
              <Icon
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  const nextModel = themeMode === ThemeMode.dark ? ThemeMode.light: ThemeMode.dark
                  setThemeMode(nextModel)
                  localStorage.setItem(ModeKey, nextModel)
                }}
                size='26px'
                type={themeMode === ThemeMode.dark ? 'moon' : 'sun'} color={'#F9C626'}
              />
            </div>
          </div>
          <Content>
            <div className={styles.content}>
              {
                showAlert && (
                  <Alert
                    style={{ marginTop: 12 }}
                    message="同一个账号获取token时，会导致上一个token失效，务必使用自己账号，以免互相顶掉账号！"
                    type="warning"
                    showIcon
                    closable
                    onClose={() => {
                      localStorage.setItem(AlertKey, `${Date.now() + 24 * 60 * 60 * 1000}`)
                    }}
                  />
                )
              }
              { children }
            </div>
          </Content>
        </Layout>
      </ConfigProvider>
    </StyleProvider>
  )
}

export default DefaultLayout