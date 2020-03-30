import React from 'react';
import axios from '../../axios';
import { Form, Col, Button } from 'react-bootstrap';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current.focus();
    }
    
    postLoginHandler = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };
        console.log(authData);
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzy5rfq7FOnSJfMJHIdP2NqfyP142M3Fk', authData)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', JSON.stringify(response.data));
                this.props.setAuthentication(true, response.data);
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err);
                this.props.setAuthentication(false, {});
            });
    }

    postRegisterHandler = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };
        console.log(authData);
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzy5rfq7FOnSJfMJHIdP2NqfyP142M3Fk', authData)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', JSON.stringify(response.data));
                this.props.setAuthentication(true, response.data);
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err);
                this.props.setAuthentication(false, {});
            });
    }

    render() {
        return (
            <Form className="Login">
                <Form.Group>
                    <Form.Label>
                        Correo
                    </Form.Label>
                    <Form.Control ref={this.myRef} value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Contraseña
                        </Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                    <Form.Text className="text-muted">
                        La contraseña debe de tener al menos seis caracteres
                    </Form.Text>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} md="2">
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <div className="LoginBoton">
                            <Button onClick={this.postLoginHandler} variant="outline-success" >
                                INICIAR SESIÓN
                            </Button>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <div className="LoginBoton">
                            <Button onClick={this.postRegisterHandler} variant="outline-success" >
                                REGISTRARSE
                            </Button>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}

export default Login;