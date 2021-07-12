import React, { useState, useContext, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { withRouter } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider'

const SignUpPage = ({ history }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword : '',
    });

    /* Authentication */
    const user = useContext(UserContext);

    useEffect(() => {
      if (user !== undefined) {
        history.push('/');
      }
    })

    /* Add code here, if already have user, redirect to home page. */

    const createUser = async (event) => {
        event.preventDefault()
        const { email, password, confirmPassword } = values;
      
        if (/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) === false) {
          alert("Must be a valid email address.")
          return;
        }

        // Check if passwords match & fit regex
        if (password !== confirmPassword) {
          alert("Passwords don't match!");
          return;
        }

        try {
          const { user } = await auth.createUserWithEmailAndPassword(email, password);
          createUserProfileDocument(user)
          .then(() => {
            setValues({
              email: "",
              password: "",
              confirmPassword: ""
            })
            history.push("/")
          });
        } catch (error) {
          // console.error(error)
          alert("Error signing up with email and password.")
        }

        

      }

    

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
            <div className = 'login-signup-page'>
                <Container className = 'login-signup-container'> 
                    <div>
                        <h1 className = 'loginsignuptitle'>Sign Up</h1>
                    </div>
                    <form onSubmit = {createUser}>
                      <CustomTextField
                        label = "Email"
                        type = "username"
                        onChange = {handleChange("email")}
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

export default withRouter(SignUpPage);
