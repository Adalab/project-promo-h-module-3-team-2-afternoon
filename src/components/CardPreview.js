import React from "react";
import PreviewIcons from "./PreviewIcons";
import Buttons from "./Buttons";
import PropTypes from 'prop-types';

class CardPreview extends React.Component {

    render() {

        const paletteClasses = {
            1: 'select-palette1',
            2: 'select-palette2',
            3: 'select-palette3'
        };
        const palette = this.props.palette === '' ? "1" : this.props.palette;
        const cardClass = `card ${paletteClasses[palette]}`;

        const {
            resetHandler,
            fullName,
            job,
            children,
            linkedin,
            github,
            email,
            phone
        } = this.props

        return (
            <section className="preview">
                <div className="preview__wrapper">
                    <Buttons
                        action={resetHandler}
                        btnClass='btn-reset'
                        text=' reset'>
                        <i className="far fa-trash-alt"></i>
                    </Buttons>
                    <div className={cardClass} id="cardId">
                        <div className="card__id">
                            <h3 id="cardName" className="card__id--name">{fullName === '' ? "Nombre Apellido" : fullName}</h3>
                            <p id="cardJob" className="card__id--role">{job === '' ? "Front-end Developer" : job}</p>
                        </div>
                        {children}
                        <PreviewIcons linkedin={linkedin} github={github} email={email} phone={phone} />
                    </div>
                </div>
            </section>
        )
    }
}
CardPreview.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string
}
export default CardPreview;