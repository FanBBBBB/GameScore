import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'
import Scores from './pages/Scores'
import GameDetail from './pages/GameDetail'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/score" element={<Scores />} />
          <Route path="/game" element={<GameDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App