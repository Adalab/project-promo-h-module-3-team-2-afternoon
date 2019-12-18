import React from "react";
//import Buttons from "Buttons";
import profilePic from "../images/--profile-picture.gif"
import PreviewIcons from "./PreviewIcons";
import Buttons from "./Buttons";

class CardPreview extends React.Component {
    render() {
        return (
            <section className="preview">
                <div className="preview__wrapper">
                <Buttons btnClass='btn-reset' text=' reset'>
                    <i class="far fa-trash-alt"></i>
                </Buttons>
                    <div className="card select-palette1" id="cardId">
                        <div className="card__id">
                            <h3 id="cardName" className="card__id--name">Nombre Apellido</h3>
                            <p id="cardJob" className="card__id--role">Front-end developer</p>
                        </div>
                        <div className="card__photo js__profile-image">
                            <img src={profilePic} alt="profileName" className="card__photo" />
                        </div>
                        <PreviewIcons iconsList={this.props.iconsList} />
                    </div>
                </div>
            </section>
        )
    }
}

export default CardPreview;