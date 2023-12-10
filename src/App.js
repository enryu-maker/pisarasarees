import React from 'react'
import HeadBanner from './Components/HeadBanner'
import Home from './Screens/Home/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Index from './Nav/Index'
import { colors } from './Assets/Theme'

export default function App() {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.white
    }}>
      <HeadBanner/>
      <Header/>
      <Index/>
      <Footer/>
    </div>
  )
}
