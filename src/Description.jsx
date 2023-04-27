import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row, Container } from "react-bootstrap";
import Typed from 'react-typed'

export function Description() {
    let t1 = "Je m'appelle Alban, je viens de Paris et je suis passionné de tech et d'informatique. J'ai obtenu l'an passé mon diplôme du DUT informatique à l'Upec. La seconde année de ce DUT était en alternance et je l'ai passé au côté d'un ingénieur administrateur système et réseaux. \<br/> \<br/> Désormais, je suis L3 Miage (c'est de l'informatique et de la gestion d'entreprise) à Évry. Je poursuis mes études en alternance à Safran Aircraft Engines à un poste de chargé de projet informatique. \<br/> \<br/> En ce moment, j'essaie de développer mes compétences en matière de développement. Que ça soit web avec du React, blockchain avec Solidity (je débute), j'essaie aussi de toucher à tout avec du Python, des frameworks, des challenges RootMe, etc...";                       
    return(
        <Container id="description">
            <Row xs={1} md={2} className="g-2">
                <Col>
                    <Card href="#description" style={{ width: '35rem' }} className="card-description">
                        <Card.Title className="card-title-description">Qui suis-je ?</Card.Title>
                        <Card.Text className="card-text-description">
                            <Typed
                                className="typed-1"
                                strings={[t1]}
                                typeSpeed={10}
                                backSpeed={1000}
                                smartBackspace= {true}
                            />
                        </Card.Text>
                    </Card> 
                </Col>
                <Col>
                    <Card className="card-illustration">
                        <Card.Img className="card-img-illustration" src="Programming-amico.png"/>
                    </Card>
                </Col> 
            </Row>
        </Container> 
    );
}