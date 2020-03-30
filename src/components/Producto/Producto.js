import React from 'react';
import PropTypes from 'prop-types';

import './Producto.css';

import { Card, Button, ButtonGroup } from 'react-bootstrap';

const producto = (props) => (
    <div className="Producto">
        <Card className="CardProducto" style={{ float: 'left' }}>
            <Card.Img src={props.imagen} />
            <Card.Body>
                <Card.Title>
                    <div className="CardTitulo">
                        {props.nombre}
                    </div>
                </Card.Title>
                <Card.Text >
                    <div className="CardTexto">
                        {props.precio}€
                    </div>
                </Card.Text>
                <Card.Text >
                    <div className="CardBoton">
                        <ButtonGroup>
                            <Button variant="success" onClick={props.restarProducto}>-</Button>
                            <Button variant="success" disabled>{props.cantidad}</Button>
                            <Button variant="success" onClick={props.sumarProducto}>+</Button>
                        </ButtonGroup>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

producto.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,
    sumarProducto: PropTypes.func,
    restarProducto: PropTypes.func
};

export default producto;