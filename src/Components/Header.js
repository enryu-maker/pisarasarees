import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import { colors } from '../Assets/Theme';
import { images } from '../Assets/Image';
export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div style={{
            display: "flex",
            height: "80px",
            width: "100vw",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "5px 5px 10px #88888850",
            position:"sticky",
            top:30
        }}>
            <div style={{
                display: "flex",
                height: "80px",
                width: "88vw",
                backgroundColor: "white",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <img 
                onClick={()=>{
                    navigate("/")
                }}
                src={images.logo}
                style={{
                    height: "125%",
                    width: "110px",
                    cursor:"pointer"
                }} />
                <div style={{
                    height: "100%",
                    display: "flex",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: "white",
                    transition: "all 3s ease",
                }}>
                    <Link
                        to={"/"}
                        style={{
                            fontFamily: "Bold",
                            fontSize: 22,
                            textDecoration: "none",
                            color: "black",
                            borderBlockEnd:location.pathname==="/"?`3px solid ${colors.Primary2}`: null
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to={"/categories"}
                        style={{
                            fontFamily: "Bold",
                            fontSize: 22,
                            textDecoration: "none",
                            color: "black",
                            borderBlockEnd:location.pathname==="/categories"?`3px solid ${colors.Primary2}`: null

                        }}
                    >
                        Categories
                    </Link>
                    <Link
                        to={'/blog'}
                        style={{
                            fontFamily: "Bold",
                            fontSize: 22,
                            textDecoration: "none",
                            color: "black",
                            borderBlockEnd:location.pathname==="/blog"?`3px solid ${colors.Primary2}`: null
                        }}
                    >
                        Blogs
                    </Link>
                </div>
                <div style={{
                    height: "100%",
                    width: "15%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: "white"
                }}>
                    <CiSearch
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={() => {

                        }} size={30} />
                    <CiUser
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            navigate("/login")
                        }}
                        size={30} />
                    <CiShoppingCart
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            navigate("/cart")
                        }} size={30} />
                </div>
            </div>
        </div>
    )
}
