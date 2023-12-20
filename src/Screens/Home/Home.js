import React from 'react'
import ProductCard from '../../Components/ProductCard'
import FlatList from 'flatlist-react/lib'
import ImageCard from '../../Components/ImageCard'
import Textra from 'react-textra'
import useMediaQuery from '../../Components/useMediaQuery'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux'
import { baseURL } from '../../Helper/Helper'
export default function Home() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const Banner = useSelector(state => state.Reducers.banner)
    const Features = useSelector(state => state.Reducers.featured)
    const homebanner = useSelector(state => state.Reducers.homebanner)
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
                infiniteLoop
                autoPlay
                swipeable={true}
                showThumbs={false}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                interval={3500}
                transitionTime={2500}

            >
                {
                    Banner.map((item) => (
                        <div style={{
                            width: "100%",
                            height: "100%",
                        }}>
                            <img alt='B1' style={{
                                height: "100%",
                                objectFit: "contain",
                            }} src={item.img.uri} />
                        </div>
                    ))
                }

            </Carousel>

            {
                mobile ?
                    <>
                        <Textra
                            style={{
                                width: "90%",
                                fontFamily: "Black",
                                fontSize: 25,
                                marginBlockStart: 10,
                                letterSpacing: 2,
                            }}
                            data={["Best Selling Sarees"]}
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
                                list={Features.bs.slice(0, 4)}
                                renderItem={(item, index) => (
                                    <ProductCard key={index} cat={null} item={item} />
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
                                list={Features.es.slice(0, 4)}
                                renderItem={(item, index) => (
                                    <ProductCard key={index} cat={null} item={item} />
                                )}
                                renderWhenEmpty={() => <div>List is empty!</div>}
                            />
                        </div>
                        <Textra
                            style={{
                                width: "90%",
                                fontFamily: "Black",
                                fontSize: 25,
                                marginBlockStart: 10,
                                letterSpacing: 2,

                            }}
                            data={["Best Value Sarees"]}
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
                                list={Features.ms.slice(0, 4)}
                                renderItem={(item, index) => (
                                    <ProductCard key={index} cat={null} item={item} />
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
                            width: "95%",
                            justifyContent: "space-evenly",
                            alignItems: "flex-end",
                            marginBlock: 50,
                            height: 650,
                        }}>

                            <img
                                src={baseURL + homebanner[0]?.image}
                                style={{
                                    height: 600,
                                    width: 400,
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
                                        list={Features.bs.slice(0, 2)}
                                        renderItem={(item, index) => (
                                            <ImageCard key={index} item={item} />
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
                                            marginBlockStart: 10,
                                            letterSpacing: 2,

                                        }}
                                        data={["Best Selling Sarees ."]}
                                        effect="leftRight"
                                        duration={3000}
                                        stopDuration={2000}
                                    />
                                    <FlatList
                                        list={Features.bs.slice(2, 4)}
                                        renderItem={(item, index) => (
                                            <ImageCard key={index} item={item} />
                                        )}
                                        renderWhenEmpty={() => <div>List is empty!</div>}
                                    />
                                </div>

                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <div style={{
                                width: "90%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-evenly",
                            }}>
                                <FlatList
                                    list={Features.es.slice(0, 4)}
                                    renderItem={(item, index) => (
                                        <ImageCard key={index} item={item} />
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
                            width: "95%",
                            justifyContent: "space-evenly",
                            alignItems: "flex-end",
                            marginBlock: 50,
                            height: 650,
                        }}>
                            <img
                                src={baseURL + homebanner[1]?.image}
                                style={{
                                    height: 600,
                                    width: 400,
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
                                        list={Features.ms.slice(0, 2)}
                                        renderItem={(item, index) => (
                                            <ImageCard key={index} item={item} />
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
                                            marginBlockStart: 10,
                                            letterSpacing: 2,

                                        }}
                                        data={["Best Value Sarees ."]}
                                        effect="leftRight"
                                        duration={3000}
                                        stopDuration={1500}
                                    />
                                    <FlatList
                                        list={Features.ms.slice(2, 4)}
                                        renderItem={(item, index) => (
                                            <ImageCard key={index} item={item} />
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
