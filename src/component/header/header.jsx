import React from 'react';
import classe from './header.module.css';


const Header = () => {
    return ( 
        <div className = { classe.container } id = 'head'>
            <div id = { classe.back }>
                <h3>Bukka food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestiae!</p>
                <button><a href="#form">Book A Table</a></button>
            </div>
        </div>
    );
}

export default Header;