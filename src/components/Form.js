import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Design from './Design';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

class Form extends React.Component {
  
  render() {

    return (
      <section className="forms">
        <div className="section-wrapper">
          <form action="" method="POST" id="card__form" onSubmit={this.onSubmitHandler}>
            <Accordion>
              <AccordionItem name="design" title="Diseña" icon="far fa-object-ungroup" handleOpenAccordion={this.props.handleOpenAccordion} openName={this.props.openName}>
                <Design onChangeHandler={this.props.onChangeHandler}/>
              </AccordionItem>
              <AccordionItem name="fill" title="Rellena" icon="far fa-keyboard" handleOpenAccordion={this.props.handleOpenAccordion} openName={this.props.openName}>
                <Fill 
                fullName = {this.props.fullName}
                job = {this.props.job}
                email = {this.props.email}
                phone = {this.props.phone}
                linkedin = {this.props.linkedin}
                github = {this.props.github}
                nameError = {this.props.nameError}
                jobError = {this.props.jobError}
                emailError = {this.props.emailError}
                phoneError = {this.props.phoneError}
                linkedinError = {this.props.linkedinError}
                githubError = {this.props.githubError}
                onChangeHandler = {this.props.onChangeHandler}>
                  {this.props.children}
                </Fill>
              </AccordionItem>
              <AccordionItem name="share" title="Comparte" icon="fas fa-share-alt" handleOpenAccordion={this.props.handleOpenAccordion} openName={this.props.openName}>
                <Share
                onChangeHandler={this.props.onChangeHandler}
                buttonIsDisabled={this.props.buttonIsDisabled}
                errorMessage = {this.props.errorMessage}
                />
              </AccordionItem>
            </Accordion>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
