import React from 'react';

class Input extends React.Component{
    render(){
        return (
            <React.Fragment>
                <label htmlFor={this.props.for}>{this.props.label}</label>
                <input placeholder={this.props.placeholder} id={this.props.id} type={this.props.type} name={this.props.name} required={this.props.required}/>
            </React.Fragment>
        )
    }
}
export default Input;