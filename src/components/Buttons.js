import React from 'react'
import PropTypes from 'prop-types'

const Buttons = props => {

    const {
        btnClass,
        action,
        text,
        id,
        disabled,
    } = props

    return (
        <button
            type="button"
            className={btnClass}
            id={id}
            disabled={disabled}
            onClick={action}
        >
            {props.children}
            {text}
        </button>
    );
}

Buttons.propTypes = {
    btnClass: PropTypes.string.isRequired,
    // handleReset: PropTypes.func
    text: PropTypes.string.isRequired
}

export default Buttons