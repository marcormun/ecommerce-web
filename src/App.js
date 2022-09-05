import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
