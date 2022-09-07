import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';
import Profile from './containers/User/Profile/Profile';
import Update from './containers/User/Update/Update';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
