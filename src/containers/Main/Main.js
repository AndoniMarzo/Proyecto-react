import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Cabecera from '../../components/Cabecera/Cabecera'
import Body from '../Body/Body'
import Footer from '../../components/Footer/Footer'

import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <article>
          <section className="Cabecera">
            <Cabecera />
          </section>
          <section className="Body">
            <Body />
          </section>
          <section className="Footer">
            <Footer />
          </section>
        </article>
      </BrowserRouter>
    );
  }
}

export default Main;