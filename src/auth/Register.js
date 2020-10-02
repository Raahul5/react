import React,{Component} from 'react';
import { useFormik } from 'formik';
import {toast} from 'react-toastify';
import * as yup from 'yup';
import axios from 'axios';
 



const Register = (props) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      name : '',
      password:'',
      confrimPassword: '',
    },
    validationSchema : yup.object({
       email : yup.string()
       .required('Requied Field')
       .email('invalid Email'),
       name : yup.string()
       .required('Required Field'),
       password : yup.string()
       .required('required Fied')
       .strict()
       .max(5, 'only 5 character allowed')
       .min(2, 'more than 2 character allowed'),
      confrimPassword: yup.string()
      .required('required Fied')
      .strict()
      .max(5,'only 5 character allowed')
      .min(2,'more than 2 character allowed'),
    }),
   onSubmit : (data) => {
    axios.post('http://localhost:4000/api/register',data)
    .then(res => {
      props.history.push('/login');  
      toast.success("user Registered");
    })
    .catch(err => {
      toast.error(err.response.data);
      console.log("error");
    })
    
    console.log(data);
   }
   });
      return (
        <div className="container">
      <div className="jumbotron"  >
     
        <h1 >Registertion form</h1>
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
  <label For="name"  >Name </label>
           <input
        className="form-control"
        id="name" 
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? 
      <div className="text-danger"> {formik.errors.name}</div> :
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
      <div className="form-group">
  <label For="confrimPassword"  >Confrim Password </label>
           <input
        className="form-control"
        id="confrimPassword"
        name="confrimPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confrimPassword}
      />
      {formik.errors.confrimPassword ? 
      <div className="text-danger"> {formik.errors.confrimPassword}</div> :
      null
    }
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>   
    </form>
    </div>
    </div>
  );
};

export default Register;
