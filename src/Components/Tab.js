import React from 'react'
import { colors } from '../Assets/Theme'
import { TfiMore } from "react-icons/tfi";
import { Link, useLocation } from 'react-router-dom';
import { IoIosMore } from "react-icons/io";
import { CiShoppingCart, CiHome, CiMenuBurger } from "react-icons/ci";
export default function Tab() {
    const location = useLocation()
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: colors.Primary2,
                height: "70px",
                width: "100vw",
                position: "sticky",
                bottom: 0
            }}
        >
            <Link to={"/"}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none"
                }}
            >
                <CiHome size={32} color={colors.Primary1} />
                <p
                    style={{
                        marginBlock: 0,
                        fontFamily: location.pathname === "/" ? "Bold" : "Regular",
                        fontSize: 14,
                        color: location.pathname === "/" ? colors.Primary1 : colors.darkGrey
                    }}
                >Home</p>
            </Link>
            <Link to={"/categories"}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none"
                }}
            >
                <CiMenuBurger size={32} color={colors.Primary1} />
                <p
                    style={{
                        marginBlock: 0,
                        fontFamily: location.pathname === "/categories" ? "Bold" : "Regular",
                        fontSize: 14,
                        color: location.pathname === "/categories" ? colors.Primary1 : colors.darkGrey
                    }}
                >Categories</p>
            </Link>
            <Link to={"/cart"}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none"
                }}
            >
                <CiShoppingCart size={32} color={colors.Primary1} />
                <p
                    style={{
                        marginBlock: 0,
                        fontFamily: location.pathname === "/cart" ? "Bold" : "Regular",
                        fontSize: 14,
                        color: location.pathname === "/cart" ? colors.Primary1 : colors.darkGrey
                    }}
                >Cart</p>
            </Link>
            <Link to={"/more"}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none"
                }}
            >
                <TfiMore size={32} color={colors.Primary1} />
                <p
                    style={{
                        marginBlock: 0,
                        fontFamily: location.pathname === "/more" ? "Bold" : "Regular",
                        fontSize: 14,
                        color: location.pathname === "/more" ? colors.Primary1 : colors.darkGrey
                    }}
                >More</p>
            </Link>
        </div>
    )
}
