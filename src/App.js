import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
