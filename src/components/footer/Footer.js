import React from 'react';

import '../header/Header.css';
import Column from '../Column';
import FooterNavList from './FooterNavList';

const Footer = () =>{
    return(
        <footer>
            <div className="footer-container">
                <Column column="1-2" class="center-elements">
                    <div className="footer-text">
                        Lorem ipsum dolor sit amet, consectetuer edui adipiscing elit. 
                        Vestibulum at ante nec orci tempor nil sic tincidunt. 
                        Nulla paedo sum amet ac frijuilum. 
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                         Etiam eget nisl. Nullam felis. Phasellus interdum suspicit eros.
                    </div>
                </Column>
                <Column column="1-2" class="no-padding">
                    <div className="footer-navigation">
                        <FooterNavList />
                    </div>
                    <div id="copyright">
                        &copy;
                        <div className="bold-text">DEMO</div>
                        <div className="normal-text">SITE All rights reserved</div>
                    </div>
                </Column>
            </div>
        </footer>
    )
}

export default Footer;