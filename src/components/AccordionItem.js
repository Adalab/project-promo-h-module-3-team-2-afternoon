import React from 'react';

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleHandler = () => {
    const name = this.props.name;
    const onExpande = this.props.handleOpenAccordion;

    onExpande(name);
  }

  render() {
    const open = this.props.name === this.props.openName; //devuelve valor true o false
    const contentClass = 'form-bottom' + (open ? ' form-bottom-open' : '');
    const iconClass = 'form-arrow' + (open ? ' form-arrow-rotate' : '');

    return (
      <section className="forms__section">
        <div className="form-top" onClick={this.toggleHandler}>
          <h2><i className={this.props.icon}></i> {this.props.title}</h2>
          <div className={iconClass}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className={contentClass}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default AccordionItem;