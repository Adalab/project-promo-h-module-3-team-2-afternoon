import React from 'react';
import Palette from './Palettes';

class Design extends React.Component {

    render() {
        const {
            onChangeHandler,
            palette,
        } = this.props

        return (
            <section className="design">
                <p>Colores</p>
                <ul>
                    <li className="select-palette palette-1">
                        <Palette onChangeHandler={onChangeHandler} inputValue="1" checked={palette === '1'} />
                    </li>
                    <li className="select-palette palette-2">
                        <Palette onChangeHandler={onChangeHandler} inputValue="2" checked={palette === '2'} />
                    </li>
                    <li className="select-palette palette-3">
                        <Palette onChangeHandler={onChangeHandler} inputValue="3" checked={palette === '3'} />
                    </li>
                </ul>
            </section>
        )
    }
}

export default Design;
