import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css"
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import UserList from "./components/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import { useState } from "react";
function App() {
  
  
  const user = useSelector((state) => state.user.currentUser);
  
  
  return (
    <Router >
      { user?<>
      <Topbar />
      <div className="container">
      <Sidebar />
      <Routes >
    
      <Route exact path="/" element={<Home />}/>
       
        <Route path="users" element={<UserList/>}/>
        <Route path="/user/:userId" element={<User />}/>
        <Route path="/product/:productId" element={<Product />}/>
      <Route path="/newUser" element={<NewUser />}/>
      <Route path="/newProduct" element={<NewProduct />}/>
      <Route path="/productList" element={<ProductList />}/>
      </Routes>
    </div>
    </>:<Login/>
}
    
    </Router>
  );
}

export default App;
