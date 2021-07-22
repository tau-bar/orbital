import React, { useContext, useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import './loginpage.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomTextField from '../../components/text-field/text-field.component';
import { resetPassword } from "../../firebase/firebase.utils";
import { UserContext } from '../../context/UserProvider'


function ForgotPassword({ history }) {
    const user = useContext(UserContext);

    useEffect(() => {
    if (user !== undefined) {
        history.push('/');
    }
    })

    const [values, setValues] = useState({
        email: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleReset = async (event) => {
        event.preventDefault();
        if (/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email) === false) {
            alert("Enter a valid email address.");
            return;
        }
        await resetPassword(values.email);
        history.push('/login');
    }
    
    return (
        <div className = 'login-signup-page'>
            <Container className = 'login-signup-container'> 
                <div>
                    <h1 className = 'loginsignuptitle'>Forgot Password?</h1>
                </div>
                <form >
                    <CustomTextField
                    label = "Email"
                    type = "username"
                    onChange = {handleChange("email")}
                    />
                    <CustomButton 
                    onClick = {handleReset}
                    filled
                    bgColor = "#113B08"
                    color= "white"
                    >
                    Send Email <i class="fas fa-envelope"></i>
                    </CustomButton>
                </form>
            </Container>
        </div>
    )

}

export default ForgotPassword;