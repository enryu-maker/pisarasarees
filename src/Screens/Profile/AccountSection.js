import React from "react";
import { useForm, Controller } from "react-hook-form";
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import AddressCard from "./AddressCard";
export const AccountDetails = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    const [disabled, setDisabled] = React.useState(true)
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
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
                    defaultValue=''
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
                                value={value}
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
                    defaultValue=''
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
                                value={value}
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
                    name='Phone'
                    control={control}
                    defaultValue=''
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
                                value={value}
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
                            onClick={() => { }}
                            style={{
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
                            Update Profile
                        </button>
                        : null
                }
            </div>
        </div>
    )
}
export const Address = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
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
                    Saved Address
                </p>
                <p
                    onClick={() => {
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
                <AddressCard/>
                <AddressCard/>

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
            alignItems: "center"
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
                    Order History
                </p>
            </div>
        </div>
    )
}