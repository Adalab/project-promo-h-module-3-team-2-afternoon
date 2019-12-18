import React from "react";
//import Icons from "Icons";
//import Buttons from "Buttons";
import profilePic from "../images/--profile-picture.gif"
import PreviewIcons from "./PreviewIcons";

class CardPreview extends React.Component {
    
    render() {
        return (
    <section className="preview">
        <div className="preview__wrapper">
            <button id="btn-reset" className="btn-reset"><i className="far fa-trash-alt"></i> reset</button>
            <div className="card select-palette1" id="cardId">
                <div className="card__id">
                    <h3 id="cardName" className="card__id--name">{this.props.cardPreviewName}</h3>
                    <p id="cardJob" className="card__id--role">{this.props.cardPreviewJob}</p>
                </div>
                <div className="card__photo js__profile-image">
                    <img src={profilePic} alt="profileName" className="card__photo"/>
                </div>
                <PreviewIcons iconsList={this.props.iconsList}/>
            </div>
        </div>
    </section>
    )
    }
}
CardPreview.defaultProps = {
    cardPreviewName: 'Nombre Apellido',
    cardPreviewJob: 'Front-end developer'
}
export default CardPreview;