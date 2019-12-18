import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form'
import CardPreview from './components/CardPreview';
import { Accordion, AccordionItem } from 'react-sanfona';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main__card">
        <CardPreview />
        <Form />
        </main>
        <Footer />
      </div>
      

    );
  }
}

export default App;
