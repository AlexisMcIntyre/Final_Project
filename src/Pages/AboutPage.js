import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { PictureBox } from "../Components/PictureBox";
import { TextBox } from "../Components/TextBox";
import adventure from "../Pictures/adventure.jpg";
import book from "../Pictures/book.jpg";
import TV from "../Pictures/TV.jpg";
import videogame from "../Pictures/videogame.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//This is a simple static page that uses React Bootstrap card, row and col for styling. The cards could have been a component but I was experimenting with different code formats.

export default function AboutPage() {
    return (
    <>
        <h1>About</h1>
        <TextBox
            text="Lo and Behold!!!--I'm the original Renaissance Woman! What about you? Are you a specialist or a generalist? "
        />
        
        <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={adventure} />
                    <Card.Body>
                        <Card.Title>About Me</Card.Title>
                        <Card.Text>
                                If I can be summed up in a phrase, it might be: 
                                "How do I pick just one thing??" Well, why pick
                                just one when you can do it all?<br />
                                Well, I had to pick something to do for a living,
                                so I am a Geologist currently. As you may have guessed,
                                rocks are........well, <i>rocks</i>...It's time to
                                do something new! So I am now an aspiring front-end developer. 
                                <br />
                                I am an avid outdoor fan--hiking, biking, camping,
                                 backpacking, climbing, skiing--you name it! I am also an avid
                                  indoor fan--reading, writing, cooking, crocheting, gaming--a
                                   rainy day is a great opportunity!
                                Check out the other cards and see if we have any
                                interests in common!
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
          
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={book} />
                    <Card.Body>
                        <Card.Title>Good Books</Card.Title>
                        <Card.Text>
                            <ul>Fiction:</ul>
                                <li>The Counte of Monte Cristo by Alexandre Dumas</li>
                                <li>Dune by Frank Herbert</li>
                                <li>The Wind-Up Bird Chronicle by Haruki Murakami</li>
                                <li>Sabriel by Garth Nix</li>
                                <li>The Three-Body Problem by Liu Cixin</li>
                                <li>Ubik by PKD</li>
                                <li>2001:A Space Odessey by Arthur Clarke</li>
                                <li>Love in the Time of Cholera by Gabriel Marquez</li>
                                <li>The Road by Cormac McCarthy</li>
                                <br />
                            <ul>Non-Fiction:</ul>
                                <li>12 Rules for Life by Jordan Peterson</li>
                                <li>Origins by Neil deGrasse Tyson</li>
                                <li>Meditations by Marcus Aurelius</li>
                                <li>How I Found Freedom in an Unfree World by Harry Browne</li>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={TV} />
                    <Card.Body>
                        <Card.Title>Good TV</Card.Title>
                        <Card.Text>
                            <ul>Good Movies:</ul>
                                <li>Inception</li>
                                <li>The Fifth Element</li>
                                <li>Grandma's Boy</li>
                                <br />
                            <ul>Good Shows:</ul>
                                <li>Altered Carbon</li>
                                <li>Game of Thrones</li>
                                <li>Black Mirror</li>
                                <li>Reno 911</li>
                                <br />
                            <ul>Good trash TV:</ul>
                                <li>Real Housewives of Beverly Hills</li>
                                <li>90-Day Fiance</li>
                                <li>Judge Judy</li>

                        </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={videogame} />
                        <Card.Body>
                            <Card.Title>Good Video Games</Card.Title>
                            <Card.Text>
                                <li>Talos Principle I & II</li>
                                <li>Mass Effect series</li>
                                <li>Skyrim</li>
                                <li>Obduction</li>
                                <li>Starfield</li>
                                <li>Firmament</li>
                                <li>Suikoden series</li>
                                <li>Final Fantasy VI-XII</li>
                                <li>Legend of Mana</li>
                                <li>Zelda: BotW, OoT, MM, TP</li>
                                <li>Okami</li>
                                <li>Stardew Valley</li>
                            </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    </>
    );
}