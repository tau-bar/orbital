import React, {useState, useContext} from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './loginpage.styles.scss'
import CustomTextField from '../../components/text-field/text-field.component';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { withRouter } from 'react-router-dom';
import {UserContext} from '../../context/UserContext'

const SignUpPage = ({ history }) => {
    const [user, setUser] = useContext(UserContext);

    const onSubmit = async (event) => {
        event.preventDefault()
        const { username, password, confirmPassword } = values;
      
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)) {
          alert("Must be a valid email address.")
          return;
        }

        // Check if passwords match & fit regex
        if (password !== confirmPassword) {
          alert("Passwords don't match!");
          return;
        }

        try {
          //creates the auth object
          const { user } = await auth.createUserWithEmailAndPassword(
            username,
            password
          );
          //sends it to database
          createUserProfileDocument(user);
          //clear out the form
          setValues({
            username: "",
            password: "",
            confirmPassword: "",
          });
          setUser(username);
          history.push('/')
        } catch (error) {
          alert(error);
        }
      }

    const [values, setValues] = useState({
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
                        label = "Email"
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

export default withRouter(SignUpPage);



// function SignUpPage() {
//   let valid = true;

//   const onSubmit = (event) => {
//     event.preventDefault()
//     console.log("Check if username already exists");
//     console.log("If exists, error");
//     console.log("else, create user in database");
//     console.log("once successful, redirect to home page");
//     //const valid = formValidation();
//   }
//   const formValidation = () => {
//     const usernameErr = {};
//     const passwordErr = {};
//     let errorIdHelper = 'primary';
//     let isValid = true;



//     if (username.trim().length < 5) {
//       usernameErr.usernameShort = "Username is too short";
//       errorIdHelper = 'secondary';
//       isValid = false;  
//       valid = false;
//     }

//     if (username.trim().length > 10) {
//       usernameErr.usernameLong = "Username is too long";
//       errorIdHelper = 'secondary';
//       isValid = false;
//       valid = false;
//     }

//     if (!username.includes("123")) {
//       usernameErr.userName123 = "Username must have 123";
//       errorIdHelper = 'secondary';
//       isValid = false;
//       valid = false;
//     }

//     setUsernameErr(usernameErr);
//     setPasswordErr(usernameErr);
//     setErrorId(errorIdHelper);
//     return isValid;



//   }


//   const [username, setUsername] = useState('')
//   const [Password, setPassword] = useState('')
//   const [C_Password, setCPassword] = useState('')
//   const [usernameErr, setUsernameErr] = useState({})
//   const [passwordErr, setPasswordErr] = useState({})
//   const [errorId, setErrorId] = useState({})

//   const submitReview = () => {
//     changeTextColor();
//     Axios.post('http://localhost:3001/api/insert',{
//       username: username, 
//       password: Password,
//     }).then(() => {
      
//       if(C_Password !== Password){
//         errorId = "secondary"
//         alert("password does not match");
//       } else{
//         errorId = "primary"
//         alert("successful insert");
//         }
        
//     });
//   };

//   const Theme = {
//     palette: {
//       primary: {
//         main: "#FFFF00"
//       },
//       secondary: {
//         main: "#000000"
//       }
//     }
//   };

//   const theme = createMuiTheme(Theme);

//   const [result, setResult] = useState(false);

  
//   const changeTextColor = () => {
//     let appo = formValidation();
//     setResult(appo);
//   };
  


  
//   return (
//     <div className = 'login-signup-page'>
//         <Container className = 'login-signup-container'> 
//             <div>
//                 <h1 className = 'loginsignuptitle'>Sign Up</h1>
//             </div>
//             <form onSubmit = {onSubmit}>
//             <ThemeProvider theme={theme}>
//               <CustomTextField
//                 label = "Username"
//                 type = "username"
//                 color = {result ? "secondary" : "primary"}
//                 onChange={(e)=> {
//                   setUsername(e.target.value)
//                 }}            
//               />
//               </ThemeProvider>
//               {Object.keys(usernameErr).map((key)=>{
//                   return <div style={{color: "red"}}>{usernameErr[key]}</div>
//                 })}
//               <CustomTextField
//                 label = "Password"
//                 type = "password"
//                 onChange={(e)=> {
//                   setPassword(e.target.value)
//                 }}
//               />
//               <CustomTextField
//                 label = "Confirm password"
//                 type = "password"
//                 onChange={(e)=> {
//                   setCPassword(e.target.value)
//                 }}              
//               />
//               <Button onClick = {submitReview} variant="contained" color="primary" type = "submit">
//                 Sign Up 
//               </Button>
//             </form>
//             <p>Already have an account? <Link to = "login">Log in.</Link></p>
//         </Container>
//     </div>);

    
// }

// export default SignUpPage;





// /*
// import React from 'react';
  
// class SignUpPage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {}
//     };
     
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
     
//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
  
//     this.setState({
//       input
//     });
//   }
     
//   handleSubmit(event) {
//     event.preventDefault();
  
//     if(this.validate()){
//         console.log(this.state);
  
//         let input = {};
//         input["name"] = "";
//         input["email"] = "";
//         input["password"] = "";
//         input["confirm_password"] = "";
//         this.setState({input:input});
  
//         alert('Demo Form is submited');
//     }
//   }
  
//   validate(){
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;
  
          
//         if (input["password"] != input["confirm_password"]) {
//           isValid = false;
//           errors["password"] = "Passwords don't match.";
//         }
      
  
//       this.setState({
//         errors: errors
//       });
  
//       return isValid;
//   }
     
//   render() {
//     return (
//       <div>
//         <h1>React Password and Confirm Password Validation Example - ItSolutionStuff.com</h1>
//         <form onSubmit={this.handleSubmit}>
  
//           <div class="form-group">
//             <label for="name">Name:</label>
//             <input 
//               type="text" 
//               name="name" 
//               value={this.state.input.name}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter name" 
//               id="name" />
  
//               <div className="text-danger">{this.state.errors.name}</div>
//           </div>
  
//           <div class="form-group">
//             <label for="email">Email Address:</label>
//             <input 
//               type="text" 
//               name="email" 
//               value={this.state.input.email}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter email" 
//               id="email" />
  
//               <div className="text-danger">{this.state.errors.email}</div>
//           </div>
   
//           <div class="form-group">
//             <label for="password">Password:</label>
//             <input 
//               type="password" 
//               name="password" 
//               value={this.state.input.password}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter password" 
//               id="password" />
  
//               <div className="text-danger">{this.state.errors.password}</div>
//           </div>
  
//           <div class="form-group">
//             <label for="password">Confirm Password:</label>
//             <input 
//               type="password" 
//               name="confirm_password" 
//               value={this.state.input.confirm_password}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter confirm password" 
//               id="confirm_password" />
  
//               <div className="text-danger">{this.state.errors.confirm_password}</div>
//           </div>
              
//           <input type="submit" value="Submit" class="btn btn-success" />
//         </form>
//       </div>
//     );
//   }
// }
// export default SignUpPage;

// /*
// function SignUpPage() {

//   const onSubmit = (event) => {
//     event.preventDefault()
//     console.log("Check if username already exists");
//     console.log("If exists, error");
//     console.log("else, create user in database");
//     console.log("once successful, redirect to home page");
//   }

//   const [username, setUsername] = useState('')
//   const [Password, setPassword] = useState('')
//   const [C_Password, setCPassword] = useState('')
//   const submitReview = () => {
//     Axios.post('http://localhost:3001/api/insert',{
//       username: username, 
//       password: Password,
//     }).then(() => {
      
//       if(C_Password !== Password){
//         alert("password does not match");
//       } else{
//         alert("successful insert");
//         }
        
//     });
//   };

//   return (
//     <div className = 'login-signup-page'>
//         <Container className = 'login-signup-container'> 
//             <div>
//                 <h1 className = 'loginsignuptitle'>Sign Up</h1>
//             </div>
//             <form onSubmit = {onSubmit}>
//               <CustomTextField
//                 label = "Username"
//                 type = "username"
//                 onChange={(e)=> {
//                   setUsername(e.target.value)
//                 }}
//               />
//               <CustomTextField
//                 label = "Password"
//                 type = "password"
//                 onChange={(e)=> {
//                   setPassword(e.target.value)
//                 }}
//               />
//               <CustomTextField
//                 label = "Confirm password"
//                 type = "password"
//                 onChange={(e)=> {
//                   setCPassword(e.target.value)
//                 }}              
//               />
//               <Button onClick = {submitReview} variant="contained" color="primary" type = "submit">
//                 Sign Up 
//               </Button>
//             </form>
//             <p>Already have an account? <Link to = "login">Log in.</Link></p>
//         </Container>
//     </div>);
    
// }


