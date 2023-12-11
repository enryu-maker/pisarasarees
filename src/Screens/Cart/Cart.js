import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import ProductCard from '../../Components/ProductCard';
import FlatList from 'flatlist-react/lib';
import CartCard from './CartCard';
import { FaArrowRight } from "react-icons/fa";
import useMediaQuery from '../../Components/useMediaQuery';
export default function Cart() {
  const navigate = useNavigate()
  const mobile = useMediaQuery('(max-width: 768px)');

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
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
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBlockEnd:mobile?50 : 0,
        marginBlock:mobile?0 : 50

      }}
      >
        <div style={{
          display: "flex",
          flexFlow: "column",
          // width: "25vw",
          borderRadius: 10,
          boxShadow: "5px 5px 10px #88888850",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          paddingInline: mobile ? 10 : 50,
          alignSelf: "center",
          paddingBlock: mobile ? 0 : 20,
          backgroundColor: colors.Primary1
        }}>
          {
            mobile ?
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 100,
                width: "85vw"
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
                    Qty : 3 Pieces
                  </p>
                  <p style={{
                    fontFamily: "Regular",
                    fontSize: 18,
                    marginBlock: 0
                  }}>
                    Delivery : Free
                  </p>
                  <p style={{
                    fontFamily: "Regular",
                    fontSize: 18,
                    marginBlock: 0
                  }}>
                    Total : $1500
                  </p>
                </div>
                <div style={{
                  backgroundColor: colors.Primary2,
                  height: 55,
                  width: 55,
                  borderRadius: "50%",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
                onClick={() => {
                  navigate("checkout")
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
                }}>
                  Cart Overview
                </p>
                <p style={{
                  fontFamily: "Bold",
                  fontSize: 20,
                }}>
                  Subtotal :
                </p>
                <p style={{
                  fontFamily: "Bold",
                  fontSize: 20,
                  textAlign: "justify"
                }}>
                  Delivery Charges : <span style={{
                    color: colors.green
                  }}> Free</span>
                </p>
                <p style={{
                  fontFamily: "Bold",
                  fontSize: 20,
                  textAlign: "justify"
                }}>
                  Total :
                </p>
                <button
                  onClick={() => {
                    navigate("checkout")
                  }}
                  style={{
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
                  Checkout
                </button>
              </>
          }
        </div>
        <div style={{
          width: mobile ? "90vw" : "65vw",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: 10,
          justifyContent: "normal",
          alignItems: "center",
          alignSelf: "center"
        }}>
          <FlatList
            list={[0, 1, 2]}
            renderItem={(item) => (
              <CartCard />
            )}
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
        </div>

      </div>
    </div>
  )
}
