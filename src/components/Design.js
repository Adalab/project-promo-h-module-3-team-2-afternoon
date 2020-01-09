import React from 'react';
import Palette from './Palettes';

class Design extends React.Component{ 
      
render(){
    return (
        <section className="design">
            <p>Colores</p>
            <ul>
                <li className="select-palette palette-1">
                    <Palette onChangeHandler={this.props.onChangeHandler} inputValue="1" checked="checked"/>
               </li>
               {/* checked={props.inputValue.1.indexOf(‘patinar’) !== -1} */}
                <li className="select-palette palette-2">
                    <Palette onChangeHandler={this.props.onChangeHandler} inputValue="2"/>
                </li>
                <li className="select-palette palette-3">
                    <Palette onChangeHandler={this.props.onChangeHandler} inputValue="3"/>
                </li>
            </ul>
        </section>
    )}
}

export default Design;
