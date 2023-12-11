import React from 'react'
import { useNavigate } from 'react-router-dom';
import useMediaQuery from './useMediaQuery';
import { Link } from 'react-router-dom';
import { colors } from '../Assets/Theme';
import { useSelector } from 'react-redux';
export default function More() {
    const navigate = useNavigate()
    const mobile = useMediaQuery('(max-width: 768px)');
    const access = useSelector(state => state.Reducers.access)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
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
                <p>More</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: mobile ? 25 : 40,
                letterSpacing: 2,
                marginBlockStart: 0
            }}>
                More .
            </p>
            <div style={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                marginBlockEnd: 50
            }}>
                {
                    access ?
                        <>
                        </>
                        :
                        <>
                            <Link
                                to={"/login"}
                                style={{
                                    fontFamily: "Bold",
                                    fontSize: 20,
                                    letterSpacing: 2,
                                    marginBlockStart: 0,
                                    textDecoration: "none",
                                    color: colors.darkGrey
                                }}>
                                Login
                            </Link>
                            <Link
                                to={"/register"}
                                style={{
                                    fontFamily: "Bold",
                                    fontSize: 20,
                                    letterSpacing: 2,
                                    marginBlockStart: 0,
                                    textDecoration: "none",
                                    color: colors.darkGrey
                                }}>
                                Register
                            </Link>
                        </>
                }

            </div>
        </div>
    )
}
