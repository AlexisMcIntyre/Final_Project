import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { PictureBox } from "../Components/PictureBox";
import { TextBox } from "../Components/TextBox";
import riodulce2 from "../Pictures/riodulce2.JPG";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function AboutPage() {
    return (
    <>
        <h1>About</h1>
        <PictureBox
            num={riodulce2}
        />
        <TextBox
            desc="I'm a BOSSSSSS!"
        />
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={riodulce2} />
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </>
    );
}