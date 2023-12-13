import axios from "axios";
import { baseURL } from "../Helper/Helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Init = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem("access");
            const cart = JSON.parse(localStorage.getItem("cart"))
            dispatch({
                type: 'LOGIN',
                payload: token,
            })
            dispatch({
                type: 'CART',
                payload: cart!=null?cart:[],
            })
        }
        catch {
            const cart =JSON.parse(localStorage.getItem("cart"))
            dispatch({
                type: 'LOGIN',
                payload: null,
            })
            dispatch({
                type: 'CART',
                payload: cart!=null?cart:[],
            })
        }
    }
}
export const getBannerAction = () => {
    const data = []
    return async dispatch => {
        try {
            let response = await axios.get(baseURL + '/getbanners/', {
                params: {
                    type: "slider"
                }
            });
            response.data.map((item) => {
                data.push({
                    img: { uri: baseURL + item.image },
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

export const LoginAction = (setLoading, data,navigate) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.post(baseURL + '/login/', data);
            await localStorage.setItem('access', response.data.access);
            dispatch({
                type: 'LOGIN',
                payload: response.data.access,
            })
            setLoading(false);
            navigate("/")
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
            let response = await axios.post(baseURL + '/register/', data);
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

export const getFeatured = () => {
    var data = {}
    return async dispatch => {
        let bs = await axios.get(baseURL + '/getfeatured/', {
            params: {
                type: "bestselling"
            }
        })
        // let es = await axios.get(baseURL + '/getfeatured/?type=exclusive')
        let ms = await axios.get(baseURL + '/getfeatured/', {
            params: {
                type: "bestvalue"
            }
        })
        data = {
            "bs": bs.data,
            // "es": es,
            "ms": ms.data
        }
        dispatch({
            type: 'FEATURED',
            payload: data,
        })

    }
}

export const addCart = (cart,data) => {
    return async dispatch => {
        console.log("cart",cart)
        if (cart.length>0){
            cart?.map((item)=>{
                if(item.product_code===data.product_code){
                    toast.success('Added to Cart', {
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
                else{
                    cart.push(data)
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: cart,
                    })
                    localStorage.setItem("cart",JSON.stringify(cart))
                    toast.success('Added to Cart', {
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
            })
        }
        else{
            cart.push(data)
            dispatch({
                type: 'ADD_TO_CART',
                payload: cart,
            })
            localStorage.setItem("cart",JSON.stringify(cart))
            toast.success('Added to Cart', {
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
    }
}

export const getHomeBanner = () => {
    return async dispatch => {
        let response = await axios.get(baseURL + '/getbanners/', {
            params: {
                type: "home"
            }
        });
        dispatch({
            type: 'HOME_BANNER',
            payload: response.data,
        })
    }
}

export const getProduct = () => {
    var data = []
    return async dispatch => {
        let response = await axios.get(baseURL + '/getall/');
        Object.keys(response.data).forEach(function (key) {
            data.push({
                "name": key,
                "value": response.data[key]
            })
        });
        dispatch({
            type: 'CAT',
            payload: data,
        })
    }
}

export const getProductInfo = (id, setProduct, setLoading) => {
    return async dispatch => {
        setLoading(true)
        try {
            let response = await axios.get(baseURL + `/getdetails/${id}/`);
            setProduct(response.data)
        }
        catch {
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
        }
        setLoading(false)
    }
}


export const Logout = () => {
    return async dispatch => {
        localStorage.clear()
        window.location.replace("/")
        dispatch({
            type: 'LOGOUT',
            payload: null,
        })
    }
}