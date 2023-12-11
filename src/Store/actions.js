import axios from "axios";
import { baseURL } from "../Helper/Helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Init = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem("access");
            dispatch({
                type: 'LOGIN',
                payload: token,
            })
        }
        catch {
            dispatch({
                type: 'LOGIN',
                payload: null,
            })
        }
    }
}

export const getBannerAction = () => {
    const data = []
    return async dispatch => {
        try {
            let response = await axios.get(baseURL + 'hemedia/getbanners/');
            response.data.map((item) => {
                data.push({
                    img: { uri: baseURL + item.banner },
                })
            }
            )
            dispatch({
                type: 'GET_BANNER',
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const LoginAction = (setLoading, data) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.post(baseURL + 'login/', data);
            console.log(response.data);
            await localStorage.setItem('access', response.data.access);
            dispatch({
                type: 'LOGIN',
                payload: response.data.access,
            })
            setLoading(false);
        } catch (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const RegisterAction = (setLoading, data) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.post(baseURL + 'register/', data);
            if (response.status === 201) {
                toast.success('Account Created Sucessfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                toast.error(response?.data?.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            setLoading(false);
        } catch (error) {
            toast.error("Something Went Wrong", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const Logout = () => {
    return async dispatch => {
        dispatch({
            type: 'LOGOUT',
            payload: null,
        })
    }
}