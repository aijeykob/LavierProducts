import React, {Fragment, useEffect} from 'react';
import {Button, Card, Row} from "react-bootstrap";
import _ from 'lodash'
import {NavLink} from "react-router-dom";

const Products = (props) => {

    useEffect(() => {
        props.getProducts();
        props.setScreenWidth(window.screen.width)
    }, []);
    let firstProduct = React.createRef();

    function goToFirstProduct() {
        firstProduct.current.focus();
    }

    const showModal = (e) => {
        const selectedProduct = _.findLast(props.ProductsArray, el => el.id == e.target.id);

        props.selectedProductToProps(selectedProduct);
        props.setRef(false);
    };
    return (
        <Fragment>

            {
                (props.screenWidth < 768) ?
                    <div className="text-center">
                        <Button variant={"danger"} onClick={goToFirstProduct}>Смотреть товары</Button>
                    </div>
                    : null                             //If mobile
            }

            <div className="container">
                <Row>

                    {
                        props.ProductsArray.map(el => {
                            return (
                                <Card style={{width: '18rem'}} key={el.id}>
                                    <Card.Img variant="top"
                                              src={`images/${el.img}`}/>
                                    <Card.Title><strong>{el.name}</strong></Card.Title>
                                    <Card.Body>
                                        <Card.Title>{el.description}</Card.Title>
                                        <Card.Footer className={"text-center"}>

                                            <NavLink to={"/viewProduct"}>
                                                {
                                                    (el.id === 1) ?
                                                        <Button key={el.id} id={el.id} onClick={(e) => showModal(e)}
                                                                variant="danger"
                                                                ref={firstProduct}>Подробнее</Button>
                                                        :
                                                        //Use ref for targeting first product
                                                        <Button key={el.id} id={el.id} onClick={(e) => showModal(e)}
                                                                variant="danger">Подробнее</Button>
                                                }

                                            </NavLink>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </div>
        </Fragment>
    )
}

export default Products;