import React from 'react';
import classe from './card.module.css';
import Stars from './stars';

const Card = (props) => {
    const description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti officia nesciunt nisi omnis asperiores ab? perspiciatis repellat rem assumenda vero distinctio, vel facilis doloribus, tenetur impedit illum ducimus ipsa!'
    const dec = description.slice(0, 100);
    
    return ( 
        <div className = { classe.cardContainer}>
            <div className= { classe.img }
                style = {{ backgroundImage: `url(${ props.url })` }}
            ></div>

            <div className={ classe.desc }>
                <div className={ classe.priceTitle }>
                    <div className={ classe.title }>{ props.title }</div>
                    <div className={ classe.price }>${ props.price }</div>
                </div>

                <div className={ classe.des }>{ props.desc }</div>

                <div 
                    className={ classe.description }   
                    id = { classe.s }
                >{ dec }...</div>

                <div className={ classe.icons }>
                    <div className={ classe.star }> <Stars star = { props.star }/></div>
                    <div className={ classe.cross }> + </div>
                </div>
            </div>
        </div>
    );
}

export default Card;