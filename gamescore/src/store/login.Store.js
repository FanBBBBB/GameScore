import { makeAutoObservable } from 'mobx'
import { setToken, getToken, clearToken, http } from '../utils'

class LoginStore {
  // token = getToken() || ''
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }

  login = async ({ username, password }) => {
    // 调用登录接口
    const res = await http.post('/login', {
      username, password
    })
    // 存入内存
    // this.token = res.data.token
    //存入LocalStorage
    // setToken(res.data.token)
  }

  register = async ({ username, password }) => {
    // 调用注册接口
    const res = await http.post('/register', {
      username, password
    })
  }
}

export default LoginStore