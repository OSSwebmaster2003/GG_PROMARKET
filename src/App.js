import { Routes, Route } from "react-router";
import Header from "./common/Header/Header";
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import "./App.css";
import ProductDescription from "./pages/ProductDescription/ProductDescription";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
