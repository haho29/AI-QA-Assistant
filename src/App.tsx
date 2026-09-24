import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;