import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Design from './Design';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accordionOpen: ''
    };
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
  }
  
  render() {
    const accordionOpen = this.state.accordionOpen;

    return (
      <section className="forms">
        <div className="section-wrapper">
          <form action="" method="POST" id="card__form" onSubmit={this.onSubmitHandler}>
            <Accordion>
              <AccordionItem name="design" title="Diseña" icon="far fa-object-ungroup" handleOpenAccordion={this.handleOpenAccordion} openName={accordionOpen}>
                <Design onChangeHandler={this.props.onChangeHandler}/>
              </AccordionItem>
              <AccordionItem name="fill" title="Rellena" icon="far fa-keyboard" handleOpenAccordion={this.handleOpenAccordion} openName={accordionOpen}>
                <Fill 
                fullName = {this.props.fullName}
                job = {this.props.job}
                email = {this.props.email}
                phone = {this.props.phone}
                linkedin = {this.props.linkedin}
                github = {this.props.github}
                emailError = {this.props.emailError}
                phoneError = {this.props.phoneError}
                onChangeHandler = {this.props.onChangeHandler}>
                  {this.props.children}
                </Fill>
              </AccordionItem>
              <AccordionItem name="share" title="Comparte" icon="fas fa-share-alt" handleOpenAccordion={this.handleOpenAccordion} openName={accordionOpen}>
                <Share
                onSubmitHandler={this.props.onSubmitHandler}
                buttonIsDisabled={this.props.buttonIsDisabled}
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
