import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export const PictureBox = (props) => {
    // const {picture, setPicture} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)
    
    return (
            <div className="picturebox">    
                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                        <Image src={props.num1} rounded />
                        </Col>
                        <Col xs={6} md={3}>
                        <Image src={props.num2} rounded />
                        </Col>
                        <Col xs={6} md={3}>
                        <Image src={props.num3} rounded />
                        </Col>
                        <Col xs={6} md={3}>
                        <Image src={props.num4} rounded />
                        </Col>
                        <Col xs={6} md={3}>
                        <Image src={props.num5} rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
    )
};