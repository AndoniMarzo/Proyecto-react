import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Lista.css'

const lista = (props) => (
    <Row>
        <Col sm={3}>
            <img className="ListaImagen" src={props.imagen} alt={props.nombre}></img>
        </Col>
        <Col sm={5} >
            <div className="ListaNombre">
                <p>{props.nombre}</p>
            </div>
        </Col>
        <Col sm={4} >
            <div className="ListaPrecio">
                <p>{props.cantidad}x{props.precio}€ = {props.total}€</p>
            </div>
        </Col>
    </Row>
);

lista.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,
    total: PropTypes.number
};

export default lista;