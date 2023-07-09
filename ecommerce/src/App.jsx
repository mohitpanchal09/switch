import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  const user = false;
  return (
    // <Router>
    //   <Product />
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
