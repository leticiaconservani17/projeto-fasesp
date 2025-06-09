import './global.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom' // ✅ Adiciona o Navigate aqui
import Login from './Pages/Login'
import Home from './Pages/Home'
import UnidadeCurricular from './Pages/Unidade Curricular'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Unidade/:id" element={<UnidadeCurricular />} />
    </Routes>
  )
}

export default App
