import React from 'react';
import classe from './form.module.css';

const Form = () => {
    return ( 
        <form className={ classe.form } id = 'form'>
            <div className={ classe.each }>
                <label htmlFor="name">full name</label>
                <input type="text" name="name"  placeholder="John Doe"/>
            </div>

            <div className={ classe.each }>
                <label htmlFor="email">email</label>
                <input type="email" name="email" placeholder= "johnDoe@email.com"/>
            </div>

            <div className={ classe.each }>
                <label htmlFor="phoneNumber">mobile</label>
                <input type="number" name="phoneNumber" placeholder= "+23445455454"/>
            </div>

            <button>submit</button>
        </form>
     );
}
 
export default Form;