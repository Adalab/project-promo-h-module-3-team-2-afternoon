import React from 'react';
import ErrorMessage from './Error-message';
import Buttons from "./Buttons";


class Fill extends React.Component{
    constructor(props){
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler = event =>{
        this.props.onChangeHandler(event.target.value)
    }
    render(){
        return (
            <section className="forms__section fill">
                <div className="form-bottom" id="form-bottom-fill">
                    <ul>
                        <li className="FullName">
                            <label htmlFor="FullName">Nombre completo<span>*</span></label>
                            <input onChange={this.onChangeHandler} placeholder="Ej: Sally Hill" id="fullName" type="text" name="FullName" required/>
                        </li>
                        <li className="job">
                            <label htmlFor="job">Puesto<span>*</span></label>
                            <input onChange={this.onChangeHandler} placeholder="Ej: Front-End unicorn" id="job" type="text" name="job" required/>
                        </li>
                        <li className="profile-picture">
                            <label htmlFor="image"> Imagen de perfil<span>*</span></label>
                            {this.props.children}
                            <ErrorMessage id="error-image" errorText = 'Sube una imagen.'/>
                        </li>
                        <li className="email">
                            <label htmlFor="email">Email<span>*</span></label>
                            <input onChange={this.onChangeHandler} placeholder="Ej: sally-hill@gmail.com" id="email" type="email" name="email" required/>
                            <ErrorMessage id="error-email" errorText = 'Introduce un email válido.'/>
                        </li>
                        <li className="tel">
                            <label htmlFor="phone">Teléfono</label>
                            <input onChange={this.onChangeHandler} placeholder="Ej: 555-55-55-55" id="phone" type="tel" name="phone" required/>
                            <ErrorMessage id="error-phone" errorText = 'Introduce un teléfono válido.'/>
                        </li>
                        <li className="linkedin">
                            <label htmlFor="linkedin">Linkedin<span>*</span></label>
                            <input onChange={this.onChangeHandler} placeholder="sally-hill" id="linkedin" type="text" name="linkedin" required/>
                            <ErrorMessage id="error-linkedin" errorText = 'Introduce tu nombre de usuario de Linkedin sin @.'/>
                        </li>
                        <li className="github">
                            <label htmlFor="github">Github<span>*</span></label>
                            <input onChange={this.onChangeHandler} placeholder="sally-hill" id="github" type="text" name="github" required/>
                            <ErrorMessage id="error-github" errorText = 'Introduce tu nombre de usuario de Github sin @.'/>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Fill;

/*             <div className="form-top" id="form-top-fill">
                    <h2><i className="far fa-keyboard"></i> Rellena</h2>
                    <div className="form-arrow arrow-down" id="arrow-fill"><i className="fas fa-chevron-down"></i></div>
                </div>*/
                