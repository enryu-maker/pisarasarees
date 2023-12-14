const initialState = {
    access: null,
    cart: [],
    address: [],
    activeAddress: {},
    banner: [],
    homebanner: [],
    featured: {},
    cat: [],
    profile: {},
    location: {},
    tempaddress: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload,
            };
        case "GET_BANNER":
            return {
                ...state,
                banner: action.payload,
            };
        case "GET_LOCATION":
            return {
                ...state,
                location: action.payload,
            };
        case "GET_ADDRESS":
            return {
                ...state,
                address: action.payload,
            };
        case "HOME_BANNER":
            return {
                ...state,
                homebanner: action.payload,
            };
        case "TEMPADDRESS":
            return {
                ...state,
                tempaddress: action.payload,
            };
        case "ACTIVE_ADDRESS":
            return {
                ...state,
                activeAddress: action.payload,
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload,
            };
        case "CART":
            return {
                ...state,
                cart: action.payload,
            };
        case "PROFILE":
            return {
                ...state,
                profile: action.payload,
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case "EMPTY_CART":
            return {
                ...state,
                cart: action.payload,
            };
        case "FEATURED":
            return {
                ...state,
                featured: action.payload,
            };
        case "CAT":
            return {
                ...state,
                cat: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                access: action.payload,
            };
        default:
            return state;
    }
};