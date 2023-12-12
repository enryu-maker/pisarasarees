import React from 'react'
import { colors } from '../Assets/Theme'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../Helper/Helper';
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
                    navigate("catinfo",{
                       state : { 
                        id:1,
                        item:item
                    }
                    })
                }}
            >
                <img
                    src={baseURL + item?.value?.icon}
                    style={{
                        height: "120px",
                        width: "120px",
                        borderRadius: "50%",
                        border: "2px solid lightgray",
                        cursor: "pointer",
                        objectFit:"contain",
                        padding:5
                    }} />
                <p style={{
                    fontFamily: "Bold",
                    marginBlock: 0,
                    width: "120px",
                    fontSize:25,
                    color: colors.black,
                }}>{item?.name}</p>
            </button>

        </>
    )
}