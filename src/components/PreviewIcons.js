import React from 'react';
import Icons from './Icons';

const PreviewIcons = props => {
  return (
    <div className='card__contacts'>
      <ul>
        <Icons
          linkId="linkPhone"
          linkHref=""
          linkTarget=""
          LiId="cardPhone"
          iconClass='fas fa-mobile-alt'
          iconsList={props.iconsList}
        />
        <Icons
          linkId="linkEmail"
          //LinkHref={'https://' + props.iconsList.email}
          LinkTarget="_blank"
          LiId="cardEmail"
          iconClass='fab fas fa-envelope'
          iconsList={props.iconsList}
        />
        <Icons
          linkId="linkLinkedin"
          //LinkHref={'https://linkedin.com/in/' + props.iconsList.linkedin}
          LinkTarget="_blank"
          LiId="cardLinkedin"
          iconClass='fab fa-linkedin-in'
          iconsList={props.iconsList}
        />
        <Icons
          linkId="linkGithub"
          //LinkHref={'https://github.com/' + props.iconsList.github}
          LinkTarget="_blank"
          LiId="cardGithub"
          iconClass='fab  fa-github-alt'
          iconsList={props.iconsList}
        />
      </ul>
    </div>
  );
};

export default PreviewIcons;
