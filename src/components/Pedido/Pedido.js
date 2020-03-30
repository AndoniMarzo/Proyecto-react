import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Pedido.css';

class Pedido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detalles: false
        };
    }

    render() {
        let carrito = []
        let detalles = null

        for (let key in this.props.carrito) {
            carrito.push(
                <p>
                    {this.props.carrito[key].producto}: {this.props.carrito[key].cantidad}
                </p>
            )
        }

        if (this.props.detalles === this.props.referencia) {
            detalles =
                <>
                    <Row >
                        <div className="DetallesTitulo">
                            <p >Detalles del usuario</p>
                        </div>
                    </Row>
                    <Row>
                        <Col className="DetallesTexto">
                            <p>Nombre: {this.props.nombre}</p>
                            <p>Apellidos: {this.props.apellidos}</p>
                            <p>Direccion: {this.props.direccion}</p>
                            <p>Teléfono: {this.props.telefono}</p>
                        </Col>
                        <Col className="DetallesTexto">
                            <p>Ciudad: {this.props.ciudad}</p>
                            <p>Código postal: {this.props.codigopostal}</p>
                            <p>País: {this.props.pais}</p>
                        </Col>
                    </Row>

                </>
        }

        return (
            <Row className="Pedido">
                <Col sm={10}>
                    <div onClick={this.props.pedirDetalles}>
                        <div className="PedidoDatos">
                            <p>Usuario: {this.props.usuario}</p>
                            <p>Referencia: {this.props.referencia}</p>
                            <p>Total: {this.props.total}€</p>
                        </div>
                        <div className="PedidoCarrito">
                            {carrito}
                        </div>
                        <div className="PedidoDetalles">
                            {detalles}
                        </div>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className="PedidoBorrar">
                        <img onClick={this.props.activarAlerta} src="https://firebasestorage.googleapis.com/v0/b/andoni-proyecto.appspot.com/o/borrar.png?alt=media&token=5e9f2b65-4f82-48a3-9661-8940422093aa" alt="borrar" />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Pedido;