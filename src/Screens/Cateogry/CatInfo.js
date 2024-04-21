import React from 'react'
import ProductCard from '../../Components/ProductCard'
import FlatList from 'flatlist-react/lib'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { colors } from '../../Assets/Theme'
import useMediaQuery from '../../Components/useMediaQuery'
export default function CatInfo() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [sorted,setSorted] = React.useState([])

    const navigate = useNavigate()
    const { state } = useLocation()
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        var data = state?.item?.value?.data
        data.sort(function (a, b) {
            return b.discounted_price - a.discounted_price;
        });
        setSorted(data)
    }, [])
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
                backgroundColor: colors.Primary2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <p style={{
                    fontFamily: "Black",
                    fontSize: 50,
                    letterSpacing: 2,
                    color:colors.Primary1,
                }}>
                    {state?.item?.name} .
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
                    cursor: "pointer"
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
                <p>{state?.item?.name}</p>
            </div>
            <div style={{
                width: mobile ? "95%" : "90%",
                display: "flex",
                flexWrap: "wrap",
                alignSelf: "center",
                justifyContent: mobile ? "space-evenly" : "center",
            }}>
                <FlatList
                    list={sorted}
                    renderItem={(item,index) => (
                        <ProductCard item={item} key={index} cat={state?.item?.name} />
                    )}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </div>
        </div>
    )
}
