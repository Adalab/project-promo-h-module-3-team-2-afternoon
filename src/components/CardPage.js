import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
//import { Accordion, AccordionItem } from 'react-sanfona';

class CardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      color: 1
    }
    this.onChangeHandlerColor = this.onChangeHandlerColor.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(data, id){
    console.log(data)
    console.log(id)
    this.setState((prevState, props) => {
      let newName = prevState.name;
      let newJob = prevState.job;
      if (id === 'fullName') {
        newName = data;
      } else if (id === 'job') {
        newJob = data;
      } else {
        console.log(`onChangeHandler(id=${id}) valor no está considerado`)
      }
      return { 
        name: newName, 
        job: newJob };
    });
  }

  onChangeHandlerColor(_event, id){
    console.log('hola')
    this.setState((prevState, props) => {
      let newColor = prevState.color;
      if (id === 'Palette1') {
        newColor = 1;
      } else if (id === 'Palette2') {
        newColor = 2;
      } else if (id === 'Palette3') {
        newColor = 3;
      } else {
        newColor = 1;
      }
      return { 
        color: newColor, };
    });
  }
    /*this.setState({color: this.props.inputValue}, this.palettes);
    event.preventDefault();
    console.log(`Seleccionaste ${this.state.color}`)
    }*/

  render(data) {
    return (
      <div>
        <Header />
        <main className="main__card">
        <CardPreview name={this.state.name} job={this.state.job} color={this.state.color}/>
        <Form onChangeHandler={this.onChangeHandler} onChangeColor={this.onChangeHandlerColor} color={this.state.color}/>
        </main>
        <Footer />
      </div>
      

    );
  }
}

export default CardPage;
// import React from 'react';
// import './scss/main.scss';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Form from './components/Form'
// import CardPreview from './components/CardPreview';
// import { Accordion, AccordionItem } from 'react-sanfona';

// class App extends React.Component {
//   onChangeHandler(data){
//     console.log(data)
//   }
//   render(data) {
//     return (
//       <div>
//         <Header />
//         <main className="main__card">
//         <CardPreview cardPreviewName={data}/>
//         <Form onChangeHandler={this.onChangeHandler}/>
//         </main>
//         <Footer />
//       </div>


//     );
//   }
// }


