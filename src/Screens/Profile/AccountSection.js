import React from "react";
import { useForm, Controller } from "react-hook-form";
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import AddressCard from "./AddressCard";
import { useDispatch, useSelector } from "react-redux";
import FlatList from "flatlist-react/lib";
import Modal from 'react-modal';
import { AiOutlineClose, AiOutlineUserAdd } from 'react-icons/ai'
import { Oval } from "react-loader-spinner";
import { getAddress, getLocation, getProfile, getTempAddress, patchProfile, postAddressAction } from "../../Store/actions";
import { FaLocationCrosshairs } from "react-icons/fa6";
export const AccountDetails = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    const [disabled, setDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false)
    const profile = useSelector(state => state.Reducers.profile)
    const dispatch = useDispatch()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "space-between"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    marginBlockStart: 0,
                    fontSize: 25
                }}>
                    User Details
                </p>
                <p
                    onClick={() => {
                        setDisabled(!disabled)
                    }}
                    style={{
                        fontFamily: "Bold",
                        marginBlockStart: 0,
                        fontSize: 20,
                        color: colors.Primary2,
                        cursor: "pointer"
                    }}>
                    Edit
                </p>
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                height: 100,
                width: "90%",
            }}>
                <Controller
                    name='name'
                    control={control}
                    defaultValue={""}
                    rules={{
                        required: {
                            value: true,
                            message:
                                'Name Cannot be Empty',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <input
                                disabled={disabled}
                                style={{
                                    height: mobile ? 50 : 35,
                                    marginBlock: mobile ? 10 : 0,
                                    width: mobile ? "90%" : "40%",
                                    border: "2px solid lightGray",
                                    borderRadius: 6,
                                    fontFamily: "Regular",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: colors.darkGrey,
                                    outline: "none"
                                }}
                                placeholder='Your Full Name*'
                                value={disabled ? profile?.name : value}
                                onChange={onChange}
                            />
                            {errors?.name && (
                                <p style={{

                                }}>
                                    {errors?.name?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                <Controller
                    name='email'
                    control={control}
                    defaultValue={profile.email}
                    rules={{
                        required: {
                            value: true,
                            message:
                                'Name Cannot be Empty',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <input
                                disabled={true}
                                style={{
                                    height: mobile ? 50 : 35,
                                    marginBlock: mobile ? 10 : 0,
                                    width: mobile ? "90%" : "40%",
                                    border: "2px solid lightGray",
                                    borderRadius: 6,
                                    fontFamily: "Regular",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: colors.darkGrey,
                                    outline: "none"
                                }}
                                placeholder='Your Email (Login ID)*'
                                value={profile?.email}
                                onChange={onChange}
                            />
                            {errors?.name && (
                                <p style={{

                                }}>
                                    {errors?.name?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                <Controller
                    name='phone'
                    control={control}
                    defaultValue={""}
                    rules={{
                        required: {
                            value: true,
                            message:
                                'Name Cannot be Empty',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <input
                                disabled={disabled}
                                style={{
                                    height: mobile ? 50 : 35,
                                    marginBlock: mobile ? 10 : 0,
                                    width: mobile ? "90%" : "40%",
                                    border: "2px solid lightGray",
                                    borderRadius: 6,
                                    fontFamily: "Regular",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: colors.darkGrey,
                                    outline: "none",
                                }}
                                placeholder='Your Phone Number*'
                                value={disabled ? profile?.phone : value}
                                onChange={onChange}
                            />
                            {errors?.name && (
                                <p style={{

                                }}>
                                    {errors?.name?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                {
                    !disabled ?
                        <button
                            onClick={
                                handleSubmit((data) => {
                                    delete data["email"]
                                    dispatch(patchProfile(data, setLoading))
                                    dispatch(getProfile())
                                })
                            }
                            style={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                border: "none",
                                backgroundColor: colors.Primary2,
                                padding: 10,
                                fontFamily: "Bold",
                                fontSize: 18,
                                color: colors.white,
                                width: 200,
                                borderRadius: 8,
                                marginBlockStart: 20
                            }}>
                            {
                                loading ?
                                    <Oval
                                        height={30}
                                        width={30}
                                        color={colors.Primary1}
                                    />
                                    :
                                    "Update Profile"
                            }
                        </button>
                        : null
                }
            </div>
        </div>
    )
}
export const Address = () => {
    const address = useSelector(state => state.Reducers.address)
    const activeAddress = useSelector(state => state.Reducers.activeAddress)
    const [show, setShow] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const mobile = useMediaQuery('(max-width: 768px)');
    const dispatch = useDispatch()
    const AddModal = ({
    }) => {
        const [tempaddress, settempaddress] = React.useState({})
        const location = useSelector(state => state.Reducers.location)

        const [loading2, setLoading2] = React.useState(false)
        const { handleSubmit, control, formState: { errors } } = useForm();
        // React.useEffect(()=>{
        //     dispatch(getLocation())
        // },[location])
        return (
            <Modal
                isOpen={show}
                onRequestClose={() => {
                    setShow(false)
                }}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        zIndex: 1000,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    content: {
                        position: 'absolute',
                        top: mobile ? 0 : '20%',
                        left: mobile ? 0 : '20%',
                        right: mobile ? 0 : '20%',
                        bottom: mobile ? 0 : 'auto',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: 20,
                        zIndex: 1000,
                    },
                }}
                contentLabel="Address Modal"

            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <p style={{
                        marginBlock: 0,
                        color: "GrayText",
                        fontSize: 30,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontFamily: "Bold"
                    }}>
                        Add Address
                    </p>
                    {
                        loading2 ?
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                                <Oval
                                    height={50}
                                    width={50}
                                    color={colors.Primary2}
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor={colors.Primary2}
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                />
                            </div>
                            :
                            <>
                                {/* <div
                                onClick={() => {
                                    dispatch(getTempAddress(setLoading2,settempaddress))
                                }}
                                style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    cursor:"pointer"
                                }}>
                                <FaLocationCrosshairs style={{
                                    cursor: "pointer",
                                }} size={30} color={"GrayText"}  />
                                <p style={{
                                    color:colors.Primary2,
                                    fontFamily:"Regular",
                                    marginInline:5
                                }}>
                                    Fetch Address
                                    </p>
                                </div> */}

                                <AiOutlineClose style={{
                                    cursor: "pointer",
                                }} size={30} color={"GrayText"} onClick={() => {
                                    setShow(false)
                                }} />
                            </>
                    }
                </div>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "center",
                    width: "100%",
                    marginBlockStart: 40
                }}>
                    <Controller
                        name='address_type'
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'address_type Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: 10,
                                        width: "100%",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none",
                                    }}
                                    placeholder='Address Type (Home/Office)'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.address_type && (
                                    <p style={{
                                        color: "red",
                                        fontFamily: "Bold"
                                    }}>
                                        {errors?.address_type?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='address_line_1'
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'address_line_1 Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: 10,
                                        width: "100%",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none",
                                    }}
                                    placeholder='Address Line 1*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.address_line_1 && (
                                    <p style={{
                                        color: "red",
                                        fontFamily: "Bold"
                                    }}>
                                        {errors?.address_line_1?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='address_line_2'
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Address Line 2 Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: 10,
                                        width: "100%",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none",
                                    }}
                                    placeholder='Address Line 2*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.address_line_2 && (
                                    <p style={{
                                        color: "red",
                                        fontFamily: "Bold",
                                        marginBlock: 0
                                    }}>
                                        {errors?.address_line_2?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='city'
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'City Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: 10,
                                        width: mobile ? "100%" : "45%",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none",
                                    }}
                                    placeholder='City*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.city && (
                                    <p style={{
                                        color: "red",
                                        fontFamily: "Bold",
                                        marginBlock: 0
                                    }}>
                                        {errors?.city?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='state'
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'City Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: 10,
                                        width: mobile ? "100%" : "45%",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none",
                                    }}
                                    placeholder='State*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.state && (
                                    <p style={{
                                        color: "red",
                                        fontFamily: "Bold",
                                        marginBlock: 0
                                    }}>
                                        {errors?.state?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='country'
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Country Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: 10,
                                        width: mobile ? "100%" : "45%",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none",
                                    }}
                                    placeholder='Country*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.country && (
                                    <p style={{
                                        color: "red",
                                        fontFamily: "Bold",
                                        marginBlock: 0
                                    }}>
                                        {errors?.country?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='pin_code'
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Country Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: 10,
                                        width: mobile ? "100%" : "45%",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none",
                                    }}
                                    placeholder='Pin Code*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.pin_code && (
                                    <p style={{
                                        color: "red",
                                        fontFamily: "Bold",
                                        marginBlock: 0
                                    }}>
                                        {errors?.pin_code?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                </div>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <button
                        onClick={handleSubmit((data) => {
                            data['latitude'] = location?.latitude
                            data['longitude'] = location?.longitude
                            dispatch(postAddressAction(setLoading, data, setShow))
                            dispatch(getAddress())
                        })}
                        style={{
                            width: mobile ? "65%" : "45%",
                            backgroundColor: colors.Primary2,
                            height: 50,
                            fontFamily: "Bold",
                            fontSize: 25,
                            color: colors.white,
                            borderRadius: 10,
                            alignSelf: "center",
                            marginBlockStart: 30
                        }}>{
                            loading2 ?
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                }}>

                                    <Oval
                                        height={50}
                                        width={50}
                                        color={colors.Primary2}
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel='oval-loading'
                                        secondaryColor={colors.Primary2}
                                        strokeWidth={2}
                                        strokeWidthSecondary={2}
                                    />
                                </div>
                                :
                                "Add Address"
                        }
                    </button>
                </div>
            </Modal>
        )
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <AddModal />
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "space-between"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    marginBlockStart: 0,
                    fontSize: 25
                }}>
                    Saved Address
                </p>
                <p
                    onClick={() => {
                        setShow(!show)
                    }}
                    style={{
                        fontFamily: "Bold",
                        marginBlockStart: 0,
                        fontSize: 20,
                        color: colors.Primary2,
                        cursor: "pointer"
                    }}>
                    Add New
                </p>
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                height: 100,
                width: "90%",
            }}>
                <FlatList
                    list={address}
                    renderItem={(item,index) => (
                        <AddressCard key={index} activeAddress={activeAddress} item={item} />
                    )}
                    renderWhenEmpty={() => <div
                        style={{
                            display: "flex",
                            width: "90%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >

                        <p style={{
                            fontFamily: "Black",
                            fontSize: 30,
                            alignSelf: "center",
                            letterSpacing: 2
                        }}>
                            No Address Saved
                        </p>

                    </div>}
                />
            </div>
        </div>
    )
}
export const OrderHistory = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "flex-start",
                alignItems:"center"
            }}>
                <p style={{
                    fontFamily: "Bold",
                    marginBlockStart: 0,
                    fontSize: 25
                }}>
                    Orders
                </p>
            </div>
        </div>
    )
}