import React, { Component } from 'react';
import landingImage from "./../images/download.svg";
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="wrapper">
        <main className="main">
          <div className="main__logo">
            <img className="main__logo-image" src={landingImage} alt="Logo" />
          </div>
          <h1 className="main__title"> Crea tu tarjeta de visita</h1>
          <p className="main__text">Crea mejores contactos profesionales de <span>forma fácil y cómoda</span></p>
          <div className="main__icons">
            <div className="main__icons-icon"> <i className="far fa-object-ungroup"></i>
              <p className="main__text--icons">Diseña</p>
            </div>
            <div className="main__icons-icon"> <i className="far fa-keyboard"></i>
              <p className="main__text--icons">Rellena</p>
            </div>
            <div className="main__icons-icon"> <i className="fas fa-share-alt"></i>
              <p className="main__text--icons">Comparte</p>
            </div>
          </div>
          <div className="main__link"> <Link className="main__link--a" to="/cardpage">Comenzar</Link>
          </div>
        </main>
      </div>
    );
  }
}
{/* <a className="main__link--a" href="./card.html">Comenzar</a> */ }
export default Landing;