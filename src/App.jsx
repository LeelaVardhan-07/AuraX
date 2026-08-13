import { Routes, Route } from 'react-router'

import Landing from './Pages/Landing.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Explore from './Pages/Explore.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  )
}

export default App