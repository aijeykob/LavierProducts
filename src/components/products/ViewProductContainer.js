import {connect} from 'react-redux'
import {getProducts, setShowModal, setRef} from '../../actions/getBd'
import ViewProduct from "./ViewProduct";


let mapStateToProps = state => ({
    SelectedProduct: state.SelectedProduct,
    show: state.show
})

let mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
    setShowModal: () => dispatch(setShowModal()),
    setRef: (refText) => dispatch(setRef(refText))

})

const ViewProductContainer = connect(mapStateToProps, mapDispatchToProps)(ViewProduct)

export default ViewProductContainer














































