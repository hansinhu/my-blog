import { useEffect, useState, useRef } from 'react';
import { Button, Card, Input, Form, Steps, message,Radio, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import dayjs from 'dayjs'
import md5 from 'js-md5'
import { getMallDomainByRegion } from '@/utils/index'
import styles from './index.module.scss'

interface Props {
  item: any
}

interface PreResult {
  [key: string]: any
  time: number
  headers: any
}

function AccountItem({ item }: Props) {
  const localKey = `${item.mallEnv}-${item.mallType}-${item.mallRegion}`
  const [preResult, setPreResult] = useState<PreResult>()
  const formRef = useRef<FormInstance>();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mall = item as any
    if (localStorage.getItem(localKey)) {
      try {
        mall = JSON.parse(localStorage.getItem(localKey) as string)
        setPreResult(mall)
      }catch {}
    }
    formRef.current?.setFieldsValue({
      username: mall.username,
      password: mall.password,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mallDomain = getMallDomainByRegion(item.mallEnv, item.mallRegion, item.mallType)

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="1">+1</Select.Option>
      </Select>
    </Form.Item>
  );


  return (
    <Card title={''} bordered={false}>
      <Form
        ref={formRef as any}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          prefix: '86',
        }}
        autoComplete="off"
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[{ required: true, message: '请输入账号!' }]}
        >
          {/* <Input addonBefore={prefixSelector} placeholder={'邮箱或手机号'} /> */}
          <Input placeholder={'邮箱或手机号'} />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={loading} type="primary" htmlType="submit">
            获取 app token
          </Button>
        </Form.Item>
      </Form>
      {
        preResult && (
          <div>
            <div style={{ marginBottom: 12 }}>上次获取记录：<span>{ dayjs(preResult?.time).format('YYYY-MM-DD HH:mm') }</span></div>
            {
              item.mallType === 'am' && <div><span>H5预览地址:</span><a target="_blank" rel="noreferrer" href={`https://${preResult?.domain}?siteCode=${preResult.siteCode}`}>{`https://${preResult?.domain}?siteCode=${preResult.siteCode}`}</a></div>
            }
            <Steps
              direction="vertical"
              current={1}
              items={[
                {
                  title: '第一步：复制 headers',
                  description: <>
                  <div className={styles.line}><span>thing-token:</span><span>{preResult.token}</span></div>
                  <div className={styles.line}><span>thing-extra-info:</span><span>{`{clientId: "${preResult.clientId}"}`}</span></div>
                  <div className={styles.line}><span>thing-country-code:</span><span>{preResult.site}</span></div>
                  <div className={styles.line}><span>thing-lang:</span><span>{preResult.site === '86' ? 'zh' : 'en'}</span></div>
                  <div className={styles.line}><span>thing-area-code:</span><span>{preResult.region}</span></div>
                  </>,
                },
              ]}
            />
          </div>
        )
      }
    </Card>
  );
}

export default AccountItem;
