import React from 'react'
import { colors } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import useMediaQuery from './useMediaQuery';
import { images } from '../Assets/Image';
import { useSelector } from 'react-redux';
export default function Footer() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const access = useSelector(state => state.Reducers.access)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{
        fontFamily: "Black",
        fontSize: mobile ? 25 : 40,
        color: colors.white,
        letterSpacing: 2,
        marginBlockEnd: 0
      }}>
        Pisara Sarees
      </p>
      <div
        style={{
          display: "flex",
          height: "100%",
          backgroundColor: "#000000",
          width: "90vw",
          flexWrap: "wrap",
          alignSelf: "center",
          marginBlockEnd: 10
        }}
      >
        <div style={{
          color: colors.Primary1,
          display: "flex",
          flexDirection: "column",
          width: mobile ? "100vw" : "22vw",
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
          {
            access === null ?
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
              :
              <Link
                to={mobile ? "/more" : '/account'}
                style={{
                  fontFamily: "Regular",
                  fontSize: 20,
                  color: colors.Primary1,
                  textDecoration: "none",
                }}>
                My Account
              </Link>
          }
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
          width: mobile ? "100vw" : "22vw",
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
          width: mobile ? "100vw" : "22vw",
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
          width: mobile ? "100vw" : "22vw",
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
      <div style={{
        marginBlock: 20,
        display: "flex",
        width: mobile ? "50%" : "25%",
        justifyContent: "space-evenly"
      }}>
        <Link to={"https://www.facebook.com/pratikshabankar53?mibextid=ZbWKwL"}
          target="_blank">
          <img
            src={images.facebook}
            style={{
              height: mobile ? 25 : 50,
              width: mobile ? 25 : 50,
            }}
          />
        </Link>
        <Link to={"https://instagram.com/pratikshabankar_official?igshid=MzMyNGUyNmU2YQ=="}
          target="_blank">
        <img
          src={images.instagram}
          style={{
            height: mobile ? 25 : 50,
            width: mobile ? 25 : 50,
          }}
        />
        </Link>
        <Link to={"https://youtube.com/@PratikshaBankar?si=eTmDNOztniTopkKp"}
          target="_blank">
        <img
          src={images.youtube}
          style={{
            height: mobile ? 25 : 50,
            width: mobile ? 25 : 50,
          }}
        />
        </Link>
      </div>
      <div style={{
        height: 1,
        backgroundColor: colors.Primary1,
        width: "90%"
      }} />
      <img
        src={images.footlogo}
        style={{
          width: "60%",
          marginBlock: 20
        }}
      />
      <div style={{
        height: 1,
        backgroundColor: colors.Primary1,
        width: "90%"
      }} />
      <p style={{
        fontFamily: "Regular",
        fontSize: 14,
        color: colors.Primary1,
        width: "90%",
        textAlign: "justify"
      }}>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023 © Pisara Sarees™ Ltd. All rights reserved.
      </p>
      <img
        onClick={() => {
          window.location.href("https://nerdtech.in/")
        }}
        src={images.footer}
        style={{
          width: mobile ? "90%" : "auto",
          objectFit: "contain"
        }}
      />
    </div>
  )
}
