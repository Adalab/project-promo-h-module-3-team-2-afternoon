import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Design from './Design';
import { Accordion, AccordionItem } from 'react-sanfona';

class Form extends React.Component {
  render() {
  return (
        <section className="forms">
          <div className="section-wrapper">
            <form action="" method="POST" id="card__form">
            <Accordion>
            {[<h2><i className="far fa-object-ungroup"></i> Diseña<i className="fas fa-chevron-down design-arrow form-arrow"></i></h2>, <h2><i className="far fa-keyboard"></i> Rellena<i className="fas fa-chevron-down fill-arrow form-arrow"></i></h2>,
            <h2><i className="fas fa-share-alt"></i> Comparte<i className="fas fa-chevron-down share-arrow form-arrow"></i></h2>].map((item,index) => {
            return (
              <AccordionItem
              key={index}
              title={item}
              id={index}
              //ref="itemRef"
              >
              
              <div>
                {index === 0 ? (
                    <Design/>
                  ) : null}
  
                {index === 1 ? (
                    <Fill onChangeHandler = {this.props.onChangeHandler}>
                      {this.props.children}

                    </Fill>
                  ) : null}
  
                {index === 2 ? (
                    <Share/>
                  ) : null}
              </div>
            </AccordionItem>     
          );}
        )}
          </Accordion>
        </form>
      </div>
    </section>
    )
  }
}
/*class Form extends React.Component {
    render(){
        return (
            <section className="forms">
                <div className="section-wrapper">
                    <form action="" method="POST" id="card__form">
                        <Design />
                        <Fill/>
                        <Share/>
                    </form>
                </div>
            </section>
        )
    }
}*/

export default Form;
