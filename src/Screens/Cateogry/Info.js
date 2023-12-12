import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { colors } from '../../Assets/Theme'
import { Rating } from 'react-simple-star-rating'
import { useDispatch } from 'react-redux'
import { getProductInfo } from '../../Store/actions'

export default function Info() {
    const { state } = useLocation()
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const [product, setProduct] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    const [rating, setRating] = React.useState(4)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getProductInfo(state?.item?.id, setProduct, setLoading))
    }, [])
    console.log(product)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "88%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                color: colors.darkGrey,
                fontFamily: "Bold",
                fontSize: 16
            }}>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: colors.darkGrey,
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = colors.Primary2;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = colors.darkGrey;
                    }}
                >
                    Home
                </Link>
                <p>/</p>
                {
                    state.cat === null ? null :
                        <>
                            <p
                                onClick={() => {
                                    navigate(-2)
                                }}
                                style={{
                                    textDecoration: "none",
                                    color: colors.darkGrey,
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = colors.Primary2;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = colors.darkGrey;
                                }}
                            >Categories</p>
                            <p>/</p>
                            <p
                                onClick={() => {
                                    navigate(-1)
                                }}
                                style={{
                                    textDecoration: "none",
                                    color: colors.darkGrey,
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = colors.Primary2;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = colors.darkGrey;
                                }}
                            >{state.cat}</p>
                            <p>/</p>
                        </>
                }
                <p>{product?.name}</p>


            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "90vw",
                marginBlock: 50
            }}>
                <div style={{
                    height: 550,
                    width: "35%",
                    borderRadius: 10,
                    backgroundColor: "ActiveBorder"
                }} />
                <div style={{
                    height: 550,
                    width: "60%",
                    borderRadius: 10,
                }}>
                    <p style={{
                        fontFamily: "Regular",
                        fontSize: 20,
                        marginBlock: 0
                    }}>
                        Yellow Draped Saree in Georgette with Gota Patti Work Blouse and Multi Colored Cape
                    </p>
                    <div style={{
                        display: "flex",
                        marginBlock: 5
                    }}>
                        <p style={{
                            fontFamily: "Regular",
                            letterSpacing: 2,
                            marginBlock: 0
                        }}>
                            4.5
                        </p>
                        <Rating style={{
                            marginInline: 10
                        }} size={20} initialValue={rating} />
                        <p style={{
                            fontFamily: "Regular",
                            letterSpacing: 2,
                            marginBlock: 0
                        }}>
                            31 Rating
                        </p>
                    </div>
                    <div style={{
                        display: "flex",
                        marginBlock: 5
                    }}>
                        <p style={{
                            fontFamily: "Regular",
                            letterSpacing: 2,
                            fontSize: 22,
                            marginBlock: 0
                        }}>
                            <span style={{
                                color: "red"
                            }}>-10%</span> &nbsp; ₹ 199.99 /-
                        </p>

                    </div>
                    <p style={{
                        fontFamily: "Regular",
                        letterSpacing: 2,
                        marginBlock: 0
                    }}>
                        MRP  : <span style={{ textDecorationLine: "line-through" }}>
                            ₹ 500
                        </span>
                    </p>
                    <p style={{
                        fontFamily: "Regular",
                        marginBlock: 0,
                        color: "lightgrey"
                    }}>
                        Inclusive of all taxes
                    </p>
                    <div style={{ height: 1, width: "100%", backgroundColor: "lightgrey" }} />
                    <p style={{
                        fontFamily: "Regular",
                    }}>
                        Available Quantities :
                    </p>
                    <p style={{
                        fontFamily: "Regular",
                    }}>
                        Products Code :
                    </p>
                    <div style={{ height: 1, width: "100%", backgroundColor: "lightgrey" }} />
                    <div style={{
                        display: "flex",
                        marginBlockStart: 20,
                        width: "60%",
                        justifyContent: "space-between"
                    }}>
                        <button
                            style={{
                                outline: "none",
                                backgroundColor: colors.Primary2,
                                border: "none",
                                height: 50,
                                width: 200,
                                color: colors.Primary1,
                                fontFamily: "Bold",
                                fontSize: 20,
                                borderRadius: 10
                            }}
                        >
                            Buy Now
                        </button>
                        <button
                            style={{
                                outline: "none",
                                backgroundColor: colors.Primary2,
                                border: "none",
                                height: 50,
                                width: 200,
                                color: colors.Primary1,
                                fontFamily: "Bold",
                                fontSize: 20,
                                borderRadius: 10
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
