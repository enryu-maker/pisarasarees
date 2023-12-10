import React from 'react'
import { colors } from '../../Assets/Theme'

export default function AddressCard({
    item
}) {
    return (
        <div
            style={{
                display: "flex",
                height: 120,
                backgroundColor: colors.white,
                width: "47%",
                boxShadow: "5px 5px 10px #88888850",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                paddingInline: 10,
                flexDirection:"column"
            }}
        >
            <p
                style={{
                    fontFamily: "Bold",
                    borderBlock: 0,
                }}>
                Home
            </p>
            <p
                style={{
                    fontFamily: "Bold",
                    borderBlock: 0,
                }}>
                Address full
            </p>
        </div>
    )
}
