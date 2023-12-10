import React from 'react'
import ProductCard from '../../Components/ProductCard'
import FlatList from 'flatlist-react/lib'
import { Link, useNavigate } from 'react-router-dom'
import { colors } from '../../Assets/Theme'
export default function CatInfo() {
    const navigate = useNavigate()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "100vw",
                height: 200,
                backgroundColor: "ActiveBorder",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <p style={{
                    fontFamily: "Black",
                    fontSize: 50,
                    letterSpacing: 2,
                }}>
                    Sarees .
                </p>
            </div>
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
                <p style={{
                    textDecoration: "none",
                    color: colors.darkGrey,
                    cursor:"pointer"
                }}
                    onMouseEnter={(e) => {
                        e.target.style.color = colors.Primary2;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = colors.darkGrey;
                    }} onClick={() => {
                        navigate(-1)
                    }}>Categories</p>
                <p>/</p>
                <p>Sarees</p>
            </div>
            <div style={{
                width: "95vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBlock: 50
            }}
            >
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    height: "550px",
                    width: "25vw",
                    borderRadius: 10,
                    boxShadow: "5px 5px 10px #88888850",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    paddingInlineStart: 10
                }}>
                    <p style={{
                        fontFamily: "Black",
                        fontSize: 30,
                        letterSpacing: 2,
                    }}>
                        Filters .
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        fontSize: 20,
                        letterSpacing: 2,
                    }}>
                        SubCategory .
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        fontSize: 20,
                        letterSpacing: 2,
                    }}>
                        Price Range .
                    </p>
                </div>
                <div style={{
                    width: "65vw",
                    display: "flex",
                    flexWrap: "wrap",
                    borderRadius: 10,
                    justifyContent: "normal"
                }}>
                    <FlatList
                        list={[0, 1, 2, 3, 4, 5]}
                        renderItem={(item) => (
                            <ProductCard />
                        )}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                    />
                </div>

            </div>
        </div>
    )
}
