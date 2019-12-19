import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Design from './Design';
import { Accordion, AccordionItem } from 'react-sanfona';
import GetAvatar from './GetAvatar';
import defaultImage from './defaultImage';


class Form extends React.Component {
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
    const {profile} = this.state;
    this.setState(prevState => {
      const newProfile = {...profile, avatar: img};
      return {
        profile: newProfile,
        isAvatarDefault: false
      }
    });
  }
  render() {
    const {profile, isAvatarDefault} = this.state;
  return (
        <section className="forms">
          <div className="section-wrapper">
            <form action="" method="POST" id="card__form">
            <Accordion>
            {[<h2><i className="far fa-object-ungroup"></i> Diseña<i className="fas fa-chevron-down design-arrow form-arrow"></i></h2>, <h2><i className="far fa-keyboard"></i> Rellena<i className="fas fa-chevron-down fill-arrow form-arrow"></i></h2>,
            <h2><i className="fas fa-share-alt"></i> Comparte<i className="fas fa-chevron-down share-arrow form-arrow"></i></h2>].map((item,index) => {
            return (
              <AccordionItem
              key={index}
              title={item}
              id={index}
              //ref="itemRef"
              >
              
  
              <div>
                {index === 0 ? (
                    <Design/>
                  ) : null}
  
                {index === 1 ? (
                    <Fill onChangeHandler = {this.props.onChangeHandler}>
                      <GetAvatar
                        avatar={profile.avatar} 
                        isAvatarDefault={isAvatarDefault} 
                        updateAvatar={this.updateAvatar}
                      />
                    </Fill>
                  ) : null}
  
                {index === 2 ? (
                    <Share/>
                  ) : null}
              </div>
            </AccordionItem>     
          );}
        )}
          </Accordion>
        </form>
      </div>
    </section>
    )
  }
}
/*class Form extends React.Component {
    render(){
        return (
            <section className="forms">
                <div className="section-wrapper">
                    <form action="" method="POST" id="card__form">
                        <Design />
                        <Fill/>
                        <Share/>
                    </form>
                </div>
            </section>
        )
    }
}*/

export default Form;
