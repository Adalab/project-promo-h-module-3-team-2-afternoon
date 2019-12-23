import React from "react";
import PreviewIcons from "./PreviewIcons";
import Buttons from "./Buttons";
import PropTypes from 'prop-types';

class CardPreview extends React.Component {
    //constructor(props) {
        //super(props);
       // this.resetHandler = this.resetHandler.bind(this);
      //}

      /*resetHandler (props) {
        this.props.fullName = "Nombre Apellido",
        this.props.job = "Front-end Developer",
        this.props.linkedin = '',
        this.props.github = '',
        this.props.email = '', 
        this.props.phone = ''
    }*/
    render() {

        const paletteClasses = {
            1: 'select-palette1',
            2: 'select-palette2',
            3: 'select-palette3'
        };
        const palette = this.props.palette === '' ? "1" : this.props.palette;
        const cardClass = `card ${paletteClasses[palette]}`;

        return (
            <section className="preview">
                <div className="preview__wrapper">
                <Buttons onClick={this.resetHandler} btnClass='btn-reset' text=' reset'>
                    <i className="far fa-trash-alt"></i>
                </Buttons>
                    <div className={cardClass} id="cardId">
                        <div className="card__id">
                            <h3 id="cardName" className="card__id--name">{this.props.fullName === '' ? "Nombre Apellido" : this.props.fullName}</h3>
                            <p id="cardJob" className="card__id--role">{this.props.job === '' ? "Front-end Developer" : this.props.job}</p>
                        </div>
                        {this.props.children}
                        <PreviewIcons linkedin={this.props.linkedin} github={this.props.github} email={this.props.email} phone={this.props.phone} />
                    </div>
                </div>
            </section>
        )
    }
}
CardPreview.propTypes={
    name: PropTypes.string,
    job: PropTypes.string
}
export default CardPreview;