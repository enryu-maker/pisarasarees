import React from 'react'
import { images } from '../../Assets/Image'
import { Link } from 'react-router-dom'
import { colors } from '../../Assets/Theme'

export default function Faild() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column",
            height: "50vh"
        }}>
            <img src={images.cancle}
                style={{
                    height: 100,
                    width: 100
                }} />
                <p style={{
                fontFamily: "Black",
                fontSize: 30,
                letterSpacing: 1,
                marginBlock: 0
            }}>
                Payment Error
            </p>
            <p style={{
                fontFamily: "Regular",
                letterSpacing: 1,
                marginBlock: 10
            }}>
                Payment error from payment gateway
            </p>
            <Link to={'/'}
                style={{
                    fontFamily: "Black",
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 0,
                    color: colors.Primary2
                }}
            >
                Go Home
            </Link>
        </div>
    )
}
