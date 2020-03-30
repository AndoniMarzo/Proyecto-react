import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Lista from '../../components/Lista/Lista';

import './Confirmacion.css'

class Confirmacion extends React.Component {
    render() {
        let confirmacion = []
        let botones = []
        if (this.props.total !== 0) {
            for (let key in this.props.productos) {
                if (this.props.carrito[key] > 0) {
                    let total = this.props.productos[key].precio * this.props.carrito[key]
                    confirmacion.push(
                        <div className='ConfirmacionLista'>
                            <Lista
                                nombre={this.props.productos[key].nombre}
                                imagen={this.props.productos[key].imagen}
                                precio={this.props.productos[key].precio}
                                cantidad={this.props.carrito[key]}
                                total={total} />
                        </div>
                    )
                }
            }

            confirmacion.push(
                <div className='ConfirmacionTotal'>
                    <p>Total del pedido: {this.props.total}€</p>
                </div>
            )

            botones =
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={4}>
                        <div className='Boton'>
                            <Link to={{ pathname: '/home' }} >
                                <Button variant="outline-danger">
                                    VOLVER
                                    </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='Boton'>
                            <Link to={{ pathname: '/formulario' }} >
                                <Button variant="outline-success">
                                    CONTINUAR
                                    </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
        } else {
            confirmacion =
                <div className='ConfirmacionTexto'>
                    No has seleccionado ningún producto
                </div>
            botones =
                <div className='Boton'>
                    <Link to={{ pathname: '/home' }} >
                        <Button variant="outline-danger">
                            VOLVER
                        </Button>
                    </Link>
                </div>
        }

        return (
            <>
                <div>
                    {confirmacion}
                </div>
                <div>
                    {botones}
                </div>
            </>
        );
    }

}

export default Confirmacion;