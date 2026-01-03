import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                    <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="/"><img src={navIcon1}  /></a>
                        <a href="/"><img src={navIcon2}  /></a>
                        <a href="/"><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2025. All Rights Reserved to GreatnessBuilder</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}