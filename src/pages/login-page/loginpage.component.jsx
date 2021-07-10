import React, { useContext, useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { withRouter } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider'


function LoginPage({ history }) {
      const user = useContext(UserContext);

      useEffect(() => {
        if (user !== undefined) {
          history.push('/');
        }
      })

      const [values, setValues] = useState({
        email: '',
        password: '',
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const signIn = (event) => {
        event.preventDefault();
        const { email, password } = values;
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          setValues({
            email: '',
            password: ''
          })
        })
        .catch(error => {
          alert("Error while signing in.");
          console.error(error);
        })
        .finally(() => {
          history.push('');
        })
      }

      // Not satisfied with this, fix next time.
      const handleGoogleSignIn = (event) => {
        event.preventDefault();
        try {
          signInWithGoogle();
        } catch (error) {
          alert(error);
        } finally {
          history.push('');
        }
      }
      
      return (
            <div className = 'login-signup-page'>
                <Container className = 'login-signup-container'> 
                    <div>
                        <h1 className = 'loginsignuptitle'>Login</h1>
                    </div>
                    <form onSubmit = {signIn}>
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
                      <Button variant="contained" color="primary" type = "submit">
                        Login 
                      </Button>
                    </form>
                    <Button variant="contained" color="primary" onClick = {handleGoogleSignIn}>Or Sign in with Google</Button>
                    <p>Don't have an account? <Link to = "/sign-up">Sign up.</Link></p>
                </Container>
            </div>
        )

}

export default withRouter(LoginPage);