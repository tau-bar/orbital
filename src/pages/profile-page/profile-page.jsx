import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { changePassword, getUserViruses, deleteUser } from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';

import './profile-page.styles.scss';
import CustomTextField from '../../components/text-field/text-field.component';

const ProfilePage = ({ history }) => {
    const user = useContext(UserContext);
    const [password, setPassword] = useState("");

  const handleDelete = () => {
      deleteUser(user)
      .then(() => {
          history.push('/');
      })
      .catch(e => {
          alert(e.message);
      })
  }

    return(
        <div className = "profile-page">
         {
             user === null 
             ?  <div>Loading</div>
             : <div className = "name-email">
                 <h2>Logged in as:</h2>
                 <p className = "email">
                 <i class="fas fa-user"></i> {user.email}
                 </p> 
             </div>

         }
            <div className = "change-password">
                <p>To change your password, enter your new password here:</p>
                <CustomTextField value = {password} onChange = {e => setPassword(e.target.value)} type = "password" label = "New Password"/>
                <CustomButton filled onClick = {() => {
                    changePassword(password)
                    setPassword('')
                }} >Change Password <i class="fas fa-wrench"></i></CustomButton>
            </div>
            <div className = "change-password">
                <CustomButton color = "white" bgColor = "red" filled onClick = {handleDelete}>Delete Account <i class="fas fa-trash"></i></CustomButton>
            </div>
        </div>
    )
}

export default ProfilePage;