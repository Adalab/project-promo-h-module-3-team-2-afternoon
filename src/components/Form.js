import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

const Form = props => {
    return (
        <section className="forms">
            <div className="section-wrapper">
                <form action="" method="POST" id="card__form">
                    <Design />
                    <Fill onChangeHandler = {props.onChangeHandler}/>
                    <Share/>
                </form>
            </div>
        </section>
    )
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