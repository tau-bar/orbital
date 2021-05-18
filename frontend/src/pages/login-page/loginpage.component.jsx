import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';


function LoginPage() {
      const [values, setValues] = React.useState({
        username: '',
        password: '',
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const onSubmit = (event) => {
        event.preventDefault()
        console.log("Check if user exists and if password is correct, if incorrect display error message, else log him in. Change state of application to be logged in with the current user, and then redirect to home page.");
      }
      
      return (
            <div className = 'login-signup-page'>
                <Container className = 'login-signup-container'> 
                    <div>
                        <h1>Login</h1>
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
                      <Button variant="contained" color="primary" type = "submit">
                        Login 
                      </Button>
                    </form>
                    <p>Don't have an account? <Link to = "/sign-up">Sign up.</Link></p>
                </Container>
            </div>
        )

}

export default LoginPage;