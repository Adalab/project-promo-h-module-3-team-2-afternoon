import React from 'react';
import ErrorMessage from './Error-message';
import Buttons from "./Buttons";


class Share extends React.Component{
    
    render(){
        return (
            <section className="share">
                <ErrorMessage id="error-name-job" errorText = 'Por favor, revisa los campos marcados en rojo.'/>
                <Buttons 
                btnClass='btn-create'
                action = {this.props.onChangeHandler}
                id='btn-create' 
                text='crear tarjeta'
                disabled = {false} //{this.props.buttonIsDisabled} TODO: Si el botón está deshabilitado no se llama a la función.
                >
                    <i className="far fa-address-card"></i>
                </Buttons>
                <div className="card__share " id="card-share">
                    <p>La tarjeta ha sido creada:</p>
                    <p id="card-link" className="card__link">card link</p>
                    <a id="twitter-share" href="" target="_blank"><div className="btn-twitter"><i className="fab fa-twitter"></i> Compartir en twitter</div></a>
                </div>
            </section>
        )
    }
}
export default Share;

/*                <div className="form-top" id="form-top-share">
                    <h2><i className="fas fa-share-alt"></i> Comparte</h2>
                    <div className="form-arrow arrow-down" id="arrow-share">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>*/
                //btn-create-inactive