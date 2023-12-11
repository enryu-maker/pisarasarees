import React from 'react'
import { colors } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import useMediaQuery from './useMediaQuery';
export default function Footer() {
  const mobile = useMediaQuery('(max-width: 768px)');
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.black,
        width: "100vw",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{
        fontFamily: "Black",
        fontSize:mobile?25 : 40,
        color: colors.white,
        letterSpacing: 2,
        marginBlockEnd:0
      }}>
        Pisara Sarees
      </p>
      <div
        style={{
          display: "flex",
          height: "100%",
          backgroundColor: colors.black,
          width: "90vw",
          flexWrap: "wrap",
          alignSelf: "center",
          marginBlockEnd: 50
        }}
      >
        <div style={{
          color: colors.Primary1,
          display: "flex",
          flexDirection: "column",
          width: mobile? "100vw" : "22vw",
        }}>
          <p style={{
            fontFamily: "Black",
            fontSize: 22
          }}>
            Page Sites
          </p>
          <Link
            to={'/'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Home
          </Link>
          <Link
            to={'/login'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Login
          </Link>
          <Link
            to={'/cart'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Cart
          </Link>
          <Link
            to={"/categories"}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Categories
          </Link>
          <Link
            to={"/blog"}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Blog
          </Link>
        </div>
        <div style={{
          color: colors.Primary1,
          display: "flex",
          flexDirection: "column",
          width: mobile? "100vw" : "22vw",
        }}>
          <p style={{
            fontFamily: "Black",
            fontSize: 22
          }}>
            Help
          </p>
          <Link
            to={'/privacy-policy'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Privacy Policy
          </Link>
          <Link
            to={'/shipping-policy'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Shipping Policy
          </Link>
          <Link
            to={'/cancellation&return'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Cancellation & Returns
          </Link>
        </div>
        <div style={{
          color: colors.Primary1,
          display: "flex",
          flexDirection: "column",
          width:mobile?"100vw" : "22vw",
        }}>
          <p style={{
            fontFamily: "Black",
            fontSize: 22
          }}>
            Company
          </p>
          <Link
            to={'/about'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            About
          </Link>
          <Link
            to={'/terms&condition'}
            style={{
              fontFamily: "Regular",
              fontSize: 20,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            Terms & Condition
          </Link>
        </div>
        <div style={{
          color: colors.Primary1,
          display: "flex",
          flexDirection: "column",
          width: mobile? "100vw" : "22vw",
        }}>
          <p style={{
            fontFamily: "Black",
            fontSize: 22
          }}>
            Contact-Us
          </p>
          <Link
            style={{
              display: "flex",
              flexDirection: "row",
              // alignSelf:"center",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Regular",
              fontSize: 18,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            <IoLocationOutline style={{
              marginInlineEnd: 5
            }} size={20} /> Gangapur Road Nashik
          </Link>
          <Link
            style={{
              display: "flex",
              flexDirection: "row",
              // alignSelf:"center",
              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Regular",
              fontSize: 18,
              color: colors.Primary1,
              textDecoration: "none",
            }}>
            <CiMail style={{
              marginInlineEnd: 5
            }} size={20} /> pisarasarees@gmail.com
          </Link>
        </div>
      </div>


    </div>
  )
}
