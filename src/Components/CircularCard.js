import React from 'react'
import { colors } from '../Assets/Theme'
import { useNavigate } from 'react-router-dom'
export default function CircularCard({
    item
}) {
    const navigate = useNavigate();
    return (
        <>
            <button
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "120px",
                    height: "150px",
                    border: "none",
                    backgroundColor: "transparent",
                }}
                onClick={() => {
                    navigate("catinfo")
                }}
            >
                <img
                    // src={Images.pic1}
                    style={{
                        height: "120px",
                        width: "120px",
                        borderRadius: "50%",
                        border: "2px solid lightgray",
                        cursor: "pointer",
                    }} />
                <p style={{
                    fontFamily: "Bold",
                    marginBlock: 0,
                    width: "120px",
                    color: colors.black,
                }}>{"hello"}</p>
            </button>

        </>
    )
}