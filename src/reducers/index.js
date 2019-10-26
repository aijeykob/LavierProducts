import {
    PRODUCTS_TO_PROPS,
    SELECTED_PRODUCT_TO_PROPS,
    SET_SHOW_MODAL,
    SET_REF,
    SET_SCREEN_WIDTH
} from '../actions/getBd';

const initState = {
    ProductsArray: [],
    SelectedProduct: null,
    show: false,
    refToForm: false,
    screenWidth: null

};

export const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case PRODUCTS_TO_PROPS:
            return {
                ...state,
                ProductsArray: payload
            };
        case SELECTED_PRODUCT_TO_PROPS:
            return {
                ...state,
                SelectedProduct: payload,
                show: true
            };
        case SET_SHOW_MODAL:
            return {
                ...state,
                show: false
            };
        case SET_REF:
            return {
                ...state,
                refToForm: payload
            };
        case SET_SCREEN_WIDTH:
            return {
                ...state,
                screenWidth: payload
            };
        default:
            return state
    }
};
