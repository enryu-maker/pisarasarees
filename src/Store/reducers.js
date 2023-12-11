const initialState = {
    access: null,
    cart: [],
    address: [],
    activeAddress: null,
    banner: []
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
        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id).concat(action.payload),
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
        case "LOGOUT":
            return {
                ...state,
                access: action.payload,
            };
        default:
            return state;
    }
};