import React, { useContext, useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { withRouter } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider'
import CustomButton from '../../components/custom-button/custom-button.component';


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
        .then(() => alert('Logged in successfully!'))
        .then(() => history.push(''))
        .catch(error => {
          if (email === '' || password === '') {
            alert('Enter your email and password.')
          } else {
            alert(error.message)
          }
          return;
        })
      }

      const handleGoogleSignIn = async (event) => {
        event.preventDefault();
        try {
          await signInWithGoogle()
          .then(() => alert('Logged in successfully!'));
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
                    <form className = 'login-form'>
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
                      <CustomButton onClick = {signIn} filled type = "submit">
                        Login <i class="fas fa-sign-in-alt"></i>
                      </CustomButton>
                    </form>
                    <p>or</p>
                    <CustomButton color = "white" bgColor = "#438BF5" filled onClick = {handleGoogleSignIn}>
                    Google Sign-in <i class="fab fa-google"></i>
                    </CustomButton>
                    <p>Don't have an account? <Link to = "/sign-up">Sign up.</Link></p>
                    <p><Link to = "/forgot-password">Forgot password?.</Link></p>
                    
                </Container>
            </div>
        )

}

export default withRouter(LoginPage);