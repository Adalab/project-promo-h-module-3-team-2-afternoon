import React from 'react';

const ErrorMessage = (props) => {
    let id = props.id;
    let errorText = props.errorText;
    return (
    <p id={id} className="text-error hidden">{errorText}</p>
    )
}
export default ErrorMessage;