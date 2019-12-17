import React from 'react';
import Palette from './Palettes';

class Design extends React.Component{
    render(){
        return (
            <section className="forms__section design">
                <div className="form-top" id="form-top-design">
                    <h2><i className="far fa-object-ungroup"></i> Diseña</h2>
                    <div className="form-arrow arrow-down form-arrow-collapse" id="arrow-design"><i className="fas fa-chevron-down"></i></div>
                </div>
                <div className="form-bottom form-bottom-collapse" id="form-bottom-design">
                    <p>Colores</p>
                    <ul>
                        <li className="select-palette  palette-1">
                            <Palette inputValue="1"/>
                        </li>
                        <li className="select-palette palette-2">
                            <Palette inputValue="2"/>
                        </li>
                        <li className="select-palette palette-3">
                            <Palette inputValue="3"/>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Design;