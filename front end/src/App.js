import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Signin from './components/Signin'
import Service from './components/Service'
import Logout from './components/Logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './components/Cart'
import Afterpayment from './components/Afterpayment'

import { useCart } from './components/context'

const App = () => {
  const {cartItemCount} = useCart();
  return (
    <div>
      <BrowserRouter>
      <Header cartItemCount={cartItemCount()}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Signin />}/>
        <Route path="/service" element={<Service />}/>
        <Route path = '/logout' element = {<Logout />} />
        <Route path = '/cart' element = {<Cart />} />
        <Route path = '/after' element = {<Afterpayment />} />
      </Routes>
   
      </BrowserRouter>
      <Footer />
      
    </div>
  )
}

export default App
