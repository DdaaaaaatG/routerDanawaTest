import { Routes, Route, Link, useLocation, useNavigate, Outlet  } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Login from './Component/Login';
import Main from './Component/Main';
import Shop from './Component/Shop';
import Brand from './Component/Brand';
import Custom from './Component/Custom';
import Footer from './Component/Footer';
import ProductItem from './Component/ProductItem';
function App() {
  let [itemData] = useState(ProductItem);
  return (
    <>
      <Header data={itemData}/>
      
      <Routes>
        <Route path="/" element={<Main data={itemData}/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Notebook" element={<Shop data={itemData}/>}></Route>
        <Route path="/Brand" element={<Brand data={itemData}/>}></Route>
        <Route path="/Custom" element={<Custom data={itemData}/>}></Route>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
