import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { withRouter } from 'react-router-dom';



function LoginPage({ history }) {
      const [values, setValues] = React.useState({
        username: '',
        password: '',
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = values;
        try {
          await auth.signInWithEmailAndPassword(username, password);
          //resets the input field to blank after the user submits
          setValues({
            username: "",
            password: "",
          });
          history.push('');
        } catch (error) {
          alert(error);
        }
      }
      
      return (
            <div className = 'login-signup-page'>
                <Container className = 'login-signup-container'> 
                    <div>
                        <h1 className = 'loginsignuptitle'>Login</h1>
                    </div>
                    <form onSubmit = {handleSubmit}>
                      <CustomTextField
                        label = "Email"
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

export default withRouter(LoginPage);