import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { colors } from '../Assets/Theme';
import useMediaQuery from './useMediaQuery';
export default function ProductCard({
    img,
    name,
    actual,
    discount,
    desc,
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height:mobile? "200px" : "380px",
                width:mobile?150 : 300,
                backgroundColor: "white",
                marginBlockEnd:10,
                marginInline:mobile?0 :5,
                borderRadius: 10,
                boxShadow: "5px 5px 10px #88888850",
                cursor:"pointer"
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
                    fontFamily:"Regular",
                    fontSize:mobile?12 :18,
                    marginBlock:0
                }}>
                    Saree
                </p>
                <div style={{
                    flexDirection:"row",
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"flex-start",
                    width:"100%",
                }}>

                <p style={{
                    fontFamily:"Bold",
                    fontSize:mobile?14 : 20,
                    marginBlock:0,
                    textAlign:"center",
                    color:colors.Primary2
                }}>
                    ₹ 1200 <span style={{
                        textDecorationLine: "line-through",
                        fontFamily:"Regular",
                        fontSize:mobile?12 :18,
                        color:colors.darkGrey
                    }}>
                        ₹ 1500
                    </span>
                </p>
                <MdAddShoppingCart 
                color={colors.white}
                style={{
                    backgroundColor:colors.Primary2,
                    padding:mobile?2:5,
                    borderRadius:5
                }} size={mobile?18:22} />
                </div>
            </div>
        </div>
    )
}
