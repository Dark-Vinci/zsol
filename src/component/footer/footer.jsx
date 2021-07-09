import React from 'react';
import classe from './footer.module.css';

const Footer = () => {
    return ( 
        <div className = { classe.footer }>
            <div>Made with love by Tomiwa</div>
            <div>Phone: +2349034119761</div>
            <div>Email: zsolutionfood@gmail.com</div>
            <div className = { classe.icons }>
                <i className = 'fa fa-whatsapp fa-2x'></i>
                <i className = 'fa fa-envelope fa-2x'></i>
                <i className = 'fa fa-twitter fa-2x'></i>
            </div>
            <div>Terms and conditions</div>
        </div>
     );
}
 
export default Footer;