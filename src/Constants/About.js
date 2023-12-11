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
            head: "",
            body: "Discover the essence of elegance at PRATIKSHA B ENTERPRISE. We curate a selection of timeless sarees that blend tradition with contemporary style. Our commitment to quality and authenticity ensures that every saree tells a unique story. Explore our collection and embrace the beauty of Indian fashion."
        },
        {
            head: "About PRATIKSHA B ENTERPRISE",
            body: `
            At PRATIKSHA B ENTERPRISE , we are dedicated to bringing you the finest collection of sarees that reflect the timeless charm and elegance of Indian fashion. Our journey started with a deep passion for the rich heritage of sarees, and we have made it our mission to share this exquisite tradition with you.
            \n
            Each saree in our collection is a masterpiece, carefully curated to cater to a diverse range of tastes and preferences. Whether you're looking for traditional silk sarees, contemporary designs, or unique fusion styles, we have something special to offer to every saree connoisseur.
            `
        },
        {
            head: "Our Products",
            body: `
            Quality, authenticity, and customer satisfaction are at the core of our values. We collaborate with skilled artisans and designers to ensure that every saree tells a story of craftsmanship and artistry. PRATIKSHA B ENTERPRISE is more than just an online store; it's a celebration of culture and an exploration of the endless possibilities of saree fashion.
            \n
            We invite you to explore our wide range of sarees, each a testament to our commitment to tradition and style. Your journey into the world of PRATIKSHA B ENTERPRISE is a voyage into the heart of Indian fashion, where you'll find the perfect saree to celebrate every occasion and moment in life.
            \n
            Thank you for choosing PRATIKSHA B ENTERPRISE , and we look forward to being a part of your special moments.
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
                <p>About Us</p>
            </div>
            <p style={{
                fontFamily: "Black",
                fontSize: mobile?25 : 40,
                letterSpacing: 2,
                marginBlock: 0
            }}>
                About Us .
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
                                marginBlockStart: 0,
                                textAlign:"justify"
                            }}>{str}</p>)
                        }
                    </div>
                ))
            }

        </div>
    )
}
