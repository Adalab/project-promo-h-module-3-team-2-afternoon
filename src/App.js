import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form'
import CardPreview from './components/CardPreview';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CardPreview />
        <Form />
        <Footer />
      </div>
      

    );
  }
}

export default App;
