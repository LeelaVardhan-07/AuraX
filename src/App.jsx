import { Routes, Route } from 'react-router'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App