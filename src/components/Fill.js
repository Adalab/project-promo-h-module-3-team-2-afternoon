import React from 'react';
import ErrorMessage from './Error-message';

class Fill extends React.Component {

    onChangeHandler = event => {
        this.props.onChangeHandler(event);
    }

    render() {
        const {
            fullName,
            nameError,
            job,
            jobError,
            children,
            email,
            emailError,
            phone,
            phoneError,
            linkedin,
            linkedinError,
            github,
            githubError
        } = this.props

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
                            value={fullName}
                            required />
                        <ErrorMessage errorMessage={nameError} />
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
                            value={job}
                            required />
                        <ErrorMessage errorMessage={jobError} />

                    </li>
                    <li className="profile-picture">
                        <label htmlFor="image"> Imagen de perfil<span>*</span></label>
                        {children}
                        <ErrorMessage className='hidden' id="error-image" />
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
                            value={email}
                            required />
                        <ErrorMessage id="error-email" errorMessage={emailError} />
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
                            value={phone}
                            required />
                        <ErrorMessage id="error-phone" errorMessage={phoneError} />
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
                            value={linkedin}
                            required />
                        <ErrorMessage errorMessage={linkedinError} />

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
                            value={github}
                            required />
                        <ErrorMessage errorMessage={githubError} />

                    </li>
                </ul>
            </section>
        )
    }
}
export default Fill;
