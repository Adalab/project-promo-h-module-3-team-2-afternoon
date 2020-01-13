import React from 'react';
import ErrorMessage from './Error-message';
import Buttons from "./Buttons";
import Loader from './Loader';
// import cardCreated from './cardCreated';


class Share extends React.Component{
    
    render(props){
        return (
            <section className="share">
                <ErrorMessage id="error-name-job" errorMessage = {this.props.errorMessage}/>
                <Buttons 
                btnClass='btn-create'
                action = {this.props.onSubmitHandler}
                id='btn-create' 
                text='crear tarjeta'
                disabled = {this.props.buttonIsDisabled} 
                >
                    <i className="far fa-address-card"></i>
                </Buttons>
                <div className={`card__share ${!this.props.linkCreateCard ? 'hidden' : null}`} id="card-share">
                    {this.props.isLoading ? <Loader/> : 
                    <React.Fragment>
                    <p>La tarjeta ha sido creada:</p>
                    <p id="card-link" className="card__link"><a id="twitter-url" href={this.props.linkCreateCard!== '' ? this.props.linkCreateCard : ''} target="_blank" rel="noopener noreferrer">{this.props.linkCreateCard!== '' ? this.props.linkCreateCard : 'Card link'}</a></p>
                    <a id="twitter-share" href={this.props.linkShareTwitter!== '' ? this.props.linkShareTwitter : ''} target="_blank" rel="noopener noreferrer"><div className="btn-twitter"><i className="fab fa-twitter"></i> Compartir en twitter</div></a>
                    </React.Fragment>}
                </div>
            </section>
        )
    }
}
export default Share;

