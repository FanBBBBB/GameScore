import { makeAutoObservable } from 'mobx'
import { setToken, getToken, clearToken, http } from '../utils'

class LoginStore {
  // token = getToken() || ''
  result = false
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }

  login = async ({ username, password }) => {
    // 调用登录接口
    const res = await http.post('/login', {
      username, password
    })
    // console.log(res.data)
    // 存入内存
    // this.token = res.data.token
    //存入LocalStorage
    // setToken(res.data.token)
    this.result = res.data.success
  }

  register = async ({ username, password }) => {
    // 调用注册接口
    console.log(password)
    const res = await http.post('/register', {
      username, password
    })
    this.result = res.data.success
  }
}

export default LoginStore