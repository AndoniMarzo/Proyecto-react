import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Cabecera.css'

class Cabecera extends React.Component {

    logoutUser = () => {
        localStorage.removeItem('token');
    }

    render() {
        return (
            <>
                <Row>
                    <div className="CabeceraImagen">
                        <img src="https://firebasestorage.googleapis.com/v0/b/andoni-proyecto.appspot.com/o/titulo.png?alt=media&token=e443cb01-aae2-4228-b8a7-8523031690ca" alt="Andoni y la fábrica de chocolate"></img>
                    </div>
                </Row>
                <Row>
                    <Col >
                        <div className="CabeceraBoton">
                            <Link to={{ pathname: '/home' }} >
                                <Button variant="outline-success">PÁGINA PRINCIPAL</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="CabeceraBoton">
                            <Link to={{ pathname: '/pedidos' }} >
                                <Button variant="outline-success">PEDIDOS</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="CabeceraBoton">
                            <Link to={{ pathname: '/login' }} >
                                <Button variant="outline-success">LOGIN</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="CabeceraBoton">
                            <Button onClick={() => this.logoutUser()} variant="outline-success">LOGOUT</Button>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Cabecera;