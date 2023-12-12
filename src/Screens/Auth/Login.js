import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { colors } from '../../Assets/Theme';
import useMediaQuery from '../../Components/useMediaQuery';
import { Link } from 'react-router-dom';
import { Oval } from "react-loader-spinner"
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../Store/actions';
export default function Login() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
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
            height: 450,
            width: mobile ? "90%" : "50%",
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
                                'Email Cannot be Empty',
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
                                type="email"
                                onChange={onChange}
                            />
                            {errors?.email && (
                                <p style={{

                                }}>
                                    {errors?.email?.message}
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
                                'Passowrd Cannot be Empty',
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
                                type="password"
                                onChange={onChange}
                            />
                            {errors?.password && (
                                <p style={{

                                }}>
                                    {errors?.password?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                <button
                    style={{
                        // border: "none",
                        backgroundColor: colors.Primary2,
                        padding: 10,
                        fontFamily: "Bold",
                        fontSize: 18,
                        color: colors.white,
                        width: 200,
                        borderRadius: 8
                    }}
                    onClick={
                        handleSubmit((data) => {
                            dispatch(LoginAction(setLoading, data))
                        })
                    }
                >
                    {
                        loading ?
                            <Oval
                                height={40}
                                width={40}
                                color={colors.Primary1}
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor={colors.Primary1}
                                strokeWidth={2}
                                strokeWidthSecondary={2}

                            /> : "LOGIN"
                    }
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
