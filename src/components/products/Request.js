import React from 'react';

import {Button, Col, Form} from "react-bootstrap";

const Request = (props) => {
    let textInput = React.createRef();

    if (props.refToForm) {
        setTimeout(() => {
            textInput.current.focus();
        }, 300)
    }

    return (
        <div className="container">
            <p><strong>Оставьте заявку на косметику по акционной цене</strong>
                (почтовая пересылка по Израилю - бесплатно)
                В течение 1 дня консультант свяжется с вами для ответа на все вопросы о
                качестве косметики, ее преимуществах, согласования списка товаров и
                оформления заказа.
            </p>


            <Form>
                <Col xs={6}>
                    <p>Имя</p>
                    <Form.Control type="text" placeholder="Как вас Зовут?" ref={textInput}

                    />
                    <p>Телефон</p>
                    <Form.Control type="text" placeholder="05..."
                    />

                    <Button variant="success">
                        Послать данные
                    </Button>
                </Col>

            </Form>
        </div>


    )
}


export default Request