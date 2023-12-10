import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
export default function Checkout() {
    const navigate = useNavigate()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: 550,
            width: "50%",
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
                width: "75%",
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
                    Total Payable Amount
                </p>
                <p style={{
                    fontFamily: "Black",
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 0
                }}>
                    ₹ 200
                </p>
            </div>
            <div style={{
                display: "flex",
                width: "75%",
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
                <FaArrowRight onClick={()=>{
                    navigate("/address")
                }} 
                color={colors.Primary2}
                size={25} />

            </div>
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
            Pay Now
          </button>
        </div>
    )
}
