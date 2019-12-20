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
          <form action="" method="POST" id="card__form">
            <Accordion>
              <AccordionItem name="design" title="Diseña" icon="far fa-object-ungroup" onExpande={this.handleOpenAccordion} openName={accordionOpen}>
                <Design/>
              </AccordionItem>
              <AccordionItem name="fill" title="Rellena" icon="far fa-keyboard" onExpande={this.handleOpenAccordion} openName={accordionOpen}>
                <Fill onChangeHandler = {this.onChangeHandler}/>
              </AccordionItem>
              <AccordionItem name="share" title="Comparte" icon="fas fa-share-alt" onExpande={this.handleOpenAccordion} openName={accordionOpen}>
                <Share/>
              </AccordionItem>
            </Accordion>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
