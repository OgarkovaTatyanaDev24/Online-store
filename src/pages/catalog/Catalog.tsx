import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Catalog.module.scss';
import { Interface } from 'readline';


export interface IItem {
    id: number;
    img: String,
    title: String,
    price: number,
    rate: number,
    amount: number,
}

export const Catalog = () => {
    const headphones = [
        {
            id: 1,
            img: "/Img/Image.png",
            title: "Apple BYZ S852I",
            price: 16829,
            rate: 4.7,
        },
        {
            id: 2,
            img: "/Img/Image2.png",
            title: "Apple EarPods",
            price: 20445,
            rate: 4.4,
        },
        {
            id: 3,
            img: "/Img/Image3.png",
            title: "Apple EarPods",
            price: 16968,
            rate: 3.7,
        },
        {
            id: 4,
            img: "/Img/Image.png",
            title: "Apple BYZ S852I",
            price: 10197,
            rate: 5.0,
        },
        {
            id: 5,
            img: "/Img/Image2.png",
            title: "Apple EarPods",
            price: 1907,
            rate: 4.7,
        },
        {
            id: 6,
            img: "/Img/Image3.png",
            title: "Apple EarPods",
            price: 2702,
            rate: 4.4,
        },
        {
            id: 7,
            img: "/Img/Image.png",
            title: "Apple BYZ S852I",
            price: 11297,
            rate: 3.7,
        },
        {
            id: 8,
            img: "/Img/Image2.png",
            title: "Apple EarPods",
            price: 1245,
            rate: 5.0,
        },
        {
            id: 9,
            img: "/Img/Image3.png",
            title: "Apple EarPods",
            price: 51321,
            rate: 4.7,
        },
        {
            id: 10,
            img: "/Img/Image.png",
            title: "Apple BYZ S852I",
            price: 54308,
            rate: 4.4,
        },
        {
            id: 11,
            img: "/Img/Image2.png",
            title: "Apple EarPods",
            price: 1775,
            rate: 4.7,
        },
        {
            id: 12,
            img: "/Img/Image3.png",
            title: "Apple EarPods",
            price: 54308,
            rate: 5.0,
        },
    ]

    const addToBasket = (item: { id: number }) => {
        const basket = window.sessionStorage.getItem('basket');
        const basketObj = basket ? JSON.parse(basket) : {};
        basketObj[item.id] = item;
        basketObj[item.id].amount = 1;
        window.sessionStorage.setItem('basket', JSON.stringify(basketObj));
    }

    return (
        <Container>
            <Row>
                {headphones.map((item) =>
                    <Col lg={4} xs={6} md={4}>
                        <Card className={styles.card}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + item.img} className={styles.image} />
                            <Card.Body>
                                <Card.Text>
                                    <Stack direction="horizontal" gap={5}>
                                        <div className={`${styles.hover} pt-4`}>{item.title}</div>
                                        <div className={`${styles.hover} pt-4 ms-auto`}>Price:{item.price}</div>
                                    </Stack>
                                    <Stack direction="horizontal" gap={0}>
                                        <div className={`${styles.hover} pt-4`}>Rate:{item.rate}</div>
                                        <Button onClick={() => addToBasket(item)} variant="outline-warning" className="mt-4 ms-auto">Купить</Button>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
            </Row>
        </Container>
    );
}