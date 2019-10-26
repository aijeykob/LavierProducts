import axios from "axios";

export const PRODUCTS_TO_PROPS = "PRODUCTS_TO_PROPS";
export const SELECTED_PRODUCT_TO_PROPS = "SELECTED_PRODUCT_TO_PROPS";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_REF = "SET_REF";
export const SET_SCREEN_WIDTH = "SET_SCREEN_WIDTH";

export const getProducts = () => dispatch => {
    axios.get('https://aijeykob.github.io/data_propducts/data.json')
        .then(res => {
            dispatch(productsToProps(res.data))
        })

};

export const productsToProps = data => ({
    type: PRODUCTS_TO_PROPS, payload: data
});

export const selectedProductToProps = data => ({
    type: SELECTED_PRODUCT_TO_PROPS, payload: data
});

export const setShowModal = data => ({
    type: SET_SHOW_MODAL, payload: data
});
export const setRef = data => ({
    type: SET_REF, payload: data
});
export const setScreenWidth = data => ({
    type: SET_SCREEN_WIDTH, payload: data
});






























































