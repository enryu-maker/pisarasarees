import React from 'react'
import ProductCard from '../../Components/ProductCard'
import FlatList from 'flatlist-react/lib'
import { colors } from '../../Assets/Theme'
import useMediaQuery from '../../Components/useMediaQuery'
import { useSelector } from 'react-redux'
export default function ViewAll() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const categories = useSelector(state => state.Reducers.cat)
    const [sorted,setSorted] = React.useState([])
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        var data = categories[0]?.value?.data
        data.sort(function (a, b) {
            return a.discounted_price - b.discounted_price;
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
                    color: colors.Primary1,
                }}>
                    Sarees .
                </p>
            </div>
            <div style={{
                width: mobile ? "95%" : "90%",
                display: "flex",
                marginTop: 10,
                flexWrap: "wrap",
                alignSelf: "center",
                justifyContent: mobile ? "space-evenly" : "center",
            }}>
                <FlatList
                    list={sorted}
                    renderItem={(item, index) => (
                        <ProductCard item={item} key={index} cat={"Sarees"} />
                    )}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </div>
        </div>
    )
}
