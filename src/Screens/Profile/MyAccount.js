import React from 'react'
import { Link } from 'react-router-dom';
import { colors } from '../../Assets/Theme';
import { AccountDetails, Address, OrderHistory } from './AccountSection';
export default function MyAccount() {
    const [active, setActive] = React.useState(0)
    function switchActive(active) {
        switch (active) {
            case 0:
                return <AccountDetails />;
            case 1:
                return <Address />;
            case 2:
                return <OrderHistory />;
            default:
                break;
        }
    }
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
                <p>My Account</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: 40,
                letterSpacing: 2,
                marginBlockStart: 0
            }}>
                My Account .
            </p>
            <div style={{
                display: "flex",
                width: "100vw",
                marginBlockEnd: 50,
            }}>
                <div style={{
                    width: "20vw",
                    paddingInline: 50,
                    fontSize: 25,
                }}>
                    <p style={{
                        fontFamily: "Bold",
                        marginBlockStart:0,
                        cursor:"pointer"
                    }}
                    onClick={()=>{
                        setActive(0)
                    }}
                    >
                        User Details
                    </p>
                    <p 
                    onClick={()=>{
                        setActive(1)
                    }}
                    style={{
                        fontFamily: "Bold",
                        cursor:"pointer"

                    }}>
                        Address
                    </p>
                    <p 
                    onClick={()=>{
                        setActive(2)
                    }}
                    style={{
                        fontFamily: "Bold",
                        cursor:"pointer"
                    }}>
                        Order History
                    </p>
                    <p style={{
                        fontFamily: "Bold",
                        color: "red"
                    }}>
                        Logout
                    </p>
                </div>
                <div style={{
                    width: "80vw",
                    borderInlineStart: `3px solid ${colors.darkGrey}`
                }}>
                    {switchActive(active)}
                </div>
            </div>
        </div>
    )
}
