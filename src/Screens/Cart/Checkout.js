import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import AddressCard from '../Profile/AddressCard';
export default function Checkout() {
    const navigate = useNavigate()
    const mobile = useMediaQuery('(max-width: 768px)');
    const {state} = useLocation()
    const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
    const id = toFindDuplicates(state.id)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: 550,
            width: mobile?"90%" : "50%",
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
                width: mobile?"95%":"75%",
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
                    ₹ {state?.amount}
                </p>
            </div>
            <div style={{
                display: "flex",
                width: mobile?"95%":"75%",
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
            <AddressCard
                containerStyle={{
                    width:"88%"
                }}
            />
            <button
            onClick={() => { 
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
