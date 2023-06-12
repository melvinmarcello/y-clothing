import Login from './Pages/Login';
import './style/style.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Catalog from './Pages/Catalog'
import NavBar from './components/Navigationbar'
import Cart from './Pages/Cart'
import Details from './Pages/Details'
import Footer from "./components/Footer";
import Register from './Pages/Register';
import { UserContextProvider } from './context/userContext';
import axios from 'axios';

const App = () => {
  axios.defaults.withCredentials = true


  return (
    <div className='App'>
      <UserContextProvider>
        <Router>
          <NavBar/>
            <Routes>            
              <Route exact strict path="/" element={<Home/>} ></Route>
              <Route exact strict path="/home"element={<Home/>}  ></Route>
              <Route exact strict path="/login" element={<Login/>} ></Route>
              <Route exact path="/catalog" element={<Catalog/>} ></Route>
              <Route path="/catalog/:id" element={<Details/>} ></Route>
              <Route exact path="/cart" element={<Cart/>} ></Route>
              <Route exact path="/register" element={<Register/>} ></Route>
            </Routes>
          <Footer/>
        </Router>
      </UserContextProvider>
      </div>
    );
}

export default App;
