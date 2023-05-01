import { ADD_CART, GET_PRODUCT, GET_PRODUCTS } from "../Constants/ActionTypes"
import Api from "../../Api/FakeApi"

export const getproduct = (data) => {
    return {
        type: GET_PRODUCT,
        payload: data
    }
}

export const getproducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}

export const getproductsAsync = () => {

    return async dispatch => {

        const result = await Api.get("/products")

        dispatch(getproducts(result.data))
    }
}

export const getproductAsync = (id) => {

    return async dispatch => {

        const result = await Api.get(`/products/${id}`)

        dispatch(getproduct(result.data))
    }
}

export const addToCart = (item) => {
    return {
        type: ADD_CART,
        payload: item
    };
};
