import { ADD_CART, GET_PRODUCT, GET_PRODUCTS } from "../Constants/ActionTypes";

const initialState = {
    products: [],
    product: {},
    items: [],
    total: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                products: action.payload,
                product: {}
            }
            break;

        case GET_PRODUCT:
            return {
                product: action.payload,
            }
            break;

        case ADD_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            };
        default:
            return state;
    }
};

export default cartReducer;