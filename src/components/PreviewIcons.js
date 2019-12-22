import React from 'react';
import Icons from './Icons';

const PreviewIcons = props => {
  return (
    <div className='card__contacts'>
      <ul>
        <Icons
          linkHref=""
          iconClass='fas fa-mobile-alt'
        />
        <Icons
          linkHref={'https://' + props.email}
          iconClass='fab fas fa-envelope'
        />
        <Icons
          linkHref={'https://linkedin.com/in/' + props.linkedin}
          iconClass='fab fa-linkedin-in'
        />
        <Icons
          linkHref={'https://github.com/' + props.github}
          iconClass='fab  fa-github-alt'
        />
      </ul>
    </div>
  );
};

export default PreviewIcons;
