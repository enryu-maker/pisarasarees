import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home/Home'
import Cat from '../Screens/Cateogry/Cat'
import Login from '../Screens/Auth/Login'
import Register from '../Screens/Auth/Register'
import Cart from '../Screens/Cart/Cart'
import CatInfo from '../Screens/Cateogry/CatInfo'
import Blog from '../Screens/Blog/Blog'
import Checkout from '../Screens/Cart/Checkout'
import MyAccount from '../Screens/Profile/MyAccount'

export default function Index() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/account' element={<MyAccount />} />
      <Route path='/cart/checkout' element={<Checkout />} />
      <Route path='/categories' element={<Cat />} />
      <Route path='/categories/catinfo' element={<CatInfo />} />

    </Routes>
  )
}
