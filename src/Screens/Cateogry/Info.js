import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { colors } from '../../Assets/Theme'
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, checkPincode, getProductInfo } from '../../Store/actions'
import { baseURL } from '../../Helper/Helper'
import useMediaQuery from '../../Components/useMediaQuery'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner'
import { FaLink } from "react-icons/fa6";
import { images } from '../../Assets/Image'
export default function Info() {
    const { state, pathname } = useLocation()
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const mobile = useMediaQuery('(max-width: 768px)');
    const [product, setProduct] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [loading1, setLoading1] = React.useState(false)
    const navigate = useNavigate()
    const [message, setMessage] = React.useState("")
    const [rating, setRating] = React.useState(4)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getProductInfo(pathname.split('/').slice(-1)[0], setProduct, setLoading))
        // dispatch(checkPincode(location?.pincode, setLoading, setMessage))
    }, [])
    function calcPercentage(x, y) {
        return Math.round(((x - y) / y) * 100);
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {
                loading ?
                    <Oval
                        height={mobile ? 50 : 80}
                        width={mobile ? 50 : 80}
                        color={colors.Primary2}
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor={colors.Primary2}
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                    :

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
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "Regular",
                                fontSize: 20,
                                marginBlock: 0
                            }}>
                                {product?.name}
                                {
                                    loading1 ?
                                        <Oval
                                            height={15}
                                            width={15}
                                            color={colors.Primary2}
                                            wrapperStyle={{
                                                marginInline: 10
                                            }}
                                        />
                                        :
                                        <FaLink
                                            onClick={() => {
                                                setLoading1(true)
                                                setTimeout(async () => {
                                                    await navigator.clipboard.writeText("www.pisarasarees.in/#" + pathname)
                                                    toast.success("Link Copied", {
                                                        position: "top-center",
                                                        autoClose: 1000,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                    });
                                                    setLoading1(false)
                                                }, 3000)
                                            }}
                                            size={20}
                                            style={{
                                                paddingInline: 10,
                                            }}
                                        />
                                }

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

                                {
                                    message === "" ? null :
                                        <p style={{
                                            fontFamily: "Regular",
                                            letterSpacing: 2,
                                            marginBlock: 0
                                        }}>
                                            {message}
                                        </p>
                                }

                                <Rating style={{
                                    marginInline: 10
                                }} size={20} readonly initialValue={4} />
                                <p style={{
                                    fontFamily: "Regular",
                                    letterSpacing: 2,
                                    marginBlock: 0
                                }}>
                                    {Math.floor(Math.random() * 100) + 1} Rating
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
                                    }}>{`-${calcPercentage(product?.mrp, product?.discounted_price)}%`}</span> &nbsp; ₹ {product?.discounted_price} /-
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
                                    disabled={product?.quantity <= 0 ? true : false}
                                    onClick={() => {
                                        window.open(`https://wa.me/+918007446531?text=I am interested in ${product?.name} with product id ${pathname.split('/').slice(-1)[0]}`)
                                    }}
                                    style={{
                                        backgroundColor: product?.quantity <= 0 ? colors.Primary3 : colors.Primary2,
                                        height: 50,
                                        width: mobile ? 120 : 250,
                                        color: colors.Primary1,
                                        fontFamily: "Bold",
                                        fontSize: mobile ? 16 : 20,
                                        borderRadius: 10,
                                        cursor: "pointer",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent:"center"
                                    }}
                                >
                                    <img src={images.whatsapp}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            marginInline:5
                                    }}
                                    />
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
