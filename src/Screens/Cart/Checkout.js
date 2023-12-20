import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import AddressCard from '../Profile/AddressCard';
import { useDispatch, useSelector } from 'react-redux';
import { OrderStart, getActiveAddress } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';
export default function Checkout() {
    const navigate = useNavigate()
    const mobile = useMediaQuery('(max-width: 768px)');
    const { state } = useLocation()
    const [orderData, setOrderData] = React.useState(state)
    const [loading, setLoading] = React.useState(false)
    const activeAddress = useSelector(state => state.Reducers.activeAddress)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getActiveAddress())
    }, [])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            width: mobile ? "95%" : "45%",
            marginBlock: 50,
            borderRadius: 8,
            boxShadow: "5px 5px 10px #88888850",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingBlock: 10
        }}>
            <p style={{
                fontFamily: "Black",
                fontSize: 30,
                letterSpacing: 1,
                marginBlock: 5
            }}>
                Checkout
            </p>
            <div style={{
                display: "flex",
                width: mobile ? "95%" : "75%",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Black",
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 10
                }}>
                    Delivery Address
                </p>
                <p onClick={() => {
                        navigate(mobile?"/more/moreinfo":"account", {
                            state: {
                                id: 1,
                                name: "Address"
                            }
                        })
                }} style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 10,
                    color: colors.Primary2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {
                        mobile ?
                            <>
                                Change
                                <FaArrowRight
                                    color={colors.Primary2}
                                    style={{
                                        marginInline: 5
                                    }}
                                />
                            </>
                            :
                            <>
                                Change Address
                                <FaArrowRight
                                    color={colors.Primary2}
                                    style={{
                                        marginInline: 5
                                    }}
                                />
                            </>
                    }

                </p>

            </div>
            <AddressCard
                containerStyle={{
                    width: mobile ? "88%" : "75%",
                    marginTop: 0
                }}
                // activeAddress={activeAddress}
                item={activeAddress}
            />
            <div style={{
                height: 2,
                width: mobile ? "88%" : "75%",
                backgroundColor: "lightgray",
                marginBlock: 20
            }} />
            <p style={{
                fontFamily: "Black",
                fontSize: 20,
                letterSpacing: 1,
                marginBlock: 10,
                textAlign: "left",
                width: mobile ? "95%" : "75%",
            }}>
                Order Summary
            </p>
            <div style={{
                display: "flex",
                width: mobile ? "88%" : "75%",
                height: 50,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    Subtotal :
                </p>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    ₹ {state?.total}
                </p>
            </div>
            <div style={{
                display: "flex",
                width: mobile ? "88%" : "75%",
                height: 50,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    Delivery Charges :
                </p>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    ₹ 100
                </p>
            </div>
            <div style={{
                display: "flex",
                width: mobile ? "88%" : "75%",
                height: 50,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    Total :
                </p>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    ₹ {state?.total + 100}
                </p>
            </div>
            <div style={{
                display: "flex",
                width: mobile ? "88%" : "75%",
                height: 50,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    Promotion Applied :
                </p>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5
                }}>
                    - ₹ 100
                </p>
            </div>
            <div style={{
                height: 2,
                width: mobile ? "88%" : "75%",
                backgroundColor: "lightgray",
                marginBlock: 20
            }} />
            <div style={{
                display: "flex",
                width: mobile ? "88%" : "75%",
                height: 50,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5,
                    fontSize: 25,
                    color: colors.Primary2
                }}>
                    Order Total :
                </p>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 5,
                    fontSize: 25,
                    color: colors.Primary2
                }}>
                    ₹ {state?.total} /-
                </p>
            </div>
            <div style={{
                height: 2,
                width: mobile ? "88%" : "75%",
                backgroundColor: "lightgray",
                marginBlock: 20
            }} />
            <button
                onClick={() => {
                    if (orderData?.single) {
                        orderData["address_id"] = activeAddress?.id
                        orderData["payment_mode"] = "ONLINE"
                        orderData["delivery_mode"] = 1
                        orderData["total"] = orderData["total"] * 100
                        console.log(orderData)
                        dispatch(OrderStart(orderData, setLoading, navigate))
                    }
                    else {
                        orderData["address_id"] = activeAddress?.id
                        orderData["payment_mode"] = "ONLINE"
                        orderData["delivery_mode"] = 1
                        orderData["total"] = orderData["total"] * 100
                        console.log(orderData)
                        dispatch(OrderStart(orderData, setLoading, navigate))
                    }
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colors.Primary2,
                    padding: 10,
                    fontFamily: "Bold",
                    fontSize: 18,
                    color: colors.white,
                    width: 200,
                    borderRadius: 8,
                    cursor: "pointer"
                }}>
                {
                    loading ?
                        <Oval
                            height={30}
                            width={30}
                            color={colors.Primary1}
                        />
                        :
                        "Place Your Order"
                }

            </button>
            <p style={{
                fontFamily:"Regular",
                fontSize:12,
                width: mobile ? "88%" : "75%",
                textAlign:"justify"
            }}>
                By placing your order, you agree to <span onClick={()=>{
                    navigate("/privacy-policy")
                }} style={{
                    color:colors.Primary2
                }}>Pisara's privacy policy</span> and <span onClick={()=>{
                    navigate("/terms&condition")
                }} style={{
                    color:colors.Primary2
                }}>conditions</span> of use.
            </p>
        </div>
    )
}
