import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import Fill from './Fill'
import CardPreview from './CardPreview';
//import { Accordion, AccordionItem } from 'react-sanfona';

class CardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: ''
    }
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
  render(data) {
    return (
      <div>
        <Header />
        <main className="main__card">
        <CardPreview name={this.state.name} job={this.state.job}/>
        <Fill onChangeHandler={this.onChangeHandler}/>
        <Form onChangeHandler={this.onChangeHandler}/>
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


