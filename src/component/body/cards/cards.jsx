import React from 'react';
import Card from './card';
import classe from './cards.module.css';

const Cards = (props) => {
    const toReturn = props.foods.map((el) => {
        return <Card 
            key = { el.id }
            image = { el.strMealThumb }
            price = { el.price }
            description = { el.description }
            title = { el.title }
            rating = { el.ratings }
            desc = { el.strMeal }
        />
    })
    return ( 
        <div className = { classe.container }>
            { toReturn }
        </div>
     );
}
 
export default Cards;