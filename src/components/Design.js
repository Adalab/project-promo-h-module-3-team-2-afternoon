import React from 'react';
import Palette from './Palettes';

function Design () {
    return (
        <section className="design">
            <p>Colores</p>
            <ul>
                <li className="select-palette palette-1">
                    <Palette inputValue="1"/>
               </li>
                <li className="select-palette palette-2">
                    <Palette inputValue="2"/>
                </li>
                <li className="select-palette palette-3">
                    <Palette inputValue="3"/>
                </li>
            </ul>
        </section>
    )
}

export default Design;
