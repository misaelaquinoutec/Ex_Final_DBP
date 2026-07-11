import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from './views/Products';
import Login from './views/login';
import Register  from './views/register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
