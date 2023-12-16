import React from 'react'
import { colors } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import useMediaQuery from '../Components/useMediaQuery';

export default function Shipping() {
    const mobile = useMediaQuery('(max-width: 768px)');
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const data = [
        {
            head: "1. Delivery Charges",
            body : `
            Delivery charges may vary based on the individual sellers. Sellers incur higher shipping costs for low-value items, and a nominal delivery charge may be applied to offset logistics costs. Please refer to your order summary for specific delivery charges for each product.
            \n For items listed as Pisara Sarees Plus, a delivery charge of Specify Amount per item may be applicable if the order value is less than Specify Amount. Orders of Specify Amount or above qualify for free delivery.
            `
        },
        {
            head: "2. Estimated Delivery Time",
            body: `
            Sellers typically procure and ship items within the time specified on the product page. Business days exclude public holidays and Sundays. The estimated delivery time depends on factors such as the seller, product availability, shipping destination, and the location of the seller.
            `
        },
        {
            head: "3. Hidden Costs",
            body: `
            There are no hidden charges when making a purchase on Pisara Sarees. The prices listed on the product page are final and all-inclusive. Delivery charges, if applicable, are transparent and based on the seller's shipping policy.
            `
        },
        {
            head: "4. Delivery Date Discrepancies",
            body: `
            The delivery date may not correspond to the estimated timeline due to holidays between the order placement and delivery date. Some courier partners and sellers may not operate on Sundays, affecting the delivery dates.
            `
        },
        {
            head: "5. Serviceability and Shipping Restrictions",
            body: `
            Please enter your default pin code on the product page to check for accurate delivery times and serviceability. If a seller does not ship to your location, it may be due to their discretion, legal restrictions, or the availability of reliable courier partners in your area
            `
        },
        {
            head: "6. Cash on Delivery (COD)",
            body: `
            The availability of COD depends on our courier partner's ability to accept cash as payment at the time of delivery. Check the product page by entering your pin code to see if COD is available in your location.
            `
        },
        {
            head:"7. Returns and Pick-Up",
            body:`
            Returns are easy; initiate a return through our contact form. Ekart Logistics will facilitate the pick-up whenever possible. If not, you can return the item through a third-party courier service, with return fees borne by the seller.
            `
        },
        {
            head:"8. Non-receipt of Order",
            body:`
            If you did not receive your order but got a delivery confirmation, report the issue within 7 days from the date of confirmation for the seller to investigate.
            `
        },
        {
            head:"9. Product Availability Status",
            body:`
            • In Stock:
            Delivered in 2-6 business days (standard courier) or 1-2 weeks (Registered Post for certain areas).
            \n
            • Available:
            Procured when ordered, delivery time based on procurement and shipping.
            \n
            • Preorder/Forthcoming:
            Expected release with pre-booking option.
            \n
            • Out of Stock:
            Currently not available. Use 'Notify Me' for updates.
            \n
            • Imported:
            Sourced from outside India, may take at least 10 days for delivery.
            \n
            • Back In Stock Soon:
            Popular item temporarily sold out.
            \n
            • Temporarily Unavailable:
            Out of stock, expected to be available soon.
            \n
            • Permanently Discontinued:
            Obsolete, no longer available.
            \n
            • Out of Print:
            No longer published and permanently discontinued.
            `
        },
        {
            head:"10. International Delivery",
            body:`
            As of now, Pisara Sarees does not deliver items internationally. Purchases can be made globally with credit/debit cards from India and 21 other countries, but delivery addresses must be within India.
            `
        }
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
                <p>Shipping Policy</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: mobile?25 : 40,
                letterSpacing: 2,
                marginBlock: 0,
                color:colors.Primary2
            }}>
                Shipping Policy .
            </p>
            <p style={{
                fontFamily: "Bold",
                fontSize: 12,
                marginBlockStart: 0,
                width:"90%",
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
