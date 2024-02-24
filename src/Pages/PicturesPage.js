import React, { useState } from 'react';
import { PictureBox } from "../Components/PictureBox";
import { TextBox } from "../Components/TextBox";
import drinks from "../Pictures/drinks.JPG";
import cafezinho from "../Pictures/cafezinho.JPG";
import acatenango from "../Pictures/acatenango.JPG";
import cityscape from "../Pictures/cityscape.JPG";
import japanesemaple from "../Pictures/japanesemaple.JPG";
import candy from "../Pictures/candy.jpeg";
import TTower from "../Pictures/TTower.JPG";
import cityscapedobrasil from "../Pictures/cityscapedobrasil.JPG";
import steakdinner from "../Pictures/steakdinner.JPG";
import friedtapioca from "../Pictures/friedtapioca.JPG";
import catherdral from "../Pictures/cathedral.JPG";
import fuego from "../Pictures/fuego.JPG";
import lanquin from "../Pictures/lanquin.JPG";
import panajachel from "../Pictures/panajachel.JPG";
import tikkal from "../Pictures/tikkal.JPG";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


export default function Pictures() {

    const [show, setShow] = useState(false);

    return (
        <>

            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={2500} autohide>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto">Quick Tip</strong>
                    </Toast.Header>
                    <Toast.Body>Click and hold on the image to expand!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Quick Tip</Button>
                </Col>
                </Row>

            <h1>Pictures</h1>
            <TextBox 
                    title="Japan"
                    text="A land of cuteness and ingenuity!"
                />
                <PictureBox 
                    num1={drinks}
                    num2={cityscape}
                    num3={TTower}
                    num4={japanesemaple}
                    num5={candy}
                />
            

            <TextBox 
                    title="Brazil"
                    text="A land of funk music and family!"
                />

                <PictureBox 
                    num1={cafezinho}
                    num2={cityscapedobrasil}
                    num3={steakdinner}
                    num4={friedtapioca}
                    num5={catherdral}
                />

            <TextBox 
                    title="Guatemala"
                    text="A land of adventure and relaxation!"
                />

                <PictureBox 
                    num1={acatenango}
                    num2={fuego}
                    num3={lanquin}
                    num4={panajachel}
                    num5={tikkal}
                />


        </>
    );
}