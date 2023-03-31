import './App.css';

function Login() {
  return (
    <div class="container">
      <h1>Welcome</h1>
      <form>
        <label for="username">用户名</label>
        <input type="text" id="username" name="username" required></input>
        <label for="password">密码</label>
        <input type="password" id="password" name="password" required></input>
        <button type="submit">登录</button>
      </form>
    </div>
  );
}

export default Login;
