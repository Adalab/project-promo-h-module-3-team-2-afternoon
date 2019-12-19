import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
import GetAvatar from './components/GetAvatar';
import Profile from './components/Profile';
import defaultImage from './components/defaultImage';
import { Accordion, AccordionItem } from 'react-sanfona';

class CardPage extends React.Component {
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
    onChangeHandler(data) {
        console.log(data)
    }
    render(data) {
        const {profile, isAvatarDefault} = this.state;
        return (
            <div>
                <Header />
                <main className="main__card">
                <GetAvatar 
                    avatar={profile.avatar} 
                    isAvatarDefault={isAvatarDefault} 
                    updateAvatar={this.updateAvatar} />
                
                    <Profile avatar={profile.avatar} />
                    <CardPreview cardPreviewName={data} />
                    <Form onChangeHandler={this.onChangeHandler} />
                </main>
                <Footer />
            </div>


        );
    }
}

export default CardPage;
