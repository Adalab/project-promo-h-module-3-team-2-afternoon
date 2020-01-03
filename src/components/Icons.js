import React from 'react';

const TYPES_PREFIXES = {
  phone:'tel:',
  email:'mailto:',
  linkedin:'https://linkedin.com/in/',
  github: 'https://github.com/'
}

const Icon = props => {
  const isHidden = !props.url || props.url === '';
  const url = TYPES_PREFIXES[props.type] + props.url;
  const clasNames = isHidden ? 'contact-icon hidden' : 'contact-icon';

  return (
    <a href={url} target="_blank">
      <li className={clasNames}>
        <i className={props.iconClass} aria-hidden="true"></i>
      </li>
    </a>
  );
};

export default Icon;