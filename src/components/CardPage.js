import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import defaultImage from './defaultImage';
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
    onChangeHandler(data) {
        console.log(data)
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
    render(data) {
        const {profile, isAvatarDefault} = this.state;
        return (
            <div>
                <Header />
                <main className="main__card">
                    <CardPreview cardPreviewName={data}>
                        <Profile avatar={profile.avatar} />
                    </CardPreview>
                    <Form onChangeHandler={this.onChangeHandler}>
                    <GetAvatar 
                        avatar={profile.avatar} 
                        isAvatarDefault={isAvatarDefault} 
                        updateAvatar={this.updateAvatar} />
                    </Form>
                </main>
                <Footer />
            </div>
        );
    }
}

export default CardPage;
