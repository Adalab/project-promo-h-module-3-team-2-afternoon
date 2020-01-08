import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import defaultImage from './defaultImage';
import { LocalFetch } from '../services/LocalFetch';
import { create } from 'domain';


class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
          nameError: '',
          jobError: '',
          emailError: '',
          phoneError: '',
          linkedinError: '',
          githubError: '',
          errorMessage: '',
          buttonIsDisabled: true,
          accordionOpen: ''

        };
        console.log(this.state.buttonIsDisabled)

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.updateAvatar = this.updateAvatar.bind(this);
        this.validationHandler = this.validationHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this);
        this.saveData = this.saveData.bind(this);
        this.createObject = this.createObject.bind(this)
        this.showURL = this.showURL.bind(this)
        //this.getData = this.getData.bind(this);
      }

      showURL(data) {
        console.log('holi');

        const cardLink = document.querySelector('.card-link')
        const twitterButton = document.querySelector('.twitter-share')
        if(data.success) {
          cardLink.innerHTML = `<a class="twitter-url" href=${data.cardURL} target="_blank">${data.cardURL}</a>`
          //twitterButton.style.href = `${data.cardURL}`;
          //twitterLink()
        }
      }
     
      componentDidMount(){
        
        const itemPalette = JSON.parse(localStorage.getItem('palette'));
        const itemName = JSON.parse(localStorage.getItem('fullName'));
        const itemJob = JSON.parse(localStorage.getItem('job'));
        const itemEmail = JSON.parse(localStorage.getItem('email'));
        const itemPhone = JSON.parse(localStorage.getItem('phone'));
        const itemLinkedin = JSON.parse(localStorage.getItem('linkedin'));
        const itemGithub = JSON.parse(localStorage.getItem('github'));
        const itemProfile = JSON.parse(localStorage.getItem('profile'));

  
        if (itemName !== null) {
          this.setState({fullName : itemName },
          this.validationName)
         
        }
        if (itemJob !== null) {
          this.setState({
            job: itemJob
          },
          this.validationJob)
        }
        if (itemPalette !== null) {
          this.setState({
            palette: itemPalette,
          })
        }
        if (itemEmail !== null) {
          this.setState({
            email: itemEmail
          },
          this.validationEmail)
        }
        if (itemPhone !== null) {
          this.setState({
            phone: itemPhone
          },
          this.validationPhone)
        }
        if (itemLinkedin !== null) {
          this.setState({
            linkedin: itemLinkedin
          },
          this.validationLinkedIn)
        }
        if (itemGithub !== null) {
          this.setState({
            github: itemGithub,
          },
          this.validationGitHub)
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
        console.log(this.state.fullName)
        console.log(itemName)
      }
      
      saveData() {
        localStorage.setItem('palette', JSON.stringify(this.state.palette));
        localStorage.setItem('fullName', JSON.stringify(this.state.fullName));
        localStorage.setItem('job', JSON.stringify(this.state.job));
        localStorage.setItem('phone', JSON.stringify(this.state.phone));
        localStorage.setItem('email', JSON.stringify(this.state.email));
        localStorage.setItem('linkedin', JSON.stringify(this.state.linkedin));
        localStorage.setItem('github', JSON.stringify(this.state.github));
        localStorage.setItem('profile', JSON.stringify(this.state.profile));
        this.createObject()
      }
      createObject (){
        const userData = {
          palette: this.state.palette,
          name: this.state.fullName,
          job: this.state.job,
          phone: this.state.phone,
          email: this.state.email,
          linkedin: this.state.linkedin,
          github: this.state.github,
          photo: this.state.profile.avatar
        }
        return userData;
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

      LocalFetch(objectData) {
        LocalFetch(objectData)
        .then(data => this.showURL(data))
        .catch(function (error) { console.log(error)})
      }

      onChangeHandler(event) {
        this.saveData()
        const stateName = event.target.name;
        const newValue = event.target.value;
        this.setState({
          [stateName]: newValue 
        }
        );
        this.validationHandler(event)
        //console.log(this.state.fullName)
      }
      onSubmitHandler (event) {
        event.preventDefault()
        //this.validationHandler()
        const objectData = this.createObject()
        console.log(objectData);

        this.LocalFetch(objectData);
      }
      validationHandler = event => {
        if (event.target.name==='fullName'){
          this.validationName();
        } else if (event.target.name==='job'){
          this.validationJob();
        } else if (event.target.name==='email'){
          this.validationEmail();
        } else if (event.target.name==='phone'){
          this.validationPhone();
        } else if (event.target.name==='linkedin'){
          this.validationLinkedIn();
        }else if (event.target.name==='github'){
          this.validationGitHub();
        }
        
        console.log(this.state.buttonIsDisabled);
         if (!this.validationName() || !this.validationJob() || !this.validationEmail() || !this.validationPhone() || !this.validationLinkedIn() || !this.validationGitHub()){
           this.setState({
             buttonIsDisabled: true,
             errorMessage: 'Por favor, revisa los campos marcados en rojo.'})
           return false
         } else {
          this.setState({
            buttonIsDisabled: false,
            errorMessage: ''})
          return true
         }
      }
      validationName = () => {
        if (this.state.fullName==='' || !this.state.fullName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)){
          this.setState({
            nameError: 'Introduzca un nombre válido'
          })
          return false
        } else {
          this.setState({
            nameError: ''
          })
          return true
        }
      }
      validationJob = () => {
        if (this.state.job==='' || !this.state.job.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)){
          this.setState({
            jobError: 'Introduzca un puesto válido'
          })
          return false
        } else {
          this.setState({
            jobError: ''
          })
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
            phoneError: 'Introduzca un teléfono válido.'
          })
          return false
        } else {
          this.setState({
            phoneError: ''
          })
          return true
        }
      }
      validationLinkedIn = () => {
        if (!this.state.linkedin){
          this.setState({
            linkedinError: 'Introduzca un nombre de usuario válido'
          })
          return false
        } else {
          this.setState({
            linkedinError: ''
          })
          return true
        }
      }
      validationGitHub = () => {
        if (!this.state.github){
          this.setState({
            githubError: 'Introduzca un nombre de usuario válido'
          })
          return false
        } else {
          this.setState({
            githubError: ''
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
                  nameError = {this.state.nameError}
                  jobError = {this.state.jobError}
                  emailError = {this.state.emailError}
                  phoneError = {this.state.phoneError}
                  linkedinError = {this.state.linkedinError}
                  githubError = {this.state.githubError}
                  onChangeHandler={this.onChangeHandler}
                  onSubmitHandler={this.onSubmitHandler}
                  buttonIsDisabled={this.state.buttonIsDisabled}
                  errorMessage = {this.state.errorMessage}
                  >
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
