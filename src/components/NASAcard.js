import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, CardFooter
} from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import styled from "styled-components";

const NASA_Img = styled.img`
height: 50%;
width: 100%;
object-fit: scale;
margin: 2% 0;
`
const NASA_Explanation = styled.p`
color: black;
background: lightgray;
font-size: 2rem;
`

const NASA_header = styled.div`
font-size: 7rem;
color: red;
background: black;
padding: 2% 0;
`

const NASA_footer = styled.div`
background: black;
color: red;
font-size: 1.5rem;
padding: 2% 0;
`

const NASAcard = props => {
    return (
        <div>
            <Card>
                <CardBody>
                    <NASA_header><h1>NASA's Astronomy Picture Of The Day</h1></NASA_header>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">{props.title}</h1>
                            <p className="lead">{props.date}</p>
                        </Container>
                    </Jumbotron>
                    <NASA_Img top width="100%" src={props.imageOfDay} alt="NASA photo of the day" />
                    <NASA_Explanation>{props.explanation}</NASA_Explanation>
                    <NASA_footer><p>Copyright © NASA 2020</p></NASA_footer>
                </CardBody>
            </Card>
        </div>
    );
}
export default NASAcard;