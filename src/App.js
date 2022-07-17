import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Orders from './components/Orders/Orders';
// import Navbar from "./components/Navbar/Navbar";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDetail from "./components/Products/ProductDetail";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/auth" element={<Login />} exact />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/categories" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
