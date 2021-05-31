import React, {useState, useEffect} from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';
import Axios from 'axios';

const SignUpPage = () => {
    const onSubmit = (event) => {
        event.preventDefault()
        console.log("Check if username already exists");
        console.log("If exists, error");
        console.log("else, create user in database");
        console.log("once successful, redirect to home page");
      }
    
    //What Reyaaz added starts here
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const submitPassword = () => {
      Axios.post('http://localhost:3001/api/insert',{
        Username: Username, 
        Password: Password,
      }).then(() => {
        alert("successful insert");
      });
    };

    return (
      <div className="App">
        <h1>Sign Up</h1>
        <div className="form">
          <label>Username: </label>
        <input type="text" name="Username" onChange={(e)=> {
          setUsername(e.target.value)
        }}/>
          <label>Password: </label>
        <input type="text" name="Password" onChange={(e)=> {
          setPassword(e.target.value)
        }}/>
        <button onClick = {submitPassword}>Submit</button>
        </div>
      </div>
    );
  }
  //What Reyaaz added ends here

  //What Taufiq added. Commenting out to test whether can connect using 
  //simple form
  /*
    const [values, setValues] = React.useState({
    username: '',
    password: '',
    confirmPassword : '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
            <div className = 'login-signup-page'>
                <Container className = 'login-signup-container'> 
                    <div>
                        <h1>Sign Up</h1>
                    </div>
                    <form onSubmit = {onSubmit}>
                      <CustomTextField
                        label = "Username"
                        type = "username"
                        onChange = {handleChange("username")}
                      />
                      <CustomTextField
                        label = "Password"
                        type = "password"
                        onChange = {handleChange("password")}
                      />
                      <CustomTextField
                        label = "Confirm password"
                        type = "password"
                        onChange = {handleChange("confirmPassword")}
                      />
                      <Button variant="contained" color="primary" type = "submit">
                        Sign Up 
                      </Button>
                    </form>
                    <p>Already have an account? <Link to = "login">Log in.</Link></p>
                </Container>
            </div>)
}
*/

export default SignUpPage;

