import React from 'react';
import Icons from './Icons';

const PreviewIcons = props => {
  return (
    <div className='card__contacts'>
      <ul>
        <Icons
          type= 'phone'
          url={props.phone}
          iconClass='fas fa-mobile-alt'
        />
        <Icons
          type = 'email'
          url={props.email}
          iconClass='fab fas fa-envelope'
        />
        <Icons
          type = 'linkedin'
          url={props.linkedin}
          iconClass='fab fa-linkedin-in'
        />
        <Icons
          type = 'github'
          url={props.github}
          iconClass='fab  fa-github-alt'
        />
      </ul>
    </div>
  );
};

export default PreviewIcons;
