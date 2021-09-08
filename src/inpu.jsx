// import React from 'react';
// import classe from './input.module.css';

// const Input = (props) => {
//     let input = null;
//     const inputClasses = [ classe.inputElement ];

//     if (props.invalid && props.touched && props.shouldValidate) {
//         inputClasses.push(classe.invalid);
//     }

//     switch (props.elementType) {
//         case ('input'): 
//             input = <input 
//                 {...props}
//                 className = { inputClasses.join(' ') }
//                 value = { props.value}
//                 onChange = { props.changed }
//             />
//             break;

//         case ('textarea'): 
//             input = <textarea
//                 {...props}
//                 value = { props.value}
//                 onChange = { props.changed }
//                 className = { inputClasses.join(' ') }
//             >
//                 {
//                     props.elementConfig.options.map((option) => {
//                         <option
//                             value = { option.value }
//                             key = { option.value }
//                         >
//                             { option.displayValue }
//                         </option>
//                     })
//                 }
//             </textarea>
//             break;

//         default: 
//             input = <input 
//                 {...props}
//                 value = { props.value }
//                 onChange = { props.changed }
//                 className = { inputClasses.join(' ') }
//             />
//     }
//     return ( 
//         <div>
//             <label>{ props.label }</label>
//             { input }
//         </div>
//      );
// }
 
// export default Input;