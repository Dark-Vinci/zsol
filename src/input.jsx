// import React from 'react';
// import classe from './input.module.css';

// const Input = (props) => {
//     let input = null;
//     const inputClasses = [ classe.inputElement ];
    
//     if (props.inValid && props.shouldValidate && props.touched) {
//         inputClasses.push( classe.invalid );
//     }
    
//     switch (props.elementType) {
//         case ('input'):
//             input = <input 
//                 className = { inputClasses.join(' ') } 
//                 { ...props.elementConfig } 
//                 value = { props.value }
//                 onChange = { props.changed }

//             />
//             break;

//         case ('textarea'):
//             input = <textarea 
//                 className = { inputClasses.join(' ') } 
//                 { ...props.elementConfig } 
//                 value = { props.value }
//                 onChange = { props.changed }
//             />
//             break;
//         case ('select'):
//             input = (
//                 <select name = { props.kei }
//                     value = { props.value }
//                     onChange = { props.changed }
//                     className = { inputClasses.join(' ') } >
//                     { props.elementConfig.options.map(optionElement => {
//                         return (<option 
//                             key = { optionElement.value }
//                             value = { optionElement.value }>
//                                 { optionElement.displayValue }
//                         </option>)
//                     })}
//                 </select>
//             );
//             break;

//         default:
//             input = <input 
//                 value = { props.value }
//                 className = { inputClasses.join(' ') } 
//                 { ...props.elementConfig } 
//                 onChange = { props.changed }
//             />

//     }
//     return ( 
//         <div className = { classe.input }>
//             <label 
//                 htmlFor={ props.label }
//                 className = { classe.label } 
//             >{ props.label }</label>

//             { input }
//         </div>
//      );
// }
 
// export default Input;