import { makeAutoObservable } from 'mobx'
import { http } from '../utils'
class LoginStore {
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }
  login = async ({ username, password }) => {
    // 调用登录接口
    const res = await http.post('aaaaa', {
      username, password
    })
  }
  register = async ({ username, password }) => {
    // 调用注册接口
    const res = await http.post('aaaaa', {
      username, password
    })
  }
}

export default LoginStore