import React, {Fragment} from 'react';
import Header from "./components/Header/Header";
import ProductsContainer from "./components/products/ProductsContainer";
import ViewProductContainer from "./components/products/ViewProductContainer";
import {Route} from "react-router-dom";
import {Row} from "react-bootstrap";
import RequestContainer from "./components/products/RequestContainer";
import Comments from "./components/Comments/Comments";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Fragment>
            <Header/>
            <ProductsContainer/>
            <Route path="/viewProduct" render={() => <ViewProductContainer/>}/>
            <Row className="justify-content-md-center ">
                <Comments/>
                <RequestContainer/>
                <Footer/>
            </Row>
        </Fragment>
    );
}

export default App;
