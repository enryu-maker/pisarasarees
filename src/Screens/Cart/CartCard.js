import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import { baseURL } from '../../Helper/Helper';
import { useDispatch } from 'react-redux';
export default function CartCard({
    item
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    const dispatch = useDispatch();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: mobile ? "center" : "space-between",
                alignItems: "center",
                height: mobile ? "100px" : "380px",
                width: mobile ? "100%" : 300,
                backgroundColor: "white",
                marginBlockEnd: 10,
                marginInline: mobile ? 0 : 5,
                borderRadius: 10,
                alignSelf: "center",
                boxShadow: "5px 5px 10px #88888850",
            }}
        >
            {
                mobile ?
                    null
                    :
                    <img
                        src={baseURL + item?.image}
                        style={{
                            width: "100%",
                            height: "75%",
                            marginBlockStart: 10,
                            objectFit: "fill",

                        }} />
            }

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
                        fontSize: 20,
                        marginBlock: 0,
                        textAlign: "center",
                        color: colors.Primary2
                    }}>
                        ₹ {item?.discounted_price} <span style={{
                            textDecorationLine: "line-through",
                            fontFamily: "Regular",
                            fontSize: 18,
                            color: colors.darkGrey
                        }}>
                            ₹ {item?.mrp}
                        </span>
                    </p>
                    <MdDeleteOutline
                        onClick={() => {
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: item?.id
                            })
                        }}
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
