import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik"

function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    emailField: '',
    passwordField: '', 
  },
  onSubmit: values =>{
    console.log('form:', values);
    alert("Login Successful");
    },

  validate: values =>{
    let errors = {};
    if(!values.emailField) {
      errors.emailField = 'Field required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
      errors.emailField = 'Username should be an email';
    }
    if(!values.passwordField) errors.passwordField = 'Field required';
    return errors;
    if(values.emailField) (values.passwordField) = Alert.alert("Login Successful")
  }
});

  return (
    <div>
     <form onSubmit={formik.handleSubmit}>
     <div>Email:</div>
        <input type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div id="emailError" style={{color:'red'}}>{formik.errors.emailField}</div> : null}  
       <div>Password:</div>  
       <input type="text" name="passwordField" onChange={formik.handleChange} value={formik.values.passwordField}/><br/>
        {formik.errors.passwordField ? <div  id="passwordError" style={{color:'red'}}>{formik.errors.passwordField}</div> : null}      
        <button id="submitBtn" type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
