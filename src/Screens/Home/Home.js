import React from 'react'
import ProductCard from '../../Components/ProductCard'
import FlatList from 'flatlist-react/lib'
import ImageCard from '../../Components/ImageCard'
import Textra from 'react-textra'
import useMediaQuery from '../../Components/useMediaQuery'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { images } from '../../Assets/Image'
export default function Home() {
    const mobile = useMediaQuery('(max-width: 768px)');

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
            alignItems: "center"
        }}>
            <Carousel
                selectedItem={1}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={false}
                showIndicators={false}
            >
                <div style={{
                    width: "100%",
                    height: "100%",
                }}>
                    <img alt='B1' style={{
                        height: "100%",
                        objectFit: "contain",
                    }} src={images.B1} />
                </div>
                <div style={{
                    width: "100%",
                    height: "100%",
                }}>
                    <img alt='B2' style={{
                        height: "100%",
                        objectFit: "contain",
                    }} src={images.B2} />
                </div>
                <div style={{
                    width: "100%",
                    height: "100%",
                }}>
                    <img alt='B3' style={{
                        height: "100%",
                        objectFit: "contain",
                    }} src={images.B3} />
                </div>
            </Carousel>

            {
                mobile ?
                    <>
                        <Textra
                            style={{
                                width: "90%",
                                fontFamily: "Black",
                                fontSize: 25,
                                marginBlockStart: 10
                            }}
                            data={["Best Selling Sarees", "श्रेष्ठ विक्रीसाठी साड़ींचं", "सर्वश्रेष्ठ बिक्री वाली साड़ियाँ"]}
                            effect="leftRight"
                            duration={3000}
                            stopDuration={2000}
                        />
                        <div style={{
                            width: mobile ? "90vw" : "65vw",
                            display: "flex",
                            flexWrap: "wrap",
                            alignSelf: "center",
                            justifyContent: mobile ? "space-evenly" : "normal"
                        }}>
                            <FlatList
                                list={[0, 1, 2, 3]}
                                renderItem={(item) => (
                                    <ProductCard />
                                )}
                                renderWhenEmpty={() => <div>List is empty!</div>}
                            />
                        </div>
                        <p style={{
                            fontFamily: "Black",
                            fontSize: 25,
                            letterSpacing: 2,
                        }}>
                            Exclusive Sarees .
                        </p>
                        <div style={{
                            width: mobile ? "90vw" : "65vw",
                            display: "flex",
                            flexWrap: "wrap",
                            alignSelf: "center",
                            justifyContent: mobile ? "space-evenly" : "normal"
                        }}>
                            <FlatList
                                list={[0, 1, 2, 3]}
                                renderItem={(item) => (
                                    <ProductCard />
                                )}
                                renderWhenEmpty={() => <div>List is empty!</div>}
                            />
                        </div>
                        <Textra
                            style={{
                                width: "90%",
                                fontFamily: "Black",
                                fontSize: 25,
                                marginBlockStart: 10
                            }}
                            data={["Best Value Sarees", "श्रेष्ठ मूल्य साड़ींचं", "सर्वोत्तम मूल्य वाली साड़ियाँ"]}
                            effect="leftRight"
                            duration={3000}
                            stopDuration={1500}
                        />
                        <div style={{
                            width: mobile ? "90vw" : "65vw",
                            display: "flex",
                            flexWrap: "wrap",
                            alignSelf: "center",
                            justifyContent: mobile ? "space-evenly" : "normal"
                        }}>
                            <FlatList
                                list={[0, 1, 2, 3]}
                                renderItem={(item) => (
                                    <ProductCard />
                                )}
                                renderWhenEmpty={() => <div>List is empty!</div>}
                            />
                        </div>
                    </>
                    :
                    <>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "90%",
                            justifyContent: "space-evenly",
                            alignItems: "flex-end",
                            marginBlock: 50,
                            height: 650,
                        }}>

                            <div style={{
                                height: 600,
                                width: 400,
                                backgroundColor: "ActiveBorder",
                                borderRadius: 10
                            }} />

                            <div style={{
                                width: "60%",
                                display: "flex",
                                flexDirection: "column",
                                height: 650,
                            }}>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                }}>
                                    <FlatList
                                        list={[0, 1]}
                                        renderItem={(item) => (
                                            <ImageCard />
                                        )}
                                        renderWhenEmpty={() => <div>List is empty!</div>}
                                    />
                                </div>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignSelf: "center",
                                    justifyContent: "space-evenly",
                                    alignItems: "center"
                                }}>
                                    <Textra
                                        style={{
                                            width: "30%",
                                            fontFamily: "Black",
                                            fontSize: 35,
                                            marginBlockStart: 10
                                        }}
                                        data={["Best Selling Sarees", "श्रेष्ठ विक्रीसाठी साड़ींचं", "सर्वश्रेष्ठ बिक्री वाली साड़ियाँ"]}
                                        effect="leftRight"
                                        duration={3000}
                                        stopDuration={2000}
                                    />
                                    <FlatList
                                        list={[0, 1]}
                                        renderItem={(item) => (
                                            <ImageCard />
                                        )}
                                        renderWhenEmpty={() => <div>List is empty!</div>}
                                    />
                                </div>

                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "90%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <div style={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-evenly",
                            }}>
                                <FlatList
                                    list={[0, 1, 2, 3]}
                                    renderItem={(item) => (
                                        <ProductCard />
                                    )}
                                    renderWhenEmpty={() => <div>List is empty!</div>}
                                />
                            </div>
                            <p style={{
                                fontFamily: "Black",
                                fontSize: 40,
                                letterSpacing: 2,
                                alignSelf: "left"
                            }}>
                                Exclusive Sarees .
                            </p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            width: "90%",
                            justifyContent: "space-evenly",
                            alignItems: "flex-end",
                            marginBlock: 50,
                            height: 650,
                        }}>

                            <div style={{
                                height: 600,
                                width: 400,
                                backgroundColor: "ActiveBorder",
                                borderRadius: 10
                            }} />

                            <div style={{
                                width: "60%",
                                display: "flex",
                                flexDirection: "column",
                                height: 650,
                            }}>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                }}>
                                    <FlatList
                                        list={[0, 1]}
                                        renderItem={(item) => (
                                            <ImageCard />
                                        )}
                                        renderWhenEmpty={() => <div>List is empty!</div>}
                                    />
                                </div>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    flexWrap: "wrap",
                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                }}>

                                    <Textra
                                        style={{
                                            width: "30%",
                                            fontFamily: "Black",
                                            fontSize: 35,
                                            marginBlockStart: 10
                                        }}
                                        data={["Best Value Sarees", "श्रेष्ठ मूल्य साड़ींचं", "सर्वोत्तम मूल्य वाली साड़ियाँ"]}
                                        effect="leftRight"
                                        duration={3000}
                                        stopDuration={1500}
                                    />
                                    <FlatList
                                        list={[0, 1]}
                                        renderItem={(item) => (
                                            <ImageCard />
                                        )}
                                        renderWhenEmpty={() => <div>List is empty!</div>}
                                    />
                                </div>

                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
