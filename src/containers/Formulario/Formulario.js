import React from 'react';
import axios from '../../axios';
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Formulario.css';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellidos: '',
            correo: '',
            direccion: '',
            ciudad: '',
            codigopostal: '',
            pais: '',
            telefono: ''
        };

        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current.focus();
        const token = JSON.parse(localStorage.getItem('token'));
        if (token != null) {
            this.setState({ correo: token.email });
        }
    }

    totalPedido = (productos, carrito) => {
        let total = [];
        for (let key in productos) {
            if (carrito[key] > 0) {
                total.push({
                    producto: productos[key].nombre,
                    cantidad: carrito[key]
                })
            }
        }
        return total
    }
    postDataHandler = () => {
        const data = {
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            correo: this.state.correo,
            direccion: this.state.direccion,
            ciudad: this.state.ciudad,
            codigopostal: this.state.codigopostal,
            pais: this.state.pais,
            telefono: this.state.telefono,
            carrito: this.totalPedido(this.props.productos, this.props.carrito),
            total: this.props.total
        };

        axios.post('/pedidos.json', data)
    }


    render() {
        return (
            <Form className="Formulario">
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>
                            Nombre
                        </Form.Label>
                        <Form.Control ref={this.myRef} value={this.state.nombre} onChange={(event) => this.setState({ nombre: event.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col} md="8">
                        <Form.Label>
                            Apellidos
                        </Form.Label>
                        <Form.Control value={this.state.apellidos} onChange={(event) => this.setState({ apellidos: event.target.value })} />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>
                        Correo electrónio
                        </Form.Label>
                    <Form.Control type="email" value={this.state.correo} onChange={(event) => this.setState({ correo: event.target.value })} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Dirección
                        </Form.Label>
                    <Form.Control value={this.state.direccion} onChange={(event) => this.setState({ direccion: event.target.value })} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>
                            Ciudad
                        </Form.Label>
                        <Form.Control value={this.state.ciudad} onChange={(event) => this.setState({ ciudad: event.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>
                            Código Postal
                        </Form.Label>
                        <Form.Control value={this.state.codigopostal} onChange={(event) => this.setState({ codigopostal: event.target.value })} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>
                            País
                        </Form.Label>
                        <Form.Control value={this.state.pais} onChange={(event) => this.setState({ pais: event.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>
                            Teléfono
                        </Form.Label>
                        <Form.Control value={this.state.telefono} onChange={(event) => this.setState({ telefono: event.target.value })} />
                    </Form.Group>
                </Form.Row>
                <div className="BotonFormulario">
                    <Link to={{ pathname: '/finalizar' }} >
                        <Button onClick={() => { this.props.actualizarEstado([], [], 0); this.postDataHandler() }} variant="outline-success" >
                            REALIZAR PEDIDO
                    </Button>
                    </Link>
                </div>
            </Form>
        );
    }
}

export default Formulario;