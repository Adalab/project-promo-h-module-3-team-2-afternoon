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
          name: '',
          job: '',
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage
          }
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
      }
      onChangeHandler(data, id){
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
                    <CardPreview name={this.state.name} job={this.state.job}>
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
// import React from 'react';
// import './scss/main.scss';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Form from './components/Form'
// import CardPreview from './components/CardPreview';
// import { Accordion, AccordionItem } from 'react-sanfona';

// class App extends React.Component {
//   onChangeHandler(data){
//     console.log(data)
//   }
//   render(data) {
//     return (
//       <div>
//         <Header />
//         <main className="main__card">
//         <CardPreview cardPreviewName={data}/>
//         <Form onChangeHandler={this.onChangeHandler}/>
//         </main>
//         <Footer />
//       </div>


//     );
//   }
// }


