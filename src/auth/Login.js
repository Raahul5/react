import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {toast} from 'react-toastify';

const Login = (props) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema : yup.object({
       email : yup.string()
       .required('Requied Field')
       .email('invalid Email'),
      
       password : yup.string()
       .required('required Fied')
       .strict()
       .max(5, 'only 5 character allowed')
       .min(2, 'more than 2 character allowed'),
    }),
    onSubmit : (data) => {
      axios.post('http://localhost:4000/api/login',data)
      .then(res => {
        localStorage.setItem('auther',JSON.stringify(res.data));
        props.history.push('/home');  
      })
      .catch(err => {
        toast.error(err.response.data);
      })
     }
  });
      return (
        <div className="container">
      <div className="jumbotron"  >
     
        <h1 >Login form</h1>
      <br/>
    <form  autoComplete="off"  onSubmit={formik.handleSubmit}>  
    <div className="form-group">
   <label For="email" >Email Address </label> 
          <input
        className="form-control"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? 
      <div className="text-danger"> {formik.errors.email}</div> :
      null
    } 
      </div>
     
      <div className="form-group">
  <label For="password">Password </label>
           <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? 
      <div className="text-danger"> {formik.errors.password}</div> :
      null
    }
    </div>

    <div>
      <br></br>
      <button type="submit" className="btn btn-primary">Submit</button>  
      </div>
      <div className="float-right">
      <a href="#" onClick={()=>{
      window.location.href='/register';
    }}>Reigister</a> 
    </div>
    <div className="float-left">
    <a href="#" onClick={()=>{
      window.location.href='/questionpage';
    }}>Quiz</a>
</div>
      </form>
      </div>
    </div>
  );
};

export default Login;
