import React from 'react'
import { colors } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import useMediaQuery from '../Components/useMediaQuery';
export default function Cancle() {
    const mobile = useMediaQuery('(max-width: 768px)');

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const data = [
        {
            head: "1. Returns and Exchanges",
            body:
                `
                We want you to be completely satisfied with your purchase from Pisara Sarees. If you're not satisfied with your purchase, we offer a straightforward return and exchange policy.
                `
        },
        {
            head: "2. Eligibility",
            body: `
            You can return or exchange fashion products purchased from our website within 7 days of receiving the item. To be eligible for a return or exchange, the item must be in its original condition, with all tags and packaging intact.
            `
        },
        {
            head: "3. How to Initiate a Return or Exchange",
            body: `
            To initiate a return or exchange, follow these steps:
            \n• Contact our customer support team at pisarasarees@gmail.com to request a return or exchange. Please provide your order number and a brief description of the issue.
            \n• We will provide you with a return authorization and shipping instructions.
            `
        },
        {
            head: "4. Shipping Costs",
            body: `
            If the return or exchange is due to an error on our part, we will cover the shipping costs.
            \n
            If the return or exchange is for any other reason, you will be responsible for the return shipping costs.
            `
        },
        {
            head: "5. Refunds and Processing Time",
            body: `
            Refunds will be processed within 7 Days after we receive the returned item.
            \n
            The refund will be issued to the original payment method.
            `
        },
        {
            head: "6. Exchanges",
            body: `
            If you wish to exchange an item, please specify the replacement item you'd like in your return request.
            \n
            Exchanges will be processed once we receive the returned item.
            `
        },
        {
            head: "7. Contact Us",
            body: `
            If you have any questions or need assistance with your return or exchange, please contact our customer support team at pisarasarees@gmail.com
            `
        },
        {
            head: "8. Consent",
            body: `
            By making a purchase on our website, you agree to the terms of this return policy.
            `
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
                fontSize: mobile?12 : 16
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
                <p>Cancellation & Returns Policies</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize:mobile?25 : 40,
                letterSpacing: 2,
                marginBlock: 0,
                textAlign:"center"
            }}>
                Cancellation & Returns Policies .
            </p>
            <p style={{
                fontFamily: "Bold",
                fontSize: 12,
                marginBlockStart: 0,
                width:"90%"
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
