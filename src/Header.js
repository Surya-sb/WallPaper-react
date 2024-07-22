// src/Header.js
import React from 'react';
import { Navbar, Container, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import logo from './images/logo.png';



const Header = () => {
    const Colors = [
        {
            title: "Big Diamond",
            subtitle: "glossy and smooth in different colors",
            image: image1,
            info: "Know more"
        },
        {
            title: "Focus",
            subtitle: "various color",
            image: image2,
            info: "Know more"
        },
        {
            title: "Cloudy",
            subtitle: "Difference makes difference",
            image: image3,
            info: "Know more"
        },
        {
            title: "Small Diamond",
            subtitle: "glossy and smooth in different colors",
            image: image4,
            info: "Know more"
        }
    ];

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <img src={logo} alt="logo"  width="30" height="30" />  Wall Paper</Navbar.Brand>
                    <Nav className="m-auto">
                        <Nav.Link className='px-5' href="#home">Home</Nav.Link>
                        <Nav.Link className='px-5' href="#about">About</Nav.Link>
                        <Nav.Link className='px-5' href="#deals">Deals</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-4">
                <Row>
                    {Colors.map((Color, index) => (
                        <Col key={index} sm={6} md={3}>
                            <Card className="mb-4">
                                <Card.Img variant="top" src={Color.image} />
                                <Card.Body>
                                    <Card.Title className="text-uppercase">{Color.title}</Card.Title>
                                    <Card.Text>{Color.subtitle}</Card.Text>
                                    <Button variant="outline-info" size="sm">{Color.info}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Header;
