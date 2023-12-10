import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { colors } from '../../Assets/Theme';
export default function CartCard({
    img,
    name,
    actual,
    discount,
    desc,
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "380px",
                width: 300,
                backgroundColor: "white",
                marginBlockEnd: 10,
                marginInline: 5,
                borderRadius: 10,
                boxShadow: "5px 5px 10px #88888850",
            }}
        >
            <div style={{
                width: "95%",
                height: "75%",
                backgroundColor: "ButtonFace",
                marginBlockStart: 10,
                borderRadius: 10
            }} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'flex-start',
                    flexDirection: "column",
                    width: "90%",
                    height: "25%"
                }}
            >
                <p style={{
                    fontFamily: "Regular",
                    fontSize: 18,
                    marginBlock: 0
                }}>
                    Saree
                </p>
                <div style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                }}>

                    <p style={{
                        fontFamily: "Bold",
                        fontSize: 20,
                        marginBlock: 0,
                        textAlign: "center",
                        color: colors.Primary2
                    }}>
                        ₹ 1200 <span style={{
                            textDecorationLine: "line-through",
                            fontFamily: "Regular",
                            fontSize: 18,
                            color: colors.darkGrey
                        }}>
                            ₹ 1500
                        </span>
                    </p>
                    <MdDeleteOutline
                        color={colors.white}
                        style={{
                            backgroundColor: "red",
                            padding: 5,
                            borderRadius: 5
                        }} size={22} />
                </div>
            </div>
        </div>
    )
}
