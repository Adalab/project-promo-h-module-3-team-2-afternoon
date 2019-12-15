import React from 'react';

class Fill extends React.Component{
    render(){
        return (
            <section className="forms__section fill">
                <div className="form-top" id="form-top-fill">
                    <h2><i className="far fa-keyboard"></i> Rellena</h2>
                    <div className="form-arrow arrow-down" id="arrow-fill"><i className="fas fa-chevron-down"></i></div>
                </div>
                <div className="form-bottom" id="form-bottom-fill">
                    <ul>
                        <li className="FullName">
                            <label htmlFor="FullName">Nombre completo<span>*</span></label>
                            <input placeholder="Ej: Sally Hill" id="fullName" type="text" name="FullName" required/>
                        </li>
                        <li className="job">
                            <label htmlFor="job">Puesto<span>*</span></label>
                            <input placeholder="Ej: Front-End unicorn" id="job" type="text" name="job" required/>
                        </li>
                        <li className="profile-picture">
                            <label htmlFor="image"> Imagen de perfil<span>*</span></label>
                            <input id="image-input" type="file" name="image" className="hidden js__profile-upload-btn"
                            required/>
                            <div className="profile-picture__upload">
                                <button type="button" className="btn-upload js__profile-trigger">Añadir imagen</button>
                                <div className="thumbnail js__profile-preview"></div>
                            </div>
                            <p id="error-image" className="text-error hidden">Sube una imagen.</p>
                        </li>
                        <li className="email">
                            <label htmlFor="email">Email<span>*</span></label>
                            <input placeholder="Ej: sally-hill@gmail.com" id="email" type="email" name="email" required/>
                            <p id="error-email" className="text-error hidden">Introduce un email válido.</p>
                        </li>
                        <li className="telf">
                            <label htmlFor="phone">Teléfono</label>
                            <input placeholder="Ej: 555-55-55-55" id="phone" type="tel" name="phone" required/>
                            <p id="error-phone" className="text-error hidden">Introduce un teléfono válido.</p>
                        </li>
                        <li className="linkedin">
                            <label htmlFor="linkedin">Linkedin<span>*</span></label>
                            <input placeholder="sally-hill" id="linkedin" type="text" name="linkedin" required/>
                            <p id="error-linkedin" className="text-error hidden">Introduce tu nombre de usuario de Linkedin sin @.</p>
                        </li>
                        <li className="github">
                            <label htmlFor="github">Github<span>*</span></label>
                            <input placeholder="sally-hill" id="github" type="text" name="github" required/>
                            <p id="error-github" className="text-error hidden">Introduce tu nombre de usuario de Github sin @.</p>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Fill;