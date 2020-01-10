import React from 'react';
import ErrorMessage from './Error-message';
import Buttons from "./Buttons";


class Share extends React.Component {

    render() {
        const {
            errorMessage,
            onSubmitHandler,
            buttonIsDisabled,
            linkCreateCard,
            linkShareTwitter
        } = this.props
        return (
            <section className="share">
                <ErrorMessage id="error-name-job" errorMessage={errorMessage} />
                <Buttons
                    btnClass='btn-create'
                    action={onSubmitHandler}
                    id='btn-create'
                    text='crear tarjeta'
                    disabled={buttonIsDisabled}
                >
                    <i className="far fa-address-card"></i>
                </Buttons>
                <div className={`card__share ${!linkCreateCard ? 'hidden' : null}`} id="card-share">
                    <p>La tarjeta ha sido creada:</p>
                    <p id="card-link" className="card__link"><a id="twitter-url" href={linkCreateCard !== '' ? linkCreateCard : ''} target="_blank" rel="noopener noreferrer">{linkCreateCard !== '' ? linkCreateCard : 'Card link'}</a></p>
                    <a id="twitter-share" href={linkShareTwitter !== '' ? linkShareTwitter : ''} target="_blank" rel="noopener noreferrer"><div className="btn-twitter"><i className="fab fa-twitter"></i> Compartir en twitter</div></a>
                </div>
            </section>
        )
    }
}
export default Share;

