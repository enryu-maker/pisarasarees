import React from 'react'
import { colors } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import useMediaQuery from '../Components/useMediaQuery';

export default function Privacy() {
    const mobile = useMediaQuery('(max-width: 768px)');
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const data = [
        {
            head: "1. Introduction",
            body: "Welcome to `Pisara Sarees`. We are committed to protecting your privacy and providing you with a secure online shopping experience. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our website and services."
        },
        {
            head: "2. Information We Collect",
            body: `
            We collect various types of information when you visit and use our website, including: \n
            • Personal Information:
            This includes your name, email address, shipping address, and payment information when you make a purchase.
            \n
            • Browsing Information:
            We may collect information about your visit to our website, such as your IP address, browser type, device information, and the pages you visit.
            \n
            • Cookies:
            We use cookies and similar technologies to enhance your experience and collect data about your interactions with our website.
            `
        },
        {
            head: "3. How We Use Your Information",
            body: `
            We use the information we collect for various purposes, including:
            \n• Processing and fulfilling your orders.
            \n• Improving our website and services.
            \n• Providing customer support.
            \n• Sending you marketing and promotional communications with your consent.
            \n• Complying with legal and regulatory obligations.
            `
        },
        {
            head: "4. Security",
            body: `
            We take reasonable measures to protect your personal information. However, no online platform is entirely secure, and we cannot guarantee the security of your data.
            `
        },
        {
            head: "5. Contact Us",
            body: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at pisarasarees@gmail.com`
        },
        {
            head: "6. Security",
            body: `We take reasonable measures to protect your personal information. However, no online platform is entirely secure, and we cannot guarantee the security of your data.`
        },
    ]
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
                <p>Privacy Policy</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: mobile ? 25 : 40,
                letterSpacing: 2,
                marginBlock: 0,
                color:colors.Primary2
            }}>
                Privacy Policy .
            </p>
            <p style={{
                fontFamily: "Bold",
                fontSize: 12,
                marginBlockStart: 0,
                width: "90%",
                textAlign:"center",
            }}>
                Disclaimer: <span style={{
                    fontFamily: "Italic",
                }} >In the event of any discrepancy or conflict, the English version will prevail over the translation.We don’t share personal information.</span>
            </p>
            {
                data.map((item) => (
                    <div style={{
                        width: "88%",
                        backgroundColor: colors.Primary1,
                        marginBlockEnd: 20,
                        boxShadow: "5px 5px 10px #88888850",
                        borderRadius: 10,
                        padding: 10,
                    }}>
                        <p style={{
                            fontFamily: "Bold",
                            fontSize: 18,
                            marginBlockStart: 0
                        }}>
                            {item.head}
                        </p>
                        {
                            item.body.split('\n').map(str => <p style={{
                                fontFamily: "Regular",
                                fontSize: 16,
                                marginBlockStart: 0
                            }}>{str}</p>)
                        }
                    </div>
                ))
            }

        </div>
    )
}
