import React from 'react';
import Palette from './Palettes';

class Design extends React.Component{ 
      
render(){
    return (
        <section className="design">
            <p>Colores</p>
            <ul>
                <li className="select-palette palette-1">
                    <Palette onChangeHandler={this.props.onChangeHandler} inputValue="1" checked={this.props.palette === 1 ? true : false} />
               </li>
                <li className="select-palette palette-2">
                    <Palette onChangeHandler={this.props.onChangeHandler} inputValue="2" checked={this.props.palette === '2'}/>
                </li>
                <li className="select-palette palette-3">
                    <Palette onChangeHandler={this.props.onChangeHandler} inputValue="3" checked={this.props.palette === '3'}/>
                </li>
            </ul>
        </section>
    )}
}

export default Design;
