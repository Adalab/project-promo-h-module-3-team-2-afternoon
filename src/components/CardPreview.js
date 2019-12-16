import React from "react";
//import Icons from "Icons";
//import Buttons from "Buttons";
import profilePic from "../images/--profile-picture.gif"

class CardPreview extends React.Component {
    render() {
        return (
    <section className="preview">
        <div className="preview__wrapper">
            <button id="btn-reset" className="btn-reset"><i className="far fa-trash-alt"></i> reset</button>
            <div className="card select-palette1" id="cardId">
                <div className="card__id">
                    <h3 id="cardName" className="card__id--name">Nombre Apellido</h3>
                    <p id="cardJob" className="card__id--role">Front-end developer</p>
                </div>
                <div className="card__photo js__profile-image">
                    <img src={profilePic} alt="profileName" className="card__photo"/>
                </div>
                <div className="card__contacts">
                    <ul>
                        <a id = "linkPhone" href=""><li id="cardPhone" className="contact-icon contact-icon-palette1 hidden"><i class="fas fa-mobile-alt"></i></li></a>
                        <a id = "linkEmail" href=""><li id="cardEmail" className="contact-icon contact-icon-palette1 hidden"><i class="far fa-envelope"></i></li></a>
                        <a id = "linkLinkedin" href="" target="_blank"><li id="cardLinkedin" className="contact-icon contact-icon-palette1 hidden"><i class="fab fa-linkedin-in"></i></li></a>
                        <a id = "linkGithub" href="" target="_blank"><li id="cardGithub" className="contact-icon contact-icon-palette1 hidden"><i class="fab fa-github-alt"></i></li></a>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
    }
}

export default CardPreview;