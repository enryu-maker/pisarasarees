import React from 'react'
import { colors } from '../Assets/Theme'
import Textra from 'react-textra'
export default function HeadBanner() {
  return (
    <div
      style={{
        display: "flex",
        height: "30px",
        width: "100vw",
        backgroundColor: colors.Primary2,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Bold",
        color: colors.Primary1,
        position: "sticky",
        top: 0
      }}
    >
      <Textra
        style={{
          fontFamily: "Bold",
          fontSize: 20,
        }}
        data={["Limited Stock, Infinite Elegance! Grab Your Saree Now Before It's Gone ", "Hurry! Exclusive Sarees, Limited Quantities. Secure Yours Today!", "Don't Miss Out! Limited Stock of Exquisite Sarees – Shop Now!"]}
        effect="leftRight"
        duration={3000}
        stopDuration={2000}
      />
    </div>
  )
}
