import React from 'react';
import classe from './spinner.module.css';

const Spinner = () => {
    return ( 
        <div className = { classe.loader }>Loading...</div>
    );
}
 
export default Spinner;