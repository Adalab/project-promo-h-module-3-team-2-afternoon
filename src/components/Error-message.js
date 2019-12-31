import React from 'react';

const ErrorMessage = (props) => {
    return (
    <p id={props.id} className="text-error">{props.errorText}</p>
    )
}
export default ErrorMessage;