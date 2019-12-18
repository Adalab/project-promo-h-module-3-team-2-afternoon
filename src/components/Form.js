import React from 'react';
import Fill from './Fill';
import Share from './Share';
import Design from './Design';
import { Accordion, AccordionItem } from 'react-sanfona';

class Form extends React.Component {
  render(){
    /* Si el elemento que tiene clase "react-sanfona-item-body" tiene area-hidden="false", que la flecha se gire 90 grados (o tenga otra clase). Que esta función se redenderize con cada cambio ¿usar referencias? ej: this.title = React.createRef() /// <h1 ref = { this.title }>Hola comunidad</h1>*/
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
            

            <div ref="itemRef">
              {index === 0 ? (
                  <Design/>
                ) : null}

              {index === 1 ? (
                  <Fill/>
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
  )}
}
export default Form;
