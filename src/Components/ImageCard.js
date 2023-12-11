import React from 'react'
import { colors } from '../Assets/Theme'
import useMediaQuery from './useMediaQuery';
export default function ImageCard() {
    const mobile = useMediaQuery('(max-width: 768px)');

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height:mobile?"auto" : "300px",
                width: 220,
                backgroundColor: "white",
                margin: 10,
                borderRadius: 10,
                boxShadow: "5px 5px 10px #88888850",
                fontFamily: "Bold"
            }}
        >

            <div style={{
                width: "95%",
                height: "85%",
                backgroundColor: "ButtonFace",
                borderRadius: 10
            }} />
            <p style={{
                fontSize: 18,
                marginBlock:0,
                color:colors.Primary2
            }}>
                Shop Now
            </p>
        </div>
    )
}
