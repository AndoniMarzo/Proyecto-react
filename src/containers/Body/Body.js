import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Home/Home';
import Confirmacion from '../Confirmacion/Confirmacion';
import Formulario from '../Formulario/Formulario';
import Finalizar from '../Finalizar/Finalizar';
import Pedidos from '../Pedidos/Pedidos';
import Login from '../Login/Login'

import { Usuario } from '../Main/Main'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            carrito: [],
            total: 0
        };
    }

    setAuthentication = (auth, data) => {
        this.setState({ auth: auth });
        this.setState({ authData: data });
    }

    actualizarEstado = (productos, carrito, total) => {
        this.setState({ productos: productos });
        this.setState({ carrito: carrito });
        this.setState({ total: total });
    }

    render() {
        const token = JSON.parse(localStorage.getItem('token'));
        let valor = null
        if (token != null) {
            valor = {
                email: <div className="HomeUsuario">
                    Bienvenido {token.email}!
                </div>
            }
            console.log(valor)
        } else {
            valor = {
                email: null
            }
            console.log(valor)
        }

        return (
            <>
                <Redirect
                    from="/"
                    to="/home" />
                <Switch>
                    <Route
                        path="/home"
                        render={(props) =>
                            <Usuario.Provider value={valor}>
                                <Home {...props} productos={this.state.productos} carrito={this.state.carrito} actualizarEstado={this.actualizarEstado} />
                            </Usuario.Provider>
                        } />
                    <Route
                        path="/confirmacion"
                        render={(props) => <Confirmacion {...props} productos={this.state.productos} carrito={this.state.carrito} total={this.state.total} />} />
                    <Route
                        path="/formulario"
                        render={(props) => <Formulario {...props} productos={this.state.productos} total={this.state.total} carrito={this.state.carrito} authData={this.state.authData} actualizarEstado={this.actualizarEstado} />} />
                    <Route
                        path="/finalizar"
                        component={Finalizar} />
                    <Route
                        path="/pedidos"
                        component={Pedidos} />
                    <Route
                        path="/login"
                        render={(props) => <Login {...props} setAuthentication={this.setAuthentication} />} />
                </Switch>
            </>
        );
    }
}

export default Body;