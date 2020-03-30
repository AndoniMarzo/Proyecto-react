import React from 'react';
import axios from '../../axios';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Producto from '../../components/Producto/Producto';

import './Home.css';
import { Usuario } from '../Main/Main'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            carrito: [],
            comprobarEstado: true
        };
    }

    cargarProductos() {
        axios.get('/productos.json')
            .then(response => {
                let productos = [];
                let carrito = [];
                for (let key in response.data) {
                    productos.push({
                        ...response.data[key],
                        key: key
                    });
                    carrito.push(0);
                }
                this.setState({ productos: productos });
                this.setState({ carrito: carrito });
            })
    }

    restarProducto = (key) => {
        let carrito = this.state.carrito;
        if (carrito[key] !== 0) {
            carrito[key] = carrito[key] - 1;
            this.setState({ carrito: carrito });
        }
    }

    sumarProducto = (key) => {
        let carrito = this.state.carrito;
        carrito[key] = carrito[key] + 1;
        this.setState({ carrito: carrito });
    }

    totalPedido = () => {
        let total = 0;
        for (let key in this.state.productos) {
            total += this.state.productos[key].precio * this.state.carrito[key]
        }
        return total
    }

    render() {
        if (this.state.comprobarEstado) {
            if (this.props.productos.length === 0) {
                this.cargarProductos()
            } else {
                this.setState({ productos: this.props.productos });
                this.setState({ carrito: this.props.carrito });
            }
            this.setState({ comprobarEstado: false });
        }

        let productos = <p style={{ textAlign: 'center' }}>Cargando productos...</p>;
        let total = 0;

        productos = this.state.productos.map(productos => {
            return <Producto
                nombre={productos.nombre}
                imagen={productos.imagen}
                precio={productos.precio}
                cantidad={this.state.carrito[productos.key]}
                sumarProducto={() => this.sumarProducto(productos.key)}
                restarProducto={() => this.restarProducto(productos.key)} />;
        });

        total = this.totalPedido()

        return (
            <>
                <Usuario.Consumer>
                    {({email}) => (
                        <Row>
                            {email}
                        </Row>
                    )}
                </Usuario.Consumer>
                <Row>
                    {productos}
                </Row>
                <Row className="HomeTotal">
                    <Col sm={2}>
                    </Col>
                    <Col sm={4}>
                        <div className="HomeBoton">
                            <p>Total del pedido: {total}€</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="HomeBoton">
                            <Link to={{ pathname: '/confirmacion' }} >
                                <Button onClick={() => this.props.actualizarEstado(this.state.productos, this.state.carrito, total)} variant="outline-success">
                                    REALIZAR PEDIDO
                                    </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Home;