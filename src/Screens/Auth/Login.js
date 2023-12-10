import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import { Link } from 'react-router-dom';
export default function Login() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: 450,
            width: "50%",
            marginBlock: 50,
            borderRadius: 10,
            boxShadow: "5px 5px 10px #88888850",
            justifyContent: "space-evenly",
            alignItems: "center",
        }}>
            <p style={{
                fontFamily: "Black",
                fontSize: 30,
                letterSpacing: 1,
                marginBlock: 0
            }}>
                Let's Sign You In
            </p>
            <p style={{
                fontFamily: "Regular",
                fontSize: 16,
                letterSpacing: 2,
                marginBlock: 0
            }}>
                Login account to continue!
            </p>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: 230,
                justifyContent: "space-evenly",
            }}>
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
                                style={{
                                    height: mobile ? 50 : 35,
                                    marginBlock: mobile ? 10 : 0,
                                    width: mobile ? "90%" : "50%",
                                    border: "2px solid lightGray",
                                    borderRadius: 6,
                                    fontFamily: "Regular",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: colors.darkGrey,
                                    outline: "none"
                                }}
                                placeholder='Your Email*'
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
                    name='password'
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
                                style={{
                                    height: mobile ? 50 : 35,
                                    marginBlock: mobile ? 10 : 0,
                                    width: mobile ? "90%" : "50%",
                                    border: "2px solid lightGray",
                                    borderRadius: 6,
                                    fontFamily: "Regular",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: colors.darkGrey,
                                    outline: "none"
                                }}
                                placeholder='Your Password*'
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
                        borderRadius: 8
                    }}>
                    Submit
                </button>
            </div>
            <p style={{
                fontFamily: "Regular",
                fontSize: 16,
                marginBlock: 0
            }}>
                New to Pisara? <Link to={"/register"} style={{
                    color: colors.Primary2,
                    fontFamily: "Bold",
                    textDecoration: "none"
                }}> Create account </Link>
            </p>
        </div>
    )
}
