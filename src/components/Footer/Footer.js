import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './Footer.css';

const footer = (props) => (
    <Row>
        <Col sm={8}>
            Copyrigth 2020 - Andoni Marzo - Al Rigths Reserved
        </Col>
        <Col sm={4} className="FooterImagenes">
                <img src="https://firebasestorage.googleapis.com/v0/b/andoni-proyecto.appspot.com/o/facebook.png?alt=media&token=54eaa708-4f73-402e-b699-08047afabec4" alt="facebook"/>
                <img src="https://firebasestorage.googleapis.com/v0/b/andoni-proyecto.appspot.com/o/instagram.png?alt=media&token=7d2a1513-a08c-482a-bea0-55407105b99b" alt="instagram"/>
                <img src="https://firebasestorage.googleapis.com/v0/b/andoni-proyecto.appspot.com/o/twitter.png?alt=media&token=e5927545-8e7a-435b-86b8-d573e7af10cf" alt="twitter"/>
        </Col>
    </Row>
);

export default footer;