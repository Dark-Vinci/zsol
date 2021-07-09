import React from 'react';
import classe from './stars.module.css';

const Stars = (props) => {
    let s1 = 'fa fa-star',
        s2 = 'fa fa-star',
        s3 = 'fa fa-star',
        s4 = 'fa fa-star',
        s5 = 'fa fa-star';

        // check for dynamically allocating classes to stars
    if (props.star > 0) {
        s1 = `fa fa-star ${classe.checked}`;
        if (props.star < 0) { //to take care of of decimal point ratings
            s1 = `fa fa-star-half-o ${classe.checked}`;
        }
    }

    if (props.star > 1) {
        s2 = `fa fa-star ${classe.checked}`;
        if (props.star < 2) { //to take care of of decimal point ratings
            s2 = `fa fa-star-half-o ${classe.checked}`;
        }
    } 
    
    if (props.star > 2) {
        s3 = `fa fa-star ${classe.checked}`;
        if (props.star < 3) { //to take care of of decimal point ratings
            s3 = `fa fa-star-half-o ${classe.checked}`;
        }
    } 
    
    if (props.star > 3) {
        s4 = `fa fa-star ${classe.checked}`;
        if (props.star < 4) { //to take care of of decimal point ratings
            s4 = `fa fa-star-half-o ${classe.checked}`;
        }
    } 
    
    if (props.star > 4) {
        s5 = `fa fa-star ${classe.checked}`;
        if (props.star < 5) { //to take care of of decimal point ratings
            s5 = `fa fa-star-half-o ${classe.checked}`;
        }
    }

    return ( 
        <div className = { classe.container }>
            <i className = { s1 }></i>
            <i className = { s2 }></i>
            <i className = { s3 }></i>
            <i className = { s4 }></i>
            <i className = { s5 }></i>
        </div>
     );
}
 
export default Stars;
