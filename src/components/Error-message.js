import React from 'react';

const ErrorMessage = (props) => {
    return (
    <p id={props.id} className="text-error">{props.errorMessage}</p>
    )
}
export default ErrorMessage;