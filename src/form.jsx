// import React, { Component } from 'react';
// import Input from './input';
// import classe from './form.module.css';

// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             valid: false,
//             orderForm: {
//                 name: {
//                     elementType: 'input',
//                     elementConfig: {
//                         type: 'text',
//                         placeholder: 'john doe'
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 street: {
//                     elementType: 'input',
//                     elementConfig: {
//                         type: 'text',
//                         placeholder: 'your street'
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 zipCode: {
//                     elementType: 'input',
//                     elementConfig: {
//                         type: 'text',
//                         placeholder: '10121'
//                     },
//                     value: '',
//                     validation: {
//                         required: true,
//                         minLength: 5,
//                         maxLength: 5,
//                         isNumeric: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 country: {
//                     elementType: 'input',
//                     elementConfig: {
//                         type: 'text',
//                         placeholder: 'nigeria'
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
//                         type: 'email',
//                         placeholder: 'johnDoe@gmail.com'
//                     },
//                     value: '',
//                     validation: {
//                         required: true,
//                         isEmail: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 phoneNumber: {
//                     elementType: 'number',
//                     elementConfig: {
//                         type: 'number',
//                         placeholder: '09001010111'
//                     },
//                     value: '',
//                     validation: {
//                         required: true,
//                         minLength: 11,
//                         maxLength: 11,
//                         isNumeric: true
//                     },
//                     valid: false,
//                     touched: false
//                 },

//                 deliveryMethod: {
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
//         }
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
//             isValid = (value.length >= rules.minLength) && isValid;
//         }

//         if (rules.maxLength) {
//             isValid = (value.length <= rules.maxLength) && isValid;
//         }

//         if (rules.isEmail) {
//             const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//             isValid = pattern.test(value) && isValid;
//         }

//         if (rules.isNumeric) {
//             const pattern = /^\d+$/;
//             isValid = pattern.test(value) && isValid;
//         }

//         return isValid;
//     }

//     changeHandler = (event, elementId) => {
//         const updatedOrderForm = {
//             ...this.state.orderForm
//         }

//         const updatedForm = { ...updatedOrderForm[elementId] };
//         updatedForm.value = event.target.value;
//         updatedForm.valid = this.checkValidity(updatedForm.value, updatedForm.validation);
//         updatedOrderForm[elementId] = updatedForm;
//         updatedForm.touched = true;

//         let inValid = true;
//         for (let key in updatedOrderForm) {
//             inValid = updatedOrderForm[key].valid && inValid
//         }

//         this.setState({ orderForm: updatedOrderForm, valid: inValid });
//     }

//     submitHandler = (event) => {
//         event.preventDefault();
//         const formData = {};
//         for (let key in this.state.orderForm) {
//             formData[key] = this.state.orderForm[key].value;
//         }

//         console.log(formData)
//     }

//     render() { 
//         const formElementArray = [];
//         for (let key in this.state.orderForm) {
//             formElementArray.push({
//                 id: key,
//                 config: this.state.orderForm[key]
//             })
//         }

//         const inputs = formElementArray.map(input =>{
//             return (
//                 <Input 
//                     key = { input.id }
//                     kei = { input.id }
//                     elementType = { input.config.elementType } 
//                     value = { input.config.value }
//                     elementConfig = { input.config.elementConfig }
//                     label = { input.id }
//                     inValid = { !input.config.valid }
//                     shouldValidate = { input.config.validation }
//                     touched = { input.config.touched }
//                     changed = { (event) => this.changeHandler(event, input.id) }
//                 />
//             )
//         });

//         return ( 
//             <form className = { classe.form}
//                 onSubmit = { this.submitHandler }
//                 style = {{ 
//                     width: "60%",
//                     textAlign: 'center',
//                     border: 'none',
//                     boxShadow: '2px 2px 10px',
//                     borderRadius: '20px',
//                     padding: '10px',
//                     boxSizing: 'border-box'
//                 }}
//             >
//                 { inputs }
//                 <button
//                     disabled = { !this.state.valid }
                    
//                 >submit</button>
//             </form>
//          );
//     }
// }
 
// export default Form;
