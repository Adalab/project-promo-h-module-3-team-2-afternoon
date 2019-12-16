import React from "react";
import Icons from "Icons";
import Buttons from "Buttons";

class CardPreview extends React.Component {
    render() {
        return (
    <section class="preview">
        <div class="preview__wrapper">
            <button id="btn-reset" class="btn-reset"><i class="far fa-trash-alt"></i> reset</button>
            <div class="card select-palette1" id="cardId">
                <div class="card__id">
                    <h3 id="cardName" class="card__id--name">Nombre Apellido</h3>
                    <p id="cardJob" class="card__id--role">Front-end developer</p>
                </div>
                <div class="card__photo js__profile-image"></div>
                <div class="card__contacts">
                    <ul>
                        <a id = "linkPhone" href=""><li id="cardPhone" class="contact-icon contact-icon-palette1 hidden"><i class="fas fa-mobile-alt"></i></li></a>
                        <a id = "linkEmail" href=""><li id="cardEmail" class="contact-icon contact-icon-palette1 hidden"><i class="far fa-envelope"></i></li></a>
                        <a id = "linkLinkedin" href="" target="_blank"><li id="cardLinkedin" class="contact-icon contact-icon-palette1 hidden"><i class="fab fa-linkedin-in"></i></li></a>
                        <a id = "linkGithub" href="" target="_blank"><li id="cardGithub" class="contact-icon contact-icon-palette1 hidden"><i class="fab fa-github-alt"></i></li></a>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
    }
}

export default CardPreview;