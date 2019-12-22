import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import defaultImage from './defaultImage';

class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          palette: '',
          fullName: '',
          job: '',
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage
          }
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
      }

      onChangeHandler(event) {
        const stateName = event.target.name;
        const newValue = event.target.value;
        this.setState({
          [stateName]: newValue // `${stateName}`: newValue
        });
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
                <CardPreview fullName={this.state.fullName} job={this.state.job}>
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

        /*
        console.log(data)
        console.log(id)
        this.setState((prevState, props) => {
          let newName = prevState.name;
          let newJob = prevState.job;
          if (id === 'fullName') {
            newName = data;
          } else if (id === 'job') {
            newJob = data;
          } else {
            console.log(`onChangeHandler(id=${id}) valor no está considerado`)
          }
          return { 
            name: newName, 
            job: newJob };
        });*/
      