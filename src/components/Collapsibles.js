import React from 'react';
//import Design from "./Design";

class Collapsibles extends React.Component {
  constructor(props){
  super(props);
  this.state = {
  open: false
  }
  this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e){
  this.setState({open: !this.state.open})
  }
  render() {
    const mainClassName =
      this.state.open === false ? "js-collapsible__content" : "";
  return ( <div className={this.props.sectionName}>
    <div
      className="container__title js-collapsible__trigger"
      onClick={this.handleCollapsableClick}
    >
      <div className="title__items">
        <div>
          <i className={`title__items__ico ${this.props.icon}`}></i>
        </div>
        <h2 className="title">{this.props.sectionName}</h2>
      </div>
      <div className="js-ico">
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
    <div className={`${mainClassName} content`}>{this.props.children}</div>
  </div>);
  }
  }

export default Collapsibles;