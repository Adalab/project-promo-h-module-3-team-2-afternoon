import React from 'react';
import ErrorMessage from './Error-message';

class Fill extends React.Component{

    onChangeHandler = event => {
        this.props.onChangeHandler(event);
      }

    render(){
        return (
            <section className="fill">
                <ul>
                    <li className="FullName">
                        <label htmlFor="fullName">Nombre completo<span>*</span></label>
                        <input 
                        onChange={this.onChangeHandler}
                        onKeyUp={this.onChangeHandler}
                        placeholder="Ej: Sally Hill" 
                        id="fullName" 
                        type="text" 
                        name="fullName" 
                        value={this.props.fullName} 
                        required/>
                    </li>
                    <li className="job">
                        <label htmlFor="job">Puesto<span>*</span></label>
                        <input 
                        onChange={this.onChangeHandler}
                        onKeyUp={this.onChangeHandler} 
                        placeholder="Ej: Front-End unicorn" 
                        id="job" 
                        type="text" 
                        name="job" 
                        value={this.props.job} 
                        required/>
                    </li>
                    <li className="profile-picture">
                        <label htmlFor="image"> Imagen de perfil<span>*</span></label>
                        {this.props.children}
                        <ErrorMessage className='hidden' id="error-image" /*errorMessage = 'Sube una imagen.'*//>
                    </li>
                    <li className="email">
                        <label htmlFor="email">Email<span>*</span></label>
                        <input 
                        onChange={this.onChangeHandler} 
                        onKeyUp={this.onChangeHandler}
                        placeholder="Ej: sally-hill@gmail.com" 
                        id="email" 
                        type="email" 
                        name="email" 
                        value = {this.props.email}
                        required/>
                        <ErrorMessage id="error-email" errorMessage = {this.props.emailError}/>
                    </li>
                    <li className="tel">
                        <label htmlFor="phone">Teléfono</label>
                        <input 
                        onChange={this.onChangeHandler} 
                        onKeyUp={this.onChangeHandler}
                        placeholder="Ej: 754765873" 
                        id="phone" 
                        type="tel" 
                        name="phone" 
                        value = {this.props.phone}
                        required/>
                        <ErrorMessage id="error-phone" errorMessage = {this.props.phoneError}/>
                    </li>
                    <li className="linkedin">
                        <label htmlFor="linkedin">Linkedin<span>*</span></label>
                        <input 
                        onChange={this.onChangeHandler}
                        onKeyUp={this.onChangeHandler}
                        placeholder="sally-hill" 
                        id="linkedin" 
                        type="text" 
                        name="linkedin"
                        value = {this.props.linkedin} 
                        required/>
                        <ErrorMessage id="error-linkedin" /*errorMessage = 'Introduce tu nombre de usuario de Linkedin sin @.'*//>
                    </li>
                    <li className="github">
                        <label htmlFor="github">Github<span>*</span></label>
                        <input 
                        onChange={this.onChangeHandler} 
                        onKeyUp={this.onChangeHandler}
                        placeholder="sally-hill" 
                        id="github" 
                        type="text" 
                        name="github" 
                        value = {this.props.github}
                        required/>
                        <ErrorMessage id="error-github" /*errorMessage = 'Introduce tu nombre de usuario de Github sin @.'*//>
                    </li>
                </ul>
            </section>
        )
    }
}
export default Fill;
                