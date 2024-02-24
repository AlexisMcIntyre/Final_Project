import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

//Picturebox accepts props (in the form of pictures to display) from the parent component. Some React Bootstrap styling is used to make evenly spaced rows and columns for the gallery on PicturesPage.

export const PictureBox = (props) => {
    
    return (
            <div className="picturebox">    
                <Container>
                    <Row>
                        <Col xs={3} md={3}>
                        <Image className="gallery" src={props.num1} rounded />
                        </Col>
                        <Col xs={3} md={3}>
                        <Image className="gallery"  src={props.num2} rounded />
                        </Col>
                        <Col xs={3} md={3}>
                        <Image className="gallery"  src={props.num3} rounded />
                        </Col>
                        <Col xs={3} md={3}>
                        <Image className="gallery"  src={props.num4} rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
    )
};