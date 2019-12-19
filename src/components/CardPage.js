import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
import { Accordion, AccordionItem } from 'react-sanfona';

class CardPage extends React.Component {
    onChangeHandler(data) {
        console.log(data)
    }
    render(data) {
        return (
            <div>
                <Header />
                <main className="main__card">
                    <CardPreview cardPreviewName={data} />
                    <Form onChangeHandler={this.onChangeHandler} />
                </main>
                <Footer />
            </div>


        );
    }
}

export default CardPage;
