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
    const toFindDuplicates = arry => arry?.filter((item, index) => arry?.indexOf(item) !== index)
    const [data, setData] = React.useState(state)
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
            height: 550,
            width: mobile ? "90%" : "50%",
            marginBlock: 50,
            borderRadius: 10,
            boxShadow: "5px 5px 10px #88888850",
            justifyContent: "space-evenly",
            alignItems: "center",
        }}>
            <p style={{
                fontFamily: "Black",
                fontSize: 30,
                letterSpacing: 1,
                marginBlock: 0
            }}>
                Checkout
            </p>
            <div style={{
                display: "flex",
                width: mobile ? "95%" : "75%",
                height: 50,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    Total Payable Amount :
                </p>
                <p style={{
                    fontFamily: "Bold",
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    ₹ {state?.total}
                </p>
            </div>
            <div style={{
                display: "flex",
                width: mobile ? "95%" : "75%",
                height: 50,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Black",
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    Address
                </p>
                <FaArrowRight onClick={() => {
                    navigate("/more/moreinfo", {
                        state: {
                            id: 1,
                            name: "Address"
                        }
                    })
                }}
                    color={colors.Primary2}
                    size={25} />
            </div>
            <AddressCard
                containerStyle={{
                    width: mobile ? "88%" : "75%"
                }}
                activeAddress={activeAddress}
                item={activeAddress}
            />
            <button
                onClick={() => {
                    if (orderData?.single) {
                        orderData["address_id"] = activeAddress?.id
                        orderData["payment_mode"] = "ONLINE"
                        orderData["delivery_mode"] = 1
                        orderData["total"] = orderData["total"] * 100
                        console.log(orderData)
                        dispatch(OrderStart(data, setLoading))
                    }
                    else {
                        orderData["address_id"] = activeAddress?.id
                        orderData["payment_mode"] = "ONLINE"
                        orderData["delivery_mode"] = 1
                        orderData["total"] = orderData["total"] * 100
                        console.log(orderData)
                        dispatch(OrderStart(data, setLoading))
                    }
                    // data["address_id"] = activeAddress?.id
                    // data["payment_mode"] = "ONLINE"
                    // data["delivery_mode"] = 1
                    // console.log(data)
                    // dispatch(OrderStart(data, setLoading))
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
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
                        "Pay Now"
                }

            </button>
        </div>
    )
}
