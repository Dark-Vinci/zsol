import React from 'react';
import Cards from './cards/cards';
import classe from './body.module.css';
import Form from './form';
import Spinner from './spinner';

const Body = (props) => {
    let spinnerCard;

    // check for showing spinner or cards
    if (props.foods.length < 1) { 
        spinnerCard = <Spinner/>
    } else {
        spinnerCard = <Cards 
                        foods = { props.foods }
                    />
    }
    
    return ( 
        <div className = { classe.container }>
            <h3>Some meals we serve</h3>
            <p>all meals are served hot and fresh</p>
     
            { spinnerCard }
           
            <button
                className = { classe.up }
            ><a href="#head">up</a></button>
            <button>learn more</button>

            <Form />
        </div>
     );
}
 
export default Body;