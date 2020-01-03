import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import defaultImage from './defaultImage';
//import { LocalFetch } from '../services/LocalFetch';

class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          palette: 1,
          fullName: '',
          job: '',
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage},
          phone: '',
          email: '',
          linkedin: '',
          github: '',
          emailError: '',
          phoneError: '',
          buttonIsDisabled: true,
          // userData: {
          //   palette: '',
          //   fullName: '',
          //   job: '',
          //   photo: '',
          //   phone: '',
          //   email: '',
          //   linkedin: '',
          //   github: ''
          // }

        };
        console.log(this.state.buttonIsDisabled)

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.updateAvatar = this.updateAvatar.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.saveData = this.saveData.bind(this);
      }

      // componentDidMount(){
      //   this.getData();
      // }

     
      componentDidMount(){
      //getData() {
        //const itemData = JSON.parse(localStorage.getItem('userData'));
        const itemPalette = JSON.parse(localStorage.getItem('palette'));
        const itemName = JSON.parse(localStorage.getItem('fullName'));
        const itemJob = JSON.parse(localStorage.getItem('job'));
        const itemEmail = JSON.parse(localStorage.getItem('email'));
        const itemPhone = JSON.parse(localStorage.getItem('phone'));
        const itemLinkedin = JSON.parse(localStorage.getItem('linkedin'));
        const itemGithub = JSON.parse(localStorage.getItem('github'));
        const itemProfile = JSON.parse(localStorage.getItem('profile'));

        // if (itemData !== null) {
        //   this.setState({
        //     userData: itemData,
        //     isAvatarDefault: itemData.photo ? false : true
        //   });
        // }
        if (itemName !== null) {
          this.setState({
            fullName: itemName,
          })
        }
        if (itemJob !== null) {
          this.setState({
            job: itemJob,
          })
        }
        if (itemPalette !== null) {
          this.setState({
            palette: itemPalette,
          })
        }
        if (itemEmail !== null) {
          this.setState({
            email: itemEmail,
          })
        }
        if (itemPhone !== null) {
          this.setState({
            phone: itemPhone,
          })
        }
        if (itemLinkedin !== null) {
          this.setState({
            linkedin: itemLinkedin,
          })
        }
        if (itemGithub !== null) {
          this.setState({
            github: itemGithub,
          })
        }
        if (itemProfile !== null) {
          this.setState({
            profile: itemProfile,
          })
        }
          // if (getItem.photo !== null) {
          //   this.setState({
          //     isAvatarDefault: true
          //   });
          // }
        
      }

      saveData() {
        //localStorage.setItem('userData', JSON.stringify(this.state.userData));
        localStorage.setItem('palette', JSON.stringify(this.state.palette));
        localStorage.setItem('fullName', JSON.stringify(this.state.fullName));
        localStorage.setItem('job', JSON.stringify(this.state.job));
        localStorage.setItem('phone', JSON.stringify(this.state.phone));
        localStorage.setItem('email', JSON.stringify(this.state.email));
        localStorage.setItem('linkedin', JSON.stringify(this.state.linkedin));
        localStorage.setItem('github', JSON.stringify(this.state.github));
        localStorage.setItem('profile', JSON.stringify(this.state.profile));
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
          github: '',
        });
        localStorage.removeItem('fullName');
        localStorage.removeItem('job');
        localStorage.removeItem('palette');
        localStorage.removeItem('phone');
        localStorage.removeItem('email');
        localStorage.removeItem('linkedin');
        localStorage.removeItem('github');
        localStorage.removeItem('profile');
      }

      onChangeHandler(event) {
        const stateName = event.target.name;
        const newValue = event.target.value;
        this.setState({
          [stateName]: newValue // `${stateName}`: newValue
        }
        );
        //console.log(this.state.fullName)
      }
      onSubmitHandler (event) {
        console.log('holi')
        event.preventDefault()
        this.validationHandler()
        this.saveData()
      }
      validationHandler = () => {
         if (!this.validationTextInput() || !this.validationEmail() || !this.validationPhone()){
           this.setState({buttonIsDisabled: true})
         } else {
          this.setState({buttonIsDisabled: false})
         }
      }
      validationTextInput = () => {
        if (!this.state.fullName || !this.state.job || !this.state.linkedin || !this.state.github){
          return false
        } else {
          return true
        }
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
                  onSubmitHandler={this.onSubmitHandler}
                  buttonIsDisabled={this.state.buttonIsDisabled}>
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
