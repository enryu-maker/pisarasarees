import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import ProductCard from '../../Components/ProductCard';
import FlatList from 'flatlist-react/lib';
import CartCard from './CartCard';
import { FaArrowRight } from "react-icons/fa";
import useMediaQuery from '../../Components/useMediaQuery';
import { useSelector } from 'react-redux';
import { images } from '../../Assets/Image';
export default function Cart() {
  const navigate = useNavigate()
  const mobile = useMediaQuery('(max-width: 768px)');
  const cart = useSelector(state => state.Reducers.cart)
  const [price, setPrice] = React.useState(0)
  const [qty, setQty] = React.useState(0)
  const [id, setId] = React.useState([])
  const [subtotal, setSubtotal] = React.useState({})
  const toFindDuplicates = arry => arry?.filter((item, index) => arry?.indexOf(item) !== index)


  function getTotal(data) {
    let p = 0
    let q = 0
    let tid = []
    data.map((item) => {
      p = p + parseInt(item?.discounted_price)
      q = q + parseInt(item?.quantity)
      console.log(item)
      if (item?.id in id){
      }
      else{
        tid.push(item?.id)
      }
      subtotal[item?.id] = item?.discounted_price
    })
    console.log(tid)
    setPrice(p)
    setQty(q)
    setId(tid)
  }
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    getTotal(cart)
  }, [])
  console.log(id)
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }}>

      <div style={{
        width: "88%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        color: colors.darkGrey,
        fontFamily: "Bold",
        fontSize: mobile ? 12 : 16
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
        <p>Cart</p>
      </div>
      <p style={{
        fontFamily: "Black",
        fontSize: mobile ? 25 : 40,
        letterSpacing: 2,
        marginBlockStart: 0
      }}>
        My Cart .
      </p>
      <div style={{
        width: "95vw",
        display: "flex",
        flexDirection: mobile ? "column-reverse" : "row-reverse",
        justifyContent: cart.length > 0 ? "space-between" : "center",
        alignItems: "flex-start",
        marginBlockEnd: mobile ? 50 : 0,
        marginBlock: mobile ? 0 : 50,
      }}
      >
        {
          cart.length > 0 ?
            <>
              <div style={{
                display: "flex",
                flexFlow: "column",
                borderRadius: 10,
                boxShadow: "5px 5px 10px #88888850",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                paddingInline: mobile ? 10 : 50,
                alignSelf: "center",
                paddingBlock: mobile ? 0 : 20,
                backgroundColor: colors.Primary1,
                marginBlockEnd:50
              }}>
                {
                  mobile ?
                    <div style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBlock:15,
                      width: "85vw",
                    }}>
                      <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}>
                        <p style={{
                          fontFamily: "Regular",
                          fontSize: 18,
                          marginBlock: 0
                        }}>
                          {` Qty : ${qty} Pieces`}
                        </p>
                        <p style={{
                          fontFamily: "Regular",
                          fontSize: 18,
                          marginBlock: 0
                        }}>
                          {`Total : ₹ ${price}`}
                        </p>
                      </div>
                      <div style={{
                        backgroundColor: colors.Primary2,
                        height: 55,
                        width: 55,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                        onClick={() => {
                          navigate("checkout",{
                            state:{
                              "total":price,
                              "items":id,
                              "subtotal":JSON.stringify(subtotal)
                            }
                          })
                        }}
                      >
                        <FaArrowRight size={25} color={colors.Primary1} />
                      </div>
                    </div> :
                    <>
                      <p style={{
                        fontFamily: "Black",
                        fontSize: 30,
                        letterSpacing: 2,
                        marginBlock:0
                      }}>
                        Cart Overview
                      </p>
                      <p style={{
                          fontFamily: "Bold",
                          fontSize: 18,
                          marginBlock:10
                        }}>
                          {` Qty : ${qty} Pieces`}
                        </p>
                        <p style={{
                          fontFamily: "Bold",
                          fontSize: 18,
                          marginBlock:10
                        }}>
                          {`Total : ₹ ${price}`}
                        </p>
                      <button
                        onClick={() => {
                          navigate("checkout",{
                            state:{
                              "total":price,
                              "items":id,
                              "subtotal":JSON.stringify(subtotal),
                              "single":false
                            }
                          })
                        }}
                        style={{
                          backgroundColor: colors.Primary2,
                          padding: 10,
                          fontFamily: "Bold",
                          fontSize: 18,
                          color: colors.white,
                          borderRadius: 8,
                          cursor: "pointer"
                        }}>
                       { `Proceed with ${qty} Items `}
                      </button>
                    </>
                }
              </div>
            </>
            :
            null
        }
        <div style={{
          width: mobile || cart.length <= 0 ? "90vw" : "65vw",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}>
          <FlatList
            list={cart}
            renderItem={(item,index) => (
              <CartCard key={index} item={item} />
            )}
            renderWhenEmpty={() =>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  alignSelf: "center",
                }}
              >
                <img
                  src={images.cart}
                  style={{
                    height: 100,
                    width: 100
                  }} />
                <p style={{
                  fontFamily: "Bold",
                  fontSize: mobile ? 25 : 35,
                  letterSpacing: 2,
                  marginBlockStart: 0,
                  alignSelf: "center",
                  color: colors.Primary2
                }}>
                  Cart is Empty
                </p>
              </div>}
          />
        </div>

      </div>
    </div>
  )
}
