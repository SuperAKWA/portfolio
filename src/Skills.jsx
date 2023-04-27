import { Col, Row, Container, Card } from "react-bootstrap";
import { BsCCircleFill } from "react-icons/bs";
import { DiJavascript1,  DiReact, DiLinux,  DiPython, DiGithubBadge, DiTerminal, DiWindows, DiVisualstudio, DiPhp, DiJava, DiMysql } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";

export function Skills(){
    return(
        <Container id="skills">
            <Card className="skills-card">
                <Card.Title className="Skills-card-title">
                    SKILLS
                </Card.Title>
                <Card.Title className="Skills-card-title-technos">
                    Technos
                </Card.Title>
            </Card>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <BsCCircleFill />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <FaCss3Alt />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiGithubBadge />
                    </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPython />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiTerminal />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPhp />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJava />
                </Col>
            </Row>
            <Card className="skills-card">
                <Card.Title className="Skills-card-title-outils">
                    Outils
                </Card.Title>
            </Card>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiLinux />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiWindows />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiVisualstudio />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMysql  />
                </Col>               
            </Row>
        </Container>
    );
}