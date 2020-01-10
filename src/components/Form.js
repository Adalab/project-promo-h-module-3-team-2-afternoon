import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Design from './Design';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

class Form extends React.Component {


  render() {
    const {
      handleOpenAccordion,
      onChangeHandler,
      palette,
      fullName,
      job,
      email,
      phone,
      linkedin,
      github,
      children,
      nameError,
      jobError,
      phoneError,
      emailError,
      linkedinError,
      githubError,
      onSubmitHandler,
      buttonIsDisabled,
      errorMessage,
      linkCreateCard,
      linkShareTwitter
    } = this.props

    return (
      <section className="forms">
        <div className="section-wrapper">
          <form action="" method="POST" id="card__form" onSubmit={this.onSubmitHandler}>
            <Accordion>
              <AccordionItem name="design" title="Diseña" icon="far fa-object-ungroup" handleOpenAccordion={handleOpenAccordion} openName={this.props.openName}>
                <Design onChangeHandler={onChangeHandler} palette={palette} />
              </AccordionItem>
              <AccordionItem name="fill" title="Rellena" icon="far fa-keyboard" handleOpenAccordion={handleOpenAccordion} openName={this.props.openName}>
                <Fill
                  fullName={fullName}
                  job={job}
                  email={email}
                  phone={phone}
                  linkedin={linkedin}
                  github={github}
                  nameError={nameError}
                  jobError={jobError}
                  emailError={emailError}
                  phoneError={phoneError}
                  linkedinError={linkedinError}
                  githubError={githubError}
                  onChangeHandler={onChangeHandler}>
                  {children}
                </Fill>
              </AccordionItem>
              <AccordionItem name="share" title="Comparte" icon="fas fa-share-alt" handleOpenAccordion={handleOpenAccordion} openName={this.props.openName}>
                <Share
                  onSubmitHandler={onSubmitHandler}
                  buttonIsDisabled={buttonIsDisabled}
                  errorMessage={errorMessage}
                  linkCreateCard={linkCreateCard}
                  linkShareTwitter={linkShareTwitter}>
                </Share>

              </AccordionItem>
            </Accordion>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
