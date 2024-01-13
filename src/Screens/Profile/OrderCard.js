import React from 'react'
import moment from 'moment/moment'
import { colors } from '../../Assets/Theme'
import OrderInfo from './OrderInfo'
import useMediaQuery from '../../Components/useMediaQuery'
export default function OrderCard({
    items,
}) {
    const [show, setshow] = React.useState(false)
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{
            width: mobile?"88%" : "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            borderRadius: 10,
            marginBlock: 10,
            alignSelf:"center"
        }}>
            <OrderInfo show={show} data={items} setShow={setshow} />
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Black",
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    Order Id: {items?.id}
                </p>
                <p style={{
                    fontFamily: "Regular",
                    fontSize: 16,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    {moment(items?.created_at).format("DD MMM YYYY")}
                </p>
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Regular",
                    fontSize: 16,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    {items?.items?.split(",").length} Items
                </p>
                <p style={{
                    fontFamily: "Regular",
                    fontSize: 16,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    ₹ {items?.total / 100}
                </p>
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
                <button style={{
                    fontFamily: "Bold",
                    fontSize: 16,
                    letterSpacing: 1,
                    marginBlock: 0,
                    border: "none",
                    color: colors.Primary2,
                    backgroundColor: "transparent",
                    padding: 5,
                }}
                onClick={() => {
                    setshow(true)
                }}
                >
                    View Details
                </button>
            </div>
        </div>
    )
}
