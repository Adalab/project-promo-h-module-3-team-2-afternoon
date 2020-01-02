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
          userInfo : {
          palette: 1,
          fullName: '',
          job: '',
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage
          },
          phone: '',
          email: '',
          linkedin: '',
          github: '',
        },
          emailError: '',
          phoneError: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.updateAvatar = this.updateAvatar.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
      }

      resetHandler() {
        this.setState({
          palette: 1,
          fullName: '',
          job: '',
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage
          },
          phone: '',
          email: '',
          linkedin: '',
          github: ''
        });
        console.log('hola')
      }

      onChangeHandler(event) {
        const stateName = event.target.name;
        const newValue = event.target.value;
        this.setState({
          [stateName]: newValue // `${stateName}`: newValue
        },
        this.validationHandler
        );
        //console.log(this.state.fullName)
      }
      onSubmitHandler (event) {
        event.preventDefault()
        this.validationHandler()
      }
      validationHandler = () => {        
         this.validationEmail()
         this.validationPhone() 
      }
      validationEmail = () =>{
        if (this.state.email==='' || !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
          this.setState({
            emailError: 'Introduce un email válido.'
          })
          return false
        } else {
          this.setState({
            emailError: ''
          })
          return true
        }
      }
      validationPhone = () => {
        if (!this.state.phone.match(/^[0-9]{9}/)){
          this.setState({
            phoneError: 'Introduce un teléfono válido.'
          })
          return false
        } else {
          this.setState({
            phoneError: ''
          })
          return true
        }
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
        <div>
            <Header />
            <main className="main__card">
                <CardPreview resetHandler={this.resetHandler} palette={this.state.palette} fullName={this.state.fullName} job={this.state.job} linkedin={this.state.linkedin} github={this.state.github} email={this.state.email} phone={this.state.phone} >
                <Profile avatar={profile.avatar} />
                </CardPreview>
                <Form 
                  fullName = {this.state.fullName}
                  job = {this.state.job}
                  email = {this.state.email}
                  phone = {this.state.phone}
                  linkedin = {this.state.linkedin}
                  github = {this.state.github}
                  emailError = {this.state.emailError}
                  phoneError = {this.state.phoneError}
                  onChangeHandler={this.onChangeHandler}
                  onSubmitHandler={this.onSubmitHandler}>
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
      