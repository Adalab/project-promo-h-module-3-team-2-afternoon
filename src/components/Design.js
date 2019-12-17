import React from 'react';
import Collapsibles from "./Collapsibles";

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
                            <input id="palette1" type="radio" name="palettes" value="1" />
                            <label className="palette" htmlFor="palette1">
                                <div className="palette__color color-1"></div>
                                <div className="palette__color color-2"></div>
                                <div className="palette__color color-3"></div>
                            </label>
                        </li>
                        <li className="select-palette palette-2">
                            <input id="palette2" type="radio" name="palettes" value="2"/>
                            <label className="palette" htmlFor="palette2">
                                <div className="palette__color color-1"></div>
                                <div className="palette__color color-2"></div>
                                <div className="palette__color color-3"></div>
                            </label>
                        </li>
                        <li className="select-palette palette-3">
                            <input id="palette3" type="radio" name="palettes" value="3"/>
                            <label className="palette" htmlFor="palette3">
                                <div className="palette__color color-1"></div>
                                <div className="palette__color color-2"></div>
                                <div className="palette__color color-3"></div>
                            </label>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Design;