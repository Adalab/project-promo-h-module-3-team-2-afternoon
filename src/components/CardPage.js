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
          linkCreateCard: '',
          linkShareTwitter: '',
          accordionOpen: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.updateAvatar = this.updateAvatar.bind(this);
        this.validationHandler = this.validationHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this);
        this.saveData = this.saveData.bind(this);
        this.createObject = this.createObject.bind(this)
        this.showURL = this.showURL.bind(this)
        this.handleOpenAccordion = this.handleOpenAccordion.bind(this)
      }

      showURL(data) {
        
        if(data.success) {
          const urlTwitter = encodeURIComponent('¡Acabo de crear esta tarjeta profesional con Awesome Profile Cards!');
          const hastag = encodeURIComponent('adalab,adalaber,frontend,development,profile');
          this.setState({
            linkCreateCard: data.cardURL,
            linkShareTwitter: `https://twitter.com/intent/tweet?text=${urlTwitter}&url=${data.cardURL}&hashtags=${hastag}`})
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
        const paletteDefault = "1";
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
            palette: itemPalette 
          }) 
        } else {
          this.setState({
            palette: paletteDefault
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
            profile: itemProfile
          })
        }
      }
      
      saveData() {
        localStorage.setItem('palette', JSON.stringify(this.state.palette));
        localStorage.setItem('fullName', JSON.stringify(this.state.fullName));
        localStorage.setItem('job', JSON.stringify(this.state.job));
        localStorage.setItem('phone', JSON.stringify(this.state.phone));
        localStorage.setItem('email', JSON.stringify(this.state.email));
        localStorage.setItem('linkedin', JSON.stringify(this.state.linkedin));
        localStorage.setItem('github', JSON.stringify(this.state.github));
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
        const paletteDefault = "1";
        this.setState({
          palette: paletteDefault,
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
          linkCreateCard: '',
          buttonIsDisabled: true,
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
        const stateName = event.target.name;
        const newValue = event.target.value;
        if (stateName==='fullName'){
          this.validationName()
        }
        if (stateName==='job'){
          this.validationJob()
        }
        if (stateName==='email'){
          this.validationEmail()
        }
        if (stateName==='phone'){
          this.validationPhone()
        }
        if (stateName==='linkedin'){
          this.validationLinkedIn()
        }
        if (stateName==='github'){
          this.validationGitHub()
        }
        this.setState({
          [stateName]: newValue 
        });
        this.saveData()
      }
      validationName () {
        if (!this.state.fullName || !this.state.fullName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)){
          this.setState({
            nameError: 'Introduzca un nombre válido'
          })
        } else {
          this.setState({
            nameError: ''
          })
        }  
      }
      validationJob () {
        if (!this.state.job || !this.state.job.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)){
          this.setState({
            jobError: 'Introduzca un puesto válido'
          })
        } else {
          this.setState({
            jobError: ''
          })
        }  
      }
      validationEmail = () => {
        if (!this.state.email || !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
          this.setState({
            emailError: 'Introduce un email válido.'
          })
        } else {
          this.setState({
            emailError: ''
          })
        }
      }
      validationPhone = () => {
        if (this.state.phone && !this.state.phone.match(/^[0-9]{9}/)){
          this.setState({
            phoneError: 'Introduzca un teléfono válido.'
          })
        } else {
          this.setState({
            phoneError: ''
          })
        }
      }
      validationLinkedIn = () => {
        if (!this.state.linkedin){
          this.setState({
            linkedinError: 'Introduzca un nombre de usuario válido'
          })
        } else {
          this.setState({
            linkedinError: ''
          })

        }
      }
      validationGitHub = () => {
        if (!this.state.github){
          this.setState({
            githubError: 'Introduzca un nombre de usuario válido'
          })
        } else {
          this.setState({
            githubError: ''
          })
        }
      }
      onSubmitHandler (event) {
        event.preventDefault()
        const objectData = this.createObject()
        this.LocalFetch(objectData);
      }
      validationHandler = () => {
        this.validationName()
        this.validationJob()
        this.validationEmail()
        this.validationPhone()
        this.validationLinkedIn()
        this.validationGitHub()
         if (!this.state.fullName || this.state.nameError || !this.state.job || this.state.jobError || !this.state.email || this.state.emailError || this.state.phoneError || !this.state.linkedin || this.state.linkedinError || !this.state.github || this.state.githubError){
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
      
      
      
    updateAvatar(img) {
        const {profile} = this.state;
        this.setState(prevState => {
          const newProfile = {...profile, avatar: img};
          localStorage.setItem('profile', JSON.stringify(newProfile));
          return {
            profile: newProfile,
            isAvatarDefault: false
          }
        });
      }
      handleOpenAccordion = (name) => {
        if (this.state.accordionOpen === name) {
          this.setState({
            accordionOpen: ''
          });
        } else {
          this.setState({
            accordionOpen: name
          });
        }
        if (name==='share'){
        this.validationHandler()
        }
      }
    render() {
      const {profile, isAvatarDefault} = this.state;
      const accordionOpen = this.state.accordionOpen;

      return (
        <div>
            <Header />
            <main className="main__card">
                <CardPreview resetHandler={this.resetHandler} palette={this.state.palette} fullName={this.state.fullName} job={this.state.job} linkedin={this.state.linkedin} github={this.state.github} email={this.state.email} phone={this.state.phone} >
                <Profile avatar={profile.avatar} />
                </CardPreview>
                <Form
                  handleOpenAccordion={this.handleOpenAccordion} 
                  openName={accordionOpen}
                  palette = {this.state.palette}
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
                  linkCreateCard={this.state.linkCreateCard}
                  linkShareTwitter={this.state.linkShareTwitter}>
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

        
