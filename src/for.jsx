// import React, { Component } from 'react';
// import Input from "./inpu";

// class Formi extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             disabled: true,
//             orderForm: {
//                 name: {
//                     elementType: 'input',
//                     elementConfig: {
//                         placeholder: 'john doe',
//                         type: 'text'
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 email: {
//                     elementType: 'input',
//                     elementConfig: {
//                         placeholder: 'johhDoe@gmail.com',
//                         type: 'email'
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 zipcode: {
//                     elementType: 'input',
//                     elementConfig: {
//                         placeholder: '11231',
//                         type: 'text'
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 country: {
//                     elementType: 'input',
//                     elementConfig: {
//                         placeholder: 'nigeria',
//                         type: 'text'
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 shipping: {
//                     elementType: 'select',
//                     elementConfig: {
//                         options: [
//                             { value: 'fastest', displayValue: 'fastest dilivery'},
//                             { value: 'cheapest', displayValue: 'cheapest dilivery'}
//                         ]
//                     },
//                     value: 'fastest', 
//                     valid: true,
//                     validation: {}
//                 }
//             }
//          }
//     }

//     changeHandler = (event, elementId) => {
//         const clonedOrderForm = {
//             ...this.state.orderForm
//         }

//         const updatedForm = {
//             ...clonedOrderForm[elementId]
//         };

//         updatedForm.value = event.target.value;
//         updatedForm.valid = this.checkValidity(updatedForm.value, updatedForm.validation);
//         updatedForm.touched = true
//         clonedOrderForm[elementId] = updatedForm;
//         console.log(updatedForm);

//         let valid = true;
//         for (let key in clonedOrderForm) {
//             valid = clonedOrderForm[key].valid && valid;
//         }
//         const notValid = !valid;

//         this.setState({
//             orderForm: clonedOrderForm,
//             disabled: notValid
//         });
//     }

//     checkValidity = (value, rules) => {
//         let isValid = true;
        
//         if (!rules) {
//             return true;
//         }

//         if (rules.required) {
//             isValid = value.trim() !== '' && isValid;
//         }

//         if (rules.minLength) {
//             isValid = value.trim().length >= rules.minLength && isValid;
//         }

//         if (rules.maxLength) {
//             isValid = value.trim().length <= rules.maxLength && isValid;
//         }

//         return isValid;
//     }

//     submitHandler = (event) => {
//         event.preventDefault();
//         const data = {};

//         for (let key in this.state.orderForm) {
//             data[key] = this.state.orderForm[key].value;
//         }

//         console.log(data)
//     }

//     render() { 
//         const formElementArray = [];
//         for (let key in this.state.orderForm) {
//             formElementArray.push({
//                 id: key,
//                 config: this.state.orderForm[key]
//             })
//         }

//         let form = (
//             <form 
//                 onSubmit = { this.submitHandler }
//             >
//                 { formElementArray.map((element) => {
//                     return (
//                         <Input 
//                             elementType = { element.config.elementType } 
//                             value = { element.config.value } 
//                             elementConfig = { element.config.elementConfig }
//                             key = { element.id }
//                             invalid = { !element.config.valid }
//                             changed = { (event) => this.changeHandler(event, element.id) }
//                             touched = { element.config.touched }
//                             shouldValidate = { element.config.validation }
//                         />
//                     )
//                 })}
//             </form>
//         )
//         return ( 
//             <div>
//                 { form }
//                 <button
//                     disabled = { this.state.disabled }
//                 >submit</button>
//             </div>
//          );
//     }
// }
 
// export default Formi;