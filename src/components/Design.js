import React from 'react';
import Palette from './Palettes';
//import Collapsibles from './Collapsibles';

function Design (){
        return (
            <section className="forms__section design">
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


export default Design;