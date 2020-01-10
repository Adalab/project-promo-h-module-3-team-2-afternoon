import React from 'react';

class Palette extends React.Component {

    render() {
        const {
            onChangeHandler,
            inputValue,
            checked
        } = this.props
        return (
            <React.Fragment>
                <input onChange={onChangeHandler} id={`palette${inputValue}`} type="radio" name="palette" value={inputValue} checked={checked} />
                <label className="palette" htmlFor={`palette${inputValue}`}>
                    <div className="palette__color color-1"></div>
                    <div className="palette__color color-2"></div>
                    <div className="palette__color color-3"></div>
                </label>
            </React.Fragment>
        )
    }
}
export default Palette;