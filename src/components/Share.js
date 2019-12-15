import React from 'react';
import ErrorMessage from './Error-message';

class Share extends React.Component{
    render(){
        return (
            <section className="forms__section share">
                <div className="form-top" id="form-top-share">
                    <h2><i className="fas fa-share-alt"></i> Comparte</h2>
                    <div className="form-arrow arrow-down" id="arrow-share">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className="form-bottom" id="form-bottom-share">
                    <ErrorMessage id="error-name-job" errorText = 'Por favor, revisa los campos marcados en rojo.'/>
                    <button className="btn-create  btn-create-inactive" id="btn-create"><i className="far fa-address-card"></i>
                        Crear tarjeta</button>
                    <div className="card__share hidden" id="card-share">
                        <p>La tarjeta ha sido creada:</p>
                        <p id="card-link" className="card__link">card link</p>
                        <a id="twitter-share" href="" target="_blank"><div className="btn-twitter"><i className="fab fa-twitter"></i> Compartir en twitter</div></a>
                    </div>
                </div>
            </section>
        )
    }
}
export default Share;