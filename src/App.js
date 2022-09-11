import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';
import Profile from './containers/User/Profile/Profile';
import Update from './containers/User/Update/Update';
import Products from './containers/Products/Products';
import ProductDetail from './containers/ProductDetail/ProductDetail'
import Orders from './containers/Orders/Orders';
import Admin from './containers/Admin/Admin';
import ProductsPromo from './containers/Products/ProductsPromo';
import Contact from './containers/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/update" element={<Update/>}/> 
          <Route path="/products" element={<Products/>}/> 
          <Route path="/detail" element={<ProductDetail/>}/> 
          <Route path="/orders" element={<Orders/>}/> 
          <Route path="/admin" element={<Admin/>}/> 
          <Route path="/productspromo" element={<ProductsPromo/>}/>               
          <Route path="/contact" element={<Contact/>}/>               
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
