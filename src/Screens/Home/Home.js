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
import { colors } from '../../Assets/Theme'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
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
                transitionTime={2000}

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
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            alignSelf: "center"
                        }}>
                            <p style={{
                                fontFamily: "Regular",
                                fontSize: 20,
                                letterSpacing: 2,
                                textTransform: "capitalize"
                            }}>
                                BEST SELLING SAREES .
                            </p>
                            <button
                                onClick={() => {
                                    navigate('/viewall')
                                }}
                                style={{
                                    backgroundColor: "transparent",
                                    height: 50,
                                    width: mobile ? 120 : 250,
                                    color: colors.Primary2,
                                    fontFamily: "Bold",
                                    fontSize: mobile ? 16 : 20,
                                    borderRadius: 10,
                                    cursor: "pointer",
                                    border: "none"
                                }}
                            >
                                View All
                            </button>
                        </div>

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
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <p style={{
                                fontFamily: "Regular",
                                fontSize: 20,
                                letterSpacing: 2,
                                textTransform: "capitalize"
                            }}>
                                EXCLUSIVE SAREES .
                            </p>
                            <button
                                onClick={() => {
                                    navigate('/viewall')
                                }}
                                style={{
                                    backgroundColor: "transparent",
                                    height: 50,
                                    width: mobile ? 120 : 250,
                                    color: colors.Primary2,
                                    fontFamily: "Bold",
                                    fontSize: mobile ? 16 : 20,
                                    borderRadius: 10,
                                    cursor: "pointer",
                                    border: "none"
                                }}
                            >
                                View All
                            </button>
                        </div>
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
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <p style={{
                                fontFamily: "Regular",
                                fontSize: 20,
                                letterSpacing: 2,
                                textTransform: "capitalize"
                            }}>
                                BEST VALUE SAREES .
                            </p>
                            <button
                                onClick={() => {
                                    navigate('/viewall')
                                }}
                                style={{
                                    backgroundColor: "transparent",
                                    height: 50,
                                    width: mobile ? 120 : 250,
                                    color: colors.Primary2,
                                    fontFamily: "Bold",
                                    fontSize: mobile ? 16 : 20,
                                    borderRadius: 10,
                                    cursor: "pointer",
                                    border: "none"
                                }}
                            >
                                View All
                            </button>
                        </div>

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
                                    <div style={{
                                    }}>
                                        <p style={{
                                            fontFamily: "Regular",
                                            fontSize: 20,
                                            letterSpacing: 2,
                                            textTransform: "capitalize"
                                        }}>
                                            BEST SELLING SAREES .
                                        </p>
                                        <button
                                            onClick={() => {
                                                navigate('/viewall')
                                            }}
                                            style={{
                                                backgroundColor: "transparent",
                                                height: 50,
                                                width: mobile ? 120 : 250,
                                                color: colors.Primary2,
                                                fontFamily: "Bold",
                                                fontSize: mobile ? 16 : 20,
                                                borderRadius: 10,
                                                cursor: "pointer",
                                                border: "none"
                                            }}
                                        >
                                            View All
                                        </button>
                                    </div>
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
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <p style={{
                                    fontFamily: "Regular",
                                    fontSize: 20,
                                    letterSpacing: 2,
                                    textTransform: "capitalize"
                                }}>
                                    EXCLUSIVE SAREES .
                                </p>
                                <button
                                    onClick={() => {
                                        navigate('/viewall')
                                    }}
                                    style={{
                                        backgroundColor: "transparent",
                                        height: 50,
                                        width: mobile ? 120 : 250,
                                        color: colors.Primary2,
                                        fontFamily: "Bold",
                                        fontSize: mobile ? 16 : 20,
                                        borderRadius: 10,
                                        cursor: "pointer",
                                        border: "none"
                                    }}
                                >
                                    View All
                                </button>
                            </div>
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

                                    <div style={{
                                    }}>
                                        <p style={{
                                            fontFamily: "Regular",
                                            fontSize: 20,
                                            letterSpacing: 2,
                                            textTransform: "capitalize"
                                        }}>
                                            BEST VALUE SAREES .
                                        </p>
                                        <button
                                            onClick={() => {
                                                navigate('/viewall')
                                            }}
                                            style={{
                                                backgroundColor: "transparent",
                                                height: 50,
                                                width: mobile ? 120 : 250,
                                                color: colors.Primary2,
                                                fontFamily: "Bold",
                                                fontSize: mobile ? 16 : 20,
                                                borderRadius: 10,
                                                cursor: "pointer",
                                                border: "none"
                                            }}
                                        >
                                            View All
                                        </button>
                                    </div>
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
