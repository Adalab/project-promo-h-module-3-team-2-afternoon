import React from 'react';

class Palette extends React.Component {

    render() {
        return (
            <React.Fragment>
                <input onChange={this.props.onChangeHandler} id={`palette${this.props.inputValue}`} type="radio" name="palette" value={this.props.inputValue}  checked={this.props.checked}/>
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