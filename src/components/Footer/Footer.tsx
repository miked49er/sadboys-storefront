import './scss/index.scss';

import * as React from 'react';

import ReactSVG from 'react-svg';
import { SocialMediaIcon } from '..';
import { SOCIAL_MEDIA } from '../../core/config';
import Nav from './Nav';

import logo from '../../images/logo/icon-with-typeface.svg';

const Footer: React.FC = () => (
    <div className="footer" id="footer">
        <a href="/"><ReactSVG path={logo} className="footer__logo"/></a>
        <div className="footer__favicons container">
            {SOCIAL_MEDIA.map(medium => (
                <SocialMediaIcon medium={medium} key={medium.ariaLabel}/>
            ))}
        </div>
        <Nav/>
    </div>
);

export default Footer;
