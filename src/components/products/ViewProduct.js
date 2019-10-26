import React from 'react';
import {Button, Image, Modal, Row} from "react-bootstrap";
import s from "./ViewProduct.module.css"
import {Redirect} from "react-router-dom";


const ViewProduct = (props) => {

    const handleClose = () => {
        props.setShowModal(false)
    };
    const goToRef = () => {
        props.setShowModal(false);
        props.setRef(true)
    }

    return (
        <Row className="justify-content-md-center ">
            <Modal show={props.show}
                   onHide={() => handleClose()}
            > <Modal.Header closeButton>
            </Modal.Header>

                <Modal.Body>

                    <Image className="img-fluid" src={`images/${props.SelectedProduct.img}`}/>
                    <p className={s.item}>{props.SelectedProduct.name}</p>
                    <p>{props.SelectedProduct.description}</p>
                    <div className="text-center">
                        <Button variant="danger" onClick={() => goToRef()}>Хочу!</Button>
                    </div>


                </Modal.Body>


            </Modal>
            {
                (props.show) ? null : <Redirect to='/'/>
            }
        </Row>
    )
}

export default ViewProduct;