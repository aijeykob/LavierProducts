import {connect} from 'react-redux'
import {getProducts, selectedProductToProps, setRef, setScreenWidth} from '../../actions/getBd'
import Products from "./Products";


let mapStateToProps = state => ({
    ProductsArray: state.ProductsArray,
    screenWidth: state.screenWidth
})

let mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
    setRef: (text) => dispatch(setRef(text)),
    selectedProductToProps: (product) => dispatch(selectedProductToProps(product)),
    setScreenWidth: (data) => dispatch(setScreenWidth(data)),


})

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer














































