import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './Basket.module.scss';
import { IItem } from '../catalog/Catalog';
import { Button } from 'react-bootstrap';

interface Basket {
    [index: number]: IItem;
}


export const Basket = () => {
    const basket = window.sessionStorage.getItem('basket');
    const basketObj: Basket = basket ? JSON.parse(basket) : {};
    const [basketState, setBasketState] = useState(basketObj);

    const changeAmount = (id: number, amount: number) => {
        const basket = window.sessionStorage.getItem('basket');
        const basketObj: Basket = basket ? JSON.parse(basket) : {};
        if (basketObj[id]) {
            basketObj[id]['amount'] += amount;
            window.sessionStorage.setItem('basket', JSON.stringify(basketObj));
            console.log(basketObj)
            setBasketState(basketObj)
        }
    }

    return (
        <Container>
            <Row>
                {Object.values(basketState).map((item: IItem) =>
                    <Col lg={4} xs={6} md={4}>
                        <Card className={styles.card}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + item.img} className={styles.image} />
                            <Card.Body>
                                <Card.Text>
                                    <Stack direction="horizontal" gap={5}>
                                        <div className={`${styles.hover} pt-4`}>{item.title}</div>
                                        <div className={`${styles.hover} pt-4 ms-auto`}>Price: {(item.price * item.amount).toString()} р</div>
                                    </Stack>
                                    <Stack direction="horizontal" gap={0}>
                                        <div className={`${styles.hover} pt-4`}>Rate:{item.rate.toString()}</div>
                                        <Button onClick={() => changeAmount(item.id, 1)} variant="outline-warning" className="mt-4 ms-auto">+</Button>
                                        <div className="pt-4 ms-auto">{item.amount.toString()}</div>
                                        <Button onClick={() => changeAmount(item.id, -1)} variant="outline-warning" className="mt-4 ms-auto">-</Button>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
            </Row>
        </Container>
    );
}