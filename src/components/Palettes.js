import React from 'react';

class Palette extends React.Component{
    constructor(props){
        super(props);
        this.onChangeHandlerColor = this.onChangeHandlerColor.bind(this);
        //this.onChangeHandler2 = this.onChangeHandler2.bind(this);
        this.state = {
            color: '1'
        }
    }

    onChangeHandlerColor = (event, props) =>{
        this.setState({color: this.props.inputValue}, this.palettes);
        event.preventDefault();
        }

    render(){
        console.log(`Seleccionaste ${this.state.color}`)
        return (
            <React.Fragment>
                <input onChange={this.onChangeHandlerColor} id={`palette${this.props.inputValue}`} type="radio" name="palettes" value={this.props.inputValue} />
                <label className="palette" htmlFor={`palette${this.props.inputValue}`}>
                    <div className="palette__color color-1"></div>
                    <div className="palette__color color-2"></div>
                    <div className="palette__color color-3"></div>
                </label>
            </React.Fragment>
        )
    }
}
export default Palette;