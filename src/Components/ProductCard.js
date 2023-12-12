import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { colors } from '../Assets/Theme';
import useMediaQuery from './useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../Helper/Helper';
export default function ProductCard({
    item,
    cat
}) {
    const navigate = useNavigate()
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: mobile ? "220px" : "380px",
                width: mobile ? 170 : 300,
                backgroundColor: "white",
                marginBlockEnd: 10,
                marginInline: mobile ? 0 : 5,
                borderRadius: 10,
                boxShadow: "5px 5px 10px #88888850",
                cursor: "pointer"
            }}
            onClick={() => {
                navigate(`info/${item?.id}`, {
                    state: {
                        item: item,
                        cat: cat
                    }
                })
            }}
        >
            <img
                src={baseURL + item?.image}
                style={{
                    width: "95%",
                    height: "75%",
                    marginBlockStart: 10,
                    borderRadius: 10,
                    objectFit:"contain"
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
                    fontSize: mobile ? 12 : 18,
                    marginBlock: 0
                }}>
                    {item?.name}
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
                        fontSize: mobile ? 14 : 20,
                        marginBlock: 0,
                        textAlign: "center",
                        color: colors.Primary2
                    }}>
                        ₹ {item?.discounted_price} <span style={{
                            textDecorationLine: "line-through",
                            fontFamily: "Regular",
                            fontSize: mobile ? 12 : 18,
                            color: colors.darkGrey
                        }}>
                            ₹ {item?.mrp}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
