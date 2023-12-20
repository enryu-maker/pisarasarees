import React from 'react'
import { images } from '../Assets/Image'
import { Link } from 'react-router-dom'
import { colors } from '../Assets/Theme'

export default function ErrorPage() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "50vh"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <p style={{
                    fontFamily: "Black",
                    fontSize: 100,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    4
                </p>
                <img src={images.cancle}
                    style={{
                        height: 100,
                        width: 100
                    }} />
                <p style={{
                    fontFamily: "Black",
                    fontSize: 100,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    4
                </p>
            </div>
            <p style={{
                fontFamily: "Bold",
                fontSize: 30,
                letterSpacing: 1,
                marginBlock: 0
            }}>
                Oops Page Not Found!
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
