import axios from "axios";
import axiosIns, { baseURL } from "../Helper/Helper";
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
                payload: cart != null ? cart : [],
            })
        }
        catch {
            const cart = JSON.parse(localStorage.getItem("cart"))
            dispatch({
                type: 'LOGIN',
                payload: null,
            })
            dispatch({
                type: 'CART',
                payload: cart != null ? cart : [],
            })
        }
    }
}

export const getLocation = () => {
    return async dispatch => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=ed8980477f3042a696497425b081fa6a`).
                    then((res) => {
                        const city = res?.data?.features[0]?.properties?.city;
                        const pin_code = res?.data?.features[0]?.properties?.postcode;
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        dispatch({
                            type: 'GET_LOCATION',
                            payload: {
                                city: city,
                                pincode: pin_code,
                                latitude: latitude,
                                longitude: longitude,
                            },
                        })
                    }
                    )
            });
        } else {
            toast.error("Geolocation is not available in your browser.", {
                position: "top-center",
                autoClose: 1000,
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

export const checkPincode = (pincode, setLoading,setMessage) => {
    return async dispatch =>{
        setLoading(true)
        try{
            let response = await axios.post("http://smarttrack.ctbsplus.dtdc.com/ratecalapi/PincodeApiCall",{
                "orgPincode": '422011',
                "desPincode": pincode
            });
            if(response?.SERV_LIST[0]?.b2C_SERVICEABLE==="YES"){
                setMessage("")
            }
            else{
                setMessage("Delivery Not Available")
            }
            setLoading(false)
        }
        catch{
            toast.error("Something Went Wrong", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false)
        }

    }
}

export const getTempAddress = (setLoading, setAddress) => {
    return async dispatch => {
        setLoading(true)
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=ed8980477f3042a696497425b081fa6a`).
                    then((res) => {
                        setAddress(res?.data?.features[0]?.properties)
                    }
                    )
            });
            setLoading(false)
        } else {
            toast.error("Geolocation is not available in your browser.", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false)
        }
    }
}

export const postAddressAction = (setLoading, data, setShow) => {
    console.log(data)
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axiosIns.post(baseURL + '/getcreateaddress/', data);
            if (response.status === 201) {
                toast.error("Address Added Sucessfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setShow(false)
            }
            else {
                toast.error(response.data.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setShow(false)
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error.response.data.msg, {
                position: "top-center",
                autoClose: 1000,
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

export const LoginAction = (setLoading, data, navigate) => {
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
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 1000,
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

export const RegisterAction = (setLoading, data, navigate) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.post(baseURL + '/register/', data);
            if (response.status === 201) {
                toast.success('Account Created Sucessfully', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate("/login")
                }, 1500)
            }
            else {
                toast.error(response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
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
            toast.error(error?.response?.data?.msg, {
                position: "top-center",
                autoClose: 1000,
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

export const getProfile = () => {
    return async dispatch => {
        let response = await axiosIns.get(baseURL + '/getuserdetails/')
        dispatch({
            type: 'PROFILE',
            payload: response.data,
        })
    }
}
export const getAddress = () => {
    return async dispatch => {
        let response = await axiosIns.get(baseURL + '/getcreateaddress/')
        dispatch({
            type: 'GET_ADDRESS',
            payload: response.data,
        })
    }
}

export const getActiveAddress = () => {
    return async dispatch => {
        let response = await axiosIns.get(baseURL + '/getsetactiveaddress/')
        dispatch({
            type: 'ACTIVE_ADDRESS',
            payload: response.data,
        })
    }
}

export const getBlogs = () => {
    return async dispatch => {
        let response = await axios.get(baseURL + '/getblogs/')
        dispatch({
            type: 'GET_BLOGS',
            payload: response?.data?.results,
        })
    }
}

export const setActiveAddress = (id, setLoading) => {
    setLoading(true)
    return async dispatch => {
        let response = await axiosIns.post(baseURL + '/getsetactiveaddress/', {
            "address_id": id
        })
        if (response.status === 200) {
            toast.success('Active Address Changed Sucessfully', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Something Went Wrong', {
                position: "top-center",
                autoClose: 1000,
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

export const getFeatured = () => {
    var data = {}
    return async dispatch => {
        let bs = await axios.get(baseURL + '/getfeatured/', {
            params: {
                type: "bestselling"
            }
        })
        let es = await axios.get(baseURL + '/getfeatured/', {
            params: {
                type: "exclusive"
            }
        })
        let ms = await axios.get(baseURL + '/getfeatured/', {
            params: {
                type: "bestvalue"
            }
        })
        data = {
            "bs": bs.data,
            "es": es.data,
            "ms": ms.data
        }
        dispatch({
            type: 'FEATURED',
            payload: data,
        })

    }
}

export const addCart = (cart, data, setLoading) => {
    setLoading(true)
    return async dispatch => {
        if (cart.length > 0) {
            cart?.map((item) => {
                if (item.product_code === data.product_code) {
                    toast.success('Added to Cart', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else {
                    cart.push(data)
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: cart,
                    })
                    console.log(cart)
                    localStorage.setItem("cart", JSON.stringify(cart))
                    toast.success('Added to Cart', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            setLoading(false)
        }
        else {
            cart.push(data)
            dispatch({
                type: 'ADD_TO_CART',
                payload: cart,
            })
            console.log(cart)
            localStorage.setItem("cart", JSON.stringify(cart))
            toast.success('Added to Cart', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false)
        }
    }
}

export const removeCart = (cart, data, setLoading) => {
    setLoading(true)
    return async dispatch => {
        const new_cart = cart.filter(function (item) {
            return item.product_code !== data.product_code
        })
        await localStorage.setItem("cart", JSON.stringify(new_cart))
        toast.success('Updated from Cart', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch({
            type: 'CART',
            payload: new_cart,
        })
        setLoading(false)
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
                autoClose: 1000,
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

export const OrderStart = (data, setLoading,navigate) => {
    setLoading(true)
    console.log(data)
    return async dispatch => {
        if (data?.payment_mode === "COD") {
            await axiosIns.post(baseURL + "/listcreateorder/", data).then((resp) => {
                setLoading(false)
                toast.success('Order Placed Sucessfully', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                localStorage.removeItem("cart")
                dispatch({
                    type: 'CART',
                    payload: [],
                })
                navigate('/success')
            }).catch((error) => {
                console.log(error)
                setLoading(false)

            })
        }
        else {
            await axiosIns.post(baseURL + "/listcreateorder/", data).then((resp) => {
                window.open(resp?.data?.payment_data?.data?.instrumentResponse?.redirectInfo?.url)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })
        }

    }
}

export const getOrders = (setData) => {
    return async dispatch => {
        let response = await axiosIns.get(baseURL + '/listcreateorder/')
        setData(response.data)
        dispatch({
            type: 'ORDERS',
            payload: response.data,
        })
    }
}

export const patchProfile = (data, setLoading) => {
    return async dispatch => {
        setLoading(true)
        try {
            let response = await axiosIns.patch(baseURL + `/updateuserdetails/`, data);
            toast.success(response.data.msg, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        catch {
            toast.error("Something Went Wrong", {
                position: "top-center",
                autoClose: 1000,
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