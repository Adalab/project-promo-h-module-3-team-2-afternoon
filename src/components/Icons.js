import React from 'react';

const Icon = props => {

  /*const ShowIcons = () => {
    for (let icon in props.previewIconsList) {
      if (props.id === icon.toString()) {
        if (props.iconsList[icon] !== "") {
          icon.classList.remove('hidden')
        } else {
          icon.classList.add('hidden');
        }
      }
    }
  };

  ShowIcons();*/

  return (
    <a id={props.linkId} href={props.linkHref} target={props.linkTarget}>
      <li id={props.liId} className="contact-icon contact-icon-palette1 hidden">
        <i className={props.iconClass} aria-hidden="true"></i>
      </li>
    </a>
  );
};

export default Icon;