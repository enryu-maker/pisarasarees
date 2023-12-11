import React from 'react'
import { colors } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import useMediaQuery from '../Components/useMediaQuery';
export default function Terms() {
  const mobile = useMediaQuery('(max-width: 768px)');

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const data = [
        {
            head: "1. Acceptance of Terms",
            body: "By accessing and using this pbsarees website, you agree to be bound by these terms and conditions. If you do not agree with these terms, please do not use the website."
        },
        {
            head: "2. Website Use",
            body: `
            • User Account\n
            You may be required to create an account to access certain features of the website. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            \n
            • Prohibited Activities\n
            You agree not to engage in any activities that violate applicable laws, infringe upon intellectual property rights, or disrupt the website's functionality. This includes but is not limited to hacking, data scraping, or spamming.
            `
        },
        {
            head: "3. Purchases and Transactions",
            body: `
            • Product Information
            We strive to provide accurate and up-to-date product information on the website. However, we do not warrant the accuracy of product descriptions, prices, or availability. We reserve the right to correct any errors and to cancel orders if necessary.
            \n
            • Payment
            All payments are processed securely through our chosen payment gateway. By placing an order, you agree to pay for the products and any associated fees.
            \n
            • Shipping and Returns
            Please refer to our Shipping and Returns Policy for information regarding shipping, delivery, and returns.
            `
        },
        {
            head: "4. Privacy and Data Security",
            body: `
            • Privacy Policy
            Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            \n
            • Data Security
            We take reasonable steps to secure your data. However, no system is completely immune to security breaches. You agree that we are not responsible for any data breaches or unauthorized access to your account.
            `
        },
        {
            head: "5. Intellectual Property / Copyright",
            body: `
            All content, including text, images, logos, and designs on the website, is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
            `
        },
        {
            head: "6. Termination",
            body: `
            We reserve the right to terminate or suspend your access to the website at our discretion, without notice, for any violation of these terms and conditions.
            `
        },
        {
            head: "7. Disclaimers and Limitation of Liability",
            body: `
            • Disclaimer
            The website is provided 'as is' and 'as available' without warranties of any kind, either express or implied. We do not guarantee that the website will be error-free or uninterrupted.
            \n
            • Limitation of Liability
            In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the website.
            `
        },
        {
            head: "8. Governing Law",
            body: `
            These terms and conditions are governed by and construed in accordance with the laws of Nashik, and any disputes will be subject to the exclusive jurisdiction of the courts in Nashik.
            `
        },
        {
            head: "9. Changes to Terms and Conditions",
            body: `
            We reserve the right to modify these terms and conditions at any time. You are responsible for regularly reviewing them.
            `
        },
        {
            head: "10. Contact Information",
            body: `
            If you have any questions or concerns about these terms and conditions, please contact us at pisarasarees@gmail.com
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
                fontSize:mobile?12: 16
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
                <p>Terms and Conditions</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: mobile?25: 40,
                letterSpacing: 2,
                marginBlock: 0
            }}>
                Terms and Conditions .
            </p>
            <p style={{
                fontFamily: "Bold",
                fontSize: 12,
                marginBlockStart: 0,
                textAlign:"justify",
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
                                marginBlockStart: 0,
                                textAlign: "justify"
                            }}>{str}</p>)
                        }
                    </div>
                ))
            }
        </div>
    )
}
