import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavLine from "../components/NavItem";
import Blocks from "../components/Blocks";

const HomePage = () => {
    return(
        <Container fluid>
            <Row className="background_wrap">
                <NavLine/>
                <Col xxl={7} xl={7} lg={7} md={12} sm={12} className="header_title">
                    <h1>ПУТЕШЕСТВИЕ</h1>
                    <p>на красную планету</p>
                    <a id="start_travel">Начать путешествие</a>
                </Col>
                <Col xxl={5} xl={5} lg={5} md={12} sm={12} className="blocks">
                    <Blocks/>
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage