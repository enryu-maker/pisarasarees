import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import ProductCard from '../../Components/ProductCard';
import FlatList from 'flatlist-react/lib';
import CartCard from './CartCard';
export default function Cart() {
  const navigate = useNavigate()
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
        <p>Cart</p>
      </div>
      <p style={{
        fontFamily: "Black",
        fontSize: 40,
        letterSpacing: 2,
        marginBlockStart: 0
      }}>
        My Cart .
      </p>
      <div style={{
        width: "95vw",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBlock: 50
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
          paddingInline: 60,
          paddingBlock: 20,
          backgroundColor:colors.Primary1
        }}>
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
              cursor:"pointer"
            }}>
            Checkout
          </button>
        </div>
        <div style={{
          width: "65vw",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: 10,
          justifyContent: "normal"
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
