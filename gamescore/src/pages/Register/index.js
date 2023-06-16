import { Card, Form, Input, Checkbox, Button, message, Col } from 'antd'
import logo from '../../assets/logo.png'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useStore } from '../../store'

const Register = () => {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  async function onFinish (values) {
    console.log(values)
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    const { username, password, password2 } = values
    if (password != password2) {
      message.error('两次密码不同')
      console.log(password)
      console.log(password2)
    } else {
      console.log(password)
      console.log(password2)
      await loginStore.register({ username, password })
      if (loginStore.result == true) {
        // 跳转首页
        navigate('/login', { replace: true })
        // 提示用户
        message.success('注册成功')
      }
    }
  }

  return (
    <div className="login">
      <Card className="login-container">
        {/* <img className="login-logo" src={logo} alt="" /> */}
        <Col push={10}>
          <h1>注册</h1>
        </Col>
        <Form
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!'
              },
              {
                max: 15, message: '账号不超过15个字符'
              },
              {
                min: 3, message: '账号至少3个字符'
              },
              {
                pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, "g"),
                message: '账号只允许包含数字、字母和下划线',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true, message: '请输入密码!'
              },
              {
                max: 20, message: '密码不超过20个字符'
              },
              {
                min: 8, message: '密码至少8个字符'
              },
              {
                pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, "g"),
                message: '密码名称只允许包含数字、字母和下划线',
                validateTrigger: 'onChange'
              }
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password2"
            rules={[
              {
                required: true, message: '请重复密码!'
              },
              {
                max: 20, message: '密码不超过20个字符'
              },
              {
                min: 8, message: '密码至少8个字符'
              },
              {
                pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, "g"),
                message: '密码名称只允许包含数字、字母和下划线',
                validateTrigger: 'onChange'
              }
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />}
              type="password2"
              placeholder="Password2"
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Register