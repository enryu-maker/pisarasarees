import React from 'react'
import { Link } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import CircularCard from '../../Components/CircularCard';
import FlatList from 'flatlist-react/lib';
import { useSelector } from 'react-redux';
import useMediaQuery from '../../Components/useMediaQuery';
export default function Cat() {
    const mobile = useMediaQuery('(max-width: 768px)');
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const categories = useSelector(state => state.Reducers.cat)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width:"100vw"
        }}>
            <div style={{
                width: "88%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                color: colors.darkGrey,
                fontFamily: "Bold",
                fontSize: mobile ? 12 : 16
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
                <p>Categories</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: mobile ? 25 : 40,
                letterSpacing: 2,
                marginBlockStart: 0,
                color:colors.Primary2
            }}>
                Categories .
            </p>
            <div style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                alignSelf: "center",
                justifyContent: "space-evenly",
                marginBlockEnd:50
            }}>
                <FlatList
                    list={categories}
                    renderItem={(item,index) => (
                        <CircularCard key={index} item={item} />
                    )}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </div>
        </div>
    )
}
