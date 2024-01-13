import Modal from 'react-modal'
import useMediaQuery from '../../Components/useMediaQuery'
import { MdClose } from "react-icons/md";
import moment from 'moment'
import React from 'react';
import { Oval } from 'react-loader-spinner';
import { colors } from '../../Assets/Theme';
import { Document, Page } from 'react-pdf';
import { baseURL } from '../../Helper/Helper';
export default function OrderInfo({
    setShow,
    show,
    data
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }, [])
    return (
        <div>
            <Modal
                isOpen={show}
                onRequestClose={() => setShow(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        zIndex: 1000
                    },
                    content: {
                        width: mobile ? "100%" : "50%",
                        height: mobile ? "100%" : "50%",
                        margin: "auto",
                        borderRadius: 10,
                        padding: 0,
                        top: mobile ? "0%" : "10%",
                        left: mobile ? "0%" : "25%",
                        right: mobile ? "0%" : "25%",
                        bottom: mobile ? "0%" : "10%",
                        border: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        backgroundColor: "white",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
                    }
                }}
            >
                {
                    loading ?
                        <Oval
                            height={mobile ? 50 : 80}
                            width={mobile ? 50 : 80}
                            color={colors.Primary2}
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor={colors.Primary1}
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                        :
                        <>

                            <div style={{
                                width: "88%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <p
                                    style={{
                                        fontFamily: "Black",
                                        fontSize: 25,
                                        letterSpacing: 1,
                                        marginBlock: 0
                                    }}
                                >Order Details</p>
                                <MdClose
                                    size={30}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setShow(false)}
                                />
                            </div>
                            <div style={{
                                width: "88%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "flex-start",
                                marginBlock: 20
                            }}>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                    <p style={{
                                        fontFamily: "Bold",
                                        fontSize: 16,
                                        letterSpacing: 1,
                                        marginBlock: 0
                                    }}>
                                        Order Id: {data?.id}
                                    </p>
                                    <p style={{
                                        fontFamily: "Bold",
                                        fontSize: 16,
                                        letterSpacing: 1,
                                        marginBlock: 0
                                    }}>
                                        {moment(data?.created_at).format("DD MMM YYYY")}
                                    </p>
                                </div>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                    <p style={{
                                        fontFamily: "Bold",
                                        fontSize: 16,
                                        letterSpacing: 1,
                                        marginBlock: 0
                                    }}>
                                        {data?.items?.split(",").length} Items
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "Bold",
                                            fontSize: 16,
                                            letterSpacing: 1,
                                            marginBlock: 0
                                        }}>
                                        ₹ {data?.total / 100}
                                    </p>
                                </div>
                                <p
                                    style={{
                                        fontFamily: "Bold",
                                        fontSize: 16,
                                        letterSpacing: 1,
                                        marginBlock: 0
                                    }}>
                                    Payment Mode: {data?.payment_mode}
                                </p>

                            </div>

                            <button
                                style={{
                                    fontFamily: "Bold",
                                    fontSize: 16,
                                    letterSpacing: 1,
                                    marginBlock: 0,
                                    padding: 10,
                                    border: "none",
                                    borderRadius: 5,
                                    backgroundColor: colors.Primary2,
                                    color: "white",
                                    cursor: "pointer"
                                }}
                                onClick={() => window.open(baseURL + data?.invoice)}
                            >
                                Download Invoice
                            </button>
                        </>
                }
            </Modal>
        </div>
    )
}
