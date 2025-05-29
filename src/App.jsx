import "./global.css";
import { Routes, Route, Link, Navigate } from "react-router-dom"; // ✅ Adiciona o Navigate aqui
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
