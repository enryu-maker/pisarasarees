import React from 'react'
import { colors } from '../Assets/Theme'
import useMediaQuery from './useMediaQuery';
import { Link, useNavigate } from 'react-router-dom'
import { baseURL } from '../Helper/Helper';
export default function ImageCard({
    item
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate()
    return (
        <div
            onClick={() => {
                navigate(`info/${item?.id}`, {
                    state: {
                        item: item,
                        cat: null
                    }
                })
            }}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: mobile ? "auto" : "300px",
                width: 220,
                backgroundColor: "white",
                margin: 10,
                borderRadius: 10,
                boxShadow: "5px 5px 10px #88888850",
                fontFamily: "Bold",
                cursor:"pointer"
            }}

        >
            <img
                alt={item?.name}
                src={baseURL + item?.image}
                style={{
                    width: "95%",
                    height: "85%",
                    borderRadius: 10,
                    borderRight: 10,
                    // objectFit:"contain"
                }} />
            <p style={{
                fontSize: 18,
                marginBlock: 0,
                color: colors.Primary2
            }}>
                Shop Now
            </p>
        </div>
    )
}
