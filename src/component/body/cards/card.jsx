import React from 'react';
import classe from './card.module.css';
import Stars from './stars';

const Card = (props) => {
    const dec = props.description.slice(0, 100);
    return ( 
        <div className = { classe.cardContainer}>
            <div className= { classe.img }
                style = {{ backgroundImage: `url(${props.image})` }}
            ></div>
 
            <div className={ classe.desc }>
                <div className={classe.priceTitle}>
                    <div className={classe.title}>{ props.title }</div>
                    <div className={ classe.price }>{ props.price }</div>
                </div>

                <div className={classe.des }>served with chicken and chips</div>

                <div 
                    className={ classe.description }   
                    id = { classe.s }
                >{ dec }...</div>

                <div className={ classe.icons }>
                    <div className={ classe.star }> <Stars star = { props.rating }/></div>
                    <div className={ classe.cross}> + </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;