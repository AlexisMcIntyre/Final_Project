import React from "react";
import { TextBox } from "../Components/TextBox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <Container>
                <Row>
                    <Col>
                        <TextBox
                            title='Are you a Renaissance Man or Woman?!'
                            text='What is a Renaissance Man/Woman? Well, according to Britannica (an ancient text that humans used in a manner similar to the internet to find information)
                                    a Renaissance Man/Woman is a term "expressing the notion that humans should embrace all knowledge and develop themselves as fully as possible".
                                    In other words, "a person with many talents or areas of knowledge". Yes, it is a euphemism for people who focus so much on EVERYTHING that they cannot
                                    become skilled at ANYTHING! Oops, I mean a JACK-OF-ALL-TRADES!'
                        />
                   
                        <TextBox
                            title="If so, you're in the right place!"
                            text='Hello fellow unfocused people, now known as Renaissance Folks! In this blog, we will talk about many fun things. No topics are covered in enough depth to 
                            foster learning, but you will sure know the buzzwords!'
                        />
                    </Col>
                    <Col>
                    <TextBox
                            title="Here are some of the topics we cover:"
                            text='Travel! Food! Books! Ancient Knowledge! Wizard Spells! Lotions & Potions! Alchemy! Gardening! Writing! Knitting! Shopping! Drawing! Gold Mining! Street Sweeping!
                             Bad movies! Lol just kidding...'
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}