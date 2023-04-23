import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App