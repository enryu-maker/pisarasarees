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
import Terms from '../Constants/Terms'
import Privacy from '../Constants/Privacy'
import Cancle from '../Constants/Cancle'
import About from '../Constants/About'
import Shipping from '../Constants/Shipping'
import More from '../Components/More'
import Info from '../Screens/Cateogry/Info'
import { useSelector } from 'react-redux'
import ErrorPage from '../Constants/ErrorPage'
import MoreInfo from '../Components/MoreInfo'
import Success from '../Screens/Cart/Success'
import Fail from '../Screens/Cart/Fail'
import Faild from '../Screens/Cart/Faild'
import Pending from '../Screens/Cart/Pending'
import ViewAll from '../Screens/Home/ViewAll'

export default function Index() {
  const access = useSelector(state => state.Reducers.access)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={access === null ? <Login /> : <ErrorPage />} />
      <Route path='/register' element={access === null ? <Register /> : <ErrorPage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/viewall' element={<ViewAll />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/account' element={access === null ? <Login /> : <MyAccount />} />
      <Route path='/account/more/:pid' element={access === null ? <Login /> : <MyAccount />} />
      <Route path='/cart/checkout' element={access === null ? <Login /> : <Checkout />} />
      <Route path='/checkout' element={access === null ? <Login /> : <Checkout />} />
      <Route path='/categories' element={<Cat />} />
      <Route path='/terms&condition' element={<Terms />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/cancellation&return' element={<Cancle />} />
      <Route path='/about' element={<About />} />
      <Route path='/more' element={<More />} />
      <Route path='/success' element={access === null ? <Login /> : <Success />} />
      <Route path='/failed' element={access === null ? <Login /> : <Fail />} />
      <Route path='/error' element={access === null ? <Login /> : <Faild />} />
      <Route path='/pending' element={access === null ? <Login /> : <Pending />} />
      <Route path='/more' element={<More />} />
      <Route path='/categories/catinfo/info/:pid' element={<Info />} />
      <Route path='/info/:pid' element={<Info />} />
      <Route path='/viewall/info/:pid' element={<Info />} />
      <Route path='/shipping-policy' element={<Shipping />} />
      <Route path='/categories/catinfo' element={<CatInfo />} />
      <Route path='/more/moreinfo' element={<MoreInfo />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  )
}
