import React from 'react';

class Palette extends React.Component{
    render(){
        return (
            <React.Fragment>
                <input id={`palette${this.props.inputValue}`} type="radio" name="palettes" value={this.props.inputValue} />
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