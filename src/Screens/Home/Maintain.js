import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../Assets/Image'
import { colors } from '../../Assets/Theme'

export default function Maintain() {
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
                    fontSize: 25,
                    letterSpacing: 1,
                    marginBlock: 0,
                    textAlign:"center"
                }}>
                    Sorry for the Inconvenience 
                </p>
            </div>
            <p style={{
                fontFamily: "Bold",
                fontSize: 20,
                letterSpacing: 1,
                marginBlock: 0,
                textAlign:"center"
            }}>
                Website Is Under Maintainance
            </p>
            <p 
                style={{
                    fontFamily: "Black",
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 0,
                    color: colors.Primary2
                }}
            >
                Will Be Live Again in 2hrs
            </p>
        </div>
    )
}
