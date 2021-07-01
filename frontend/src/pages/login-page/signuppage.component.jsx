import React, {useState, useEffect} from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';
import Axios from 'axios';
import ValidateTextField from '../../components/text-field/text-field.component';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


/*

Taufiq code for reference in the future. I changed a bit.

const SignUpPage = () => {
    const onSubmit = (event) => {
        event.preventDefault()
        console.log("Check if username already exists");
        console.log("If exists, error");
        console.log("else, create user in database");
        console.log("once successful, redirect to home page");
      }

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
                        <h1 className = 'loginsignuptitle'>Sign Up</h1>
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





function SignUpPage() {
  let valid = true;

  const onSubmit = (event) => {
    event.preventDefault()
    console.log("Check if username already exists");
    console.log("If exists, error");
    console.log("else, create user in database");
    console.log("once successful, redirect to home page");
    //const valid = formValidation();
  }
  const formValidation = () => {
    const usernameErr = {};
    const passwordErr = {};
    let errorIdHelper = 'primary';
    let isValid = true;



    if (username.trim().length < 5) {
      usernameErr.usernameShort = "Username must be longer than 5 characters";
      errorIdHelper = 'secondary';
      isValid = false;  
      valid = false;
    }

    if (!username.includes("!") || !username.includes("@") || !username.includes("#") || !username.includes(",")) {
      usernameErr.userName123 = "Username must have at least one punctuation";
      errorIdHelper = 'secondary';
      isValid = false;
      valid = false;
    }

    if (Password != C_Password) {
      usernameErr.passwordNotSame = "Passwords do not match";
      errorIdHelper = 'secondary';
      isValid = false;
      valid = false;
    }

    if (Password == username) {
      usernameErr.passwordNotSame = "Password cannot be the same as your username";
      errorIdHelper = 'secondary';
      isValid = false;
      valid = false;
    }

    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    setErrorId(errorIdHelper);
    setResult(true);
    return isValid;



  }


  const [username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [C_Password, setCPassword] = useState('')
  const [usernameErr, setUsernameErr] = useState({})
  const [passwordErr, setPasswordErr] = useState({})
  const [errorId, setErrorId] = useState({})

  const submitReview = () => {
    changeTextColor();
    Axios.post('http://localhost:3001/api/insert',{
      username: username, 
      password: Password,
    }).then(() => {
      
      if(C_Password !== Password){
        errorId = "secondary"
        alert("password does not match");
      } else{
        errorId = "primary"
        alert("successful insert");
        }
        
    });
  };

  const Theme = {
    palette: {
      primary: {
        main: "#0000FF"
      },
      secondary: {
        main: "#FFFF00"
      }
    }
  };

  const theme = createMuiTheme(Theme);

  const [result, setResult] = useState(false);

  
  const changeTextColor = () => {
    let appo = formValidation();
    setResult(appo);
  };
  


  
  return (
    <div className = 'login-signup-page'>
        <Container className = 'login-signup-container'> 
            <div>
                <h1 className = 'loginsignuptitle'>Sign Up</h1>
            </div>
            <form onSubmit = {onSubmit}>
            <ThemeProvider theme={theme}>
              <CustomTextField
                label = "Username"
                type = "username"
                color = {result ? "primary" : "secondary"}
                onChange={(e)=> {
                  setUsername(e.target.value)
                }}            
              />
              </ThemeProvider>
              
              <CustomTextField
                label = "Password"
                type = "password"
                onChange={(e)=> {
                  setPassword(e.target.value)
                }}
              />
              <CustomTextField
                label = "Confirm password"
                type = "password"
                onChange={(e)=> {
                  setCPassword(e.target.value)
                }}              
              />
              {Object.keys(usernameErr).map((key)=>{
                  return <div style={{color: "red"}}>{usernameErr[key]}</div>
                })}
              <Button onClick = {submitReview} variant="contained" color="primary" type = "submit">
                Sign Up 
              </Button>
            </form>
            <p>Already have an account? <Link to = "login">Log in.</Link></p>
        </Container>
    </div>);

    
}

export default SignUpPage;





/*
import React from 'react';
  
class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h1>React Password and Confirm Password Validation Example - ItSolutionStuff.com</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
   
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
export default SignUpPage;

/*
function SignUpPage() {

  const onSubmit = (event) => {
    event.preventDefault()
    console.log("Check if username already exists");
    console.log("If exists, error");
    console.log("else, create user in database");
    console.log("once successful, redirect to home page");
  }

  const [username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [C_Password, setCPassword] = useState('')
  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert',{
      username: username, 
      password: Password,
    }).then(() => {
      
      if(C_Password !== Password){
        alert("password does not match");
      } else{
        alert("successful insert");
        }
        
    });
  };

  return (
    <div className = 'login-signup-page'>
        <Container className = 'login-signup-container'> 
            <div>
                <h1 className = 'loginsignuptitle'>Sign Up</h1>
            </div>
            <form onSubmit = {onSubmit}>
              <CustomTextField
                label = "Username"
                type = "username"
                onChange={(e)=> {
                  setUsername(e.target.value)
                }}
              />
              <CustomTextField
                label = "Password"
                type = "password"
                onChange={(e)=> {
                  setPassword(e.target.value)
                }}
              />
              <CustomTextField
                label = "Confirm password"
                type = "password"
                onChange={(e)=> {
                  setCPassword(e.target.value)
                }}              
              />
              <Button onClick = {submitReview} variant="contained" color="primary" type = "submit">
                Sign Up 
              </Button>
            </form>
            <p>Already have an account? <Link to = "login">Log in.</Link></p>
        </Container>
    </div>);
    
}

export default SignUpPage;
*/
