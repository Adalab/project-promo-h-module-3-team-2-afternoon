import React from "react";
//import Buttons from "Buttons";
import PreviewIcons from "./PreviewIcons";
import Profile from "./Profile";
import Buttons from "./Buttons";
import defaultImage from './defaultImage';


class CardPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage
          }
        };
        this.updateAvatar = this.updateAvatar.bind(this);
      }
    updateAvatar(img) {
        const { profile } = this.state;
        this.setState(prevState => {
          const newProfile = { ...profile, photo: img };
          return {
            profile: newProfile,
            isAvatarDefault: false
          };
        });
    }
    render() {
        const profile = this.state;
        return (
            <section className="preview">
                <div className="preview__wrapper">
                <Buttons btnClass='btn-reset' text=' reset'>
                    <i className="far fa-trash-alt"></i>
                </Buttons>
                    <div className="card select-palette1" id="cardId">
                        <div className="card__id">
                            <h3 id="cardName" className="card__id--name">Nombre Apellido</h3>
                            <p id="cardJob" className="card__id--role">Front-end developer</p>
                        </div>
                        <Profile avatar={profile.avatar} />
                        {/*<div className="card__photo js__profile-image">
                            <img src={profilePic} alt="profileName" className="card__photo" />
                        </div>*/}
                        <PreviewIcons iconsList={this.props.iconsList} />
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