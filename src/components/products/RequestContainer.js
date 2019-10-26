import {connect} from 'react-redux'
import {selectedProductToProps} from '../../actions/getBd'
import Request from "./Request";


let mapStateToProps = state => ({
    refToForm: state.refToForm
});

let mapDispatchToProps = dispatch => ({
    selectedProductToProps: (product) => dispatch(selectedProductToProps(product))

});

const RequestContainer = connect(mapStateToProps, mapDispatchToProps)(Request);

export default RequestContainer














































