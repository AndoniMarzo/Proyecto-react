import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Finalizar.css'

class Finalizar extends React.Component {

    render() {
        return (
            <>
                <div className='TextoFinalizar'>
                    <p>Gracias por realizar la compra,</p>
                    <p>recibirá su pedido lo antes posible!</p>
                </div>
                <div className='BotonFinalizar'>
                    <Link to={{ pathname: '/home' }} >
                        <Button variant="outline-success">
                            REALIZAR UN NUEVO PEDIDO
                                    </Button>
                    </Link>
                </div>
            </>
        );
    }

}

export default Finalizar;