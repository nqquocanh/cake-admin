import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetail from "./components/Products/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
