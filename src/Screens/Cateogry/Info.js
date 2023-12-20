import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { colors } from '../../Assets/Theme'
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, getProductInfo } from '../../Store/actions'
import { baseURL } from '../../Helper/Helper'
import useMediaQuery from '../../Components/useMediaQuery'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Info() {
    const { state } = useLocation()
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const mobile = useMediaQuery('(max-width: 768px)');
    const [product, setProduct] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    const [rating, setRating] = React.useState(4)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.Reducers.cart)
    React.useEffect(() => {
        dispatch(getProductInfo(state?.item?.id, setProduct, setLoading))
    }, [])
    function calcPercentage(x, y) {
        return ((x - y) / y) * 100;
      }
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
                <p>{product?.product_code}</p>


            </div>
            <div style={{
                display: "flex",
                flexDirection: mobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "90vw",
                marginBlock: mobile ? 0 : 50
            }}>
                <img
                    src={baseURL + product?.image}
                    style={{
                        height: 550,
                        width: mobile ? "100%" : "35%",
                        borderRadius: 10,
                        objectFit: "contain"
                    }} />
                <div style={{
                    height: 550,
                    width: mobile ? "95%" : "60%",
                    borderRadius: 10,
                    alignSelf: "center"
                }}>
                    <p style={{
                        fontFamily: "Regular",
                        fontSize: 20,
                        marginBlock: 0
                    }}>
                        {product?.name}
                    </p>
                    {
                        product?.description?.split('|').map(str => <p style={{
                            fontFamily: "Regular",
                            fontSize: 14,
                            marginBlock: 0,
                            textAlign: "justify"
                        }}>{str.trim()}</p>)
                    }
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
                        }} size={20} readonly initialValue={4} />
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
                            }}>{`-${calcPercentage(product?.mrp,product?.discounted_price)}%`}</span> &nbsp; ₹ {product?.discounted_price} /-
                        </p>

                    </div>
                    <p style={{
                        fontFamily: "Regular",
                        letterSpacing: 2,
                        marginBlock: 0
                    }}>
                        MRP  : <span style={{ textDecorationLine: "line-through" }}>
                            ₹ {product?.mrp}
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
                        Available Quantities : <span
                        style={{
                            fontFamily: "Bold",
                            color: product?.quantity <= 0 ? "red" : colors.darkGrey,
                        }}
                        >{product?.quantity <= 0 ? "Out Of Stock" : product?.quantity}</span> 
                    </p>
                    <p style={{
                        fontFamily: "Regular",
                    }}>
                        Products Code : {product?.product_code}
                    </p>
                    <div style={{ height: 1, width: "100%", backgroundColor: "lightgrey" }} />
                            <div style={{
                                display: "flex",
                                marginBlockStart: 20,
                                width: mobile ? "80%" : "70%",
                                justifyContent: "space-between"
                            }}>
                                <button
                                    disabled={product?.quantity <= 0?true:false}
                                    onClick={() => {
                                        navigate('/checkout', {
                                            state: {
                                                    items:[state?.item?.id],
                                                    single:true,
                                                    total:parseInt(product?.discounted_price),
                                                    subtotal:`{${state?.item?.id } : ${product?.discounted_price} }`
                                            }
                                        })
                                    }}
                                    style={{
                                        backgroundColor:product?.quantity <= 0?colors.Primary3 : colors.Primary2,
                                        height: 50,
                                        width: mobile ? 120 : 250,
                                        color: colors.Primary1,
                                        fontFamily: "Bold",
                                        fontSize: mobile ? 16 : 20,
                                        borderRadius: 10,
                                        cursor: "pointer"
                                    }}
                                >
                                    Buy Now
                                </button>
                                <button
                                    disabled={product?.quantity <= 0?true:false}
                                    onClick={() => {
                                        product["id"] = state?.item?.id
                                        dispatch(addCart(cart, product))
                                    }}
                                    style={{
                                        backgroundColor: product?.quantity <= 0?colors.Primary3 : colors.Primary2,
                                        height: 50,
                                        width: mobile ? 120 : 250,
                                        color: colors.Primary1,
                                        fontFamily: "Bold",
                                        fontSize: mobile ? 16 : 20,
                                        borderRadius: 10,
                                        cursor: "pointer"
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
