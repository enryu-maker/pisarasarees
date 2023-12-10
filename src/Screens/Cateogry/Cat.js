import React from 'react'
import { Link } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import CircularCard from '../../Components/CircularCard';
import FlatList from 'flatlist-react/lib';
export default function Cat() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "100vw",
                height: 350,
                backgroundColor: "ActiveBorder"
            }} />
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
                <p>Categories</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: 40,
                letterSpacing: 2,
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
                    list={[0, 1]}
                    renderItem={(item) => (
                        <CircularCard />
                    )}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </div>
        </div>
    )
}
