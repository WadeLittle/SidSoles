import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import ContactUs from './ContactUs/ContactUs';
import Layout from './Layout';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Admin from './Admin/Admin';
import AboutUs from './AboutUs/AboutUs';
import { ItemsProvider } from './ItemsContext';
import Items from './Shop/Items';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <ItemsProvider>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="/AboutUs" element={(<AboutUs />)} />
        <Route path="/ContactUs" element={(<ContactUs />)} />
        <Route path="/Shop" element={(<Shop />)} />
        <Route path="/Cart" element={(<Cart />)} />
        <Route path="/Admin" element={(<Admin />)}>
        </Route>
      </Routes>
    </BrowserRouter>
    </ItemsProvider>
  )
}
root.render(
  <App />
);

