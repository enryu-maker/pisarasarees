import React from 'react'
import { useSelector } from 'react-redux'
import { images } from '../Assets/Image'

export default function Invoice({
    address,
}) {
    const cart = useSelector(state => state.Reducers.cart)
    const [total,setTotal]  = React.useState(0)
    React.useEffect(()=>{
        let amount = 0
        cart.map((item)=>{
            amount+= item?.discounted_price * item?.quantity
        })
        setTotal(amount)
    },[])
    return (
        <div id='capture' style={{
            display: "flex",
            flexDirection: "column",
            height: "6in",
            width: "4in",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "white",
            alignSelf:"center"
        }}>
            <div style={{
                display: "flex",
                width: "95%",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <p style={{
                    fontFamily: "Regular",
                    marginBlock: 0,
                    alignSelf: "center",
                    color: "black",
                    fontSize: 22
                }}>
                    <span style={{
                        fontFamily: "Black",
                    }}>pisarasarees</span>.in
                </p>
                <p style={{
                    fontFamily: "Bold",
                    marginBlock: 0,
                    fontSize: 8,
                    alignSelf: "center",
                    color: "black"
                }}>
                    Tax Invoice / Bill of Supply / Cash Memo
                </p>
            </div>
            <div style={{
                display: "flex",
                width: "95%",
                justifyContent: "space-between",
                alignItems: "flex-start"
            }}>
                <div style={{
                    display: "flex",
                    width: "48%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12
                    }}>
                        Sold By :
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12,
                        textAlign: "left"
                    }}>
                        Pratiksha B Enterprises
                        <br />
                        <span style={{
                            fontFamily: "Regular",
                            textTransform: "lowercase"
                        }}>
                            SAAT BUNGLOW COLONY,KATHE GALLI,
                            NEAR ATALBIHARI SCHOOL,
                            DWARKA ,NASHIK, Maharashtra
                            422011
                        </span>
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12
                    }}>
                        PAN No :<span style={{
                            fontFamily: "Regular",
                        }}> CFSPB1088Q</span>
                    </p>
                    <p id='content' style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12
                    }}>
                        Order Number :<span style={{
                            fontFamily: "Regular",
                        }}> 12345679</span>
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12
                    }}>
                        Order Date :<span style={{
                            fontFamily: "Regular",
                        }}> 12/12/2023</span>
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    width: "48%",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                }}>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12
                    }}>
                        Billing Address :
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12,
                        textAlign: "right"
                    }}>
                        Akif Khan
                        <br />
                        <span style={{
                            fontFamily: "Regular",
                            textTransform: "lowercase"
                        }}>
                            6/5 Ambika Sankul, Virat Nagar
                            Satpur Ambad Link road,Nashik,
                            Maharastra, India, 422010
                        </span>
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12
                    }}>
                        Shipping Address :
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12,
                        textAlign: "right"
                    }}>
                        Akif Khan
                        <br />
                        <span style={{
                            fontFamily: "Regular",
                            textTransform: "lowercase"
                        }}>
                            6/5 Ambika Sankul, Virat Nagar
                            Satpur Ambad Link road,Nashik,
                            Maharastra, India, 422010
                        </span>
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlock: 0,
                        color: "black",
                        fontSize: 12
                    }}>
                        Invoice Number :<span style={{
                            fontFamily: "Regular",
                        }}> 12345679</span>
                    </p>
                </div>
            </div>
            <table style={{
                width: "90%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                // backgroundColor: "red",
                fontSize: 12

            }}>
                <tr style={{
                    fontFamily: "Bold",
                    fontSize: 11,
                }}>
                    <th>SR.No</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total Amount</th>
                </tr>
                {
                    cart.map((item, index) => (
                        <tr style={{
                            fontFamily: "Regular",
                            fontSize: 10,
                        }}>
                            <th>{index + 1}</th>
                            <th>{item?.name}</th>
                            <th>₹ {parseInt(item?.discounted_price)}</th>
                            <th>{item?.quantity}</th>
                            <th>₹ {parseInt(item?.discounted_price) * item?.quantity}</th>
                        </tr>

                    ))
                }
                <tr style={{
                    fontFamily: "Black",
                    fontSize: 10,
                    alignSelf: "flex-end",
                    marginBlock: 10
                }}>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th >Total Amount</th>
                    <th>₹ {total}</th>
                </tr>
            </table>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                flexDirection: "column",
                height: 80,
                width: "90%",
                border: "2px solid darkgray"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    marginBlock: 0,
                    color: "black",
                    marginInlineEnd: 5,
                    fontSize: 14
                }}>
                    For Pratiksha B Enterprises :
                </p>
                <img src={images.sign} style={{
                    height:40,
                    width:60
                }}/>
                <p style={{
                    fontFamily: "Bold",
                    marginBlock: 0,
                    color: "black",
                    marginInlineEnd: 5,
                    fontSize: 12
                }}>
                    Authorized Signatory
                </p>
            </div>
        </div>
    )
}
