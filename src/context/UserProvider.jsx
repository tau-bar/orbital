import React, { createContext } from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';


export const UserContext = createContext({ user: null });

/* To pass down user state to other components. */
class UserProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    /* Using observer to listen for changes in state of current user. */
    componentDidMount = () => {
        auth.onAuthStateChanged(async userAuth => {
            const user = await createUserProfileDocument(userAuth)
            this.setState({ user: user })
        })
    }
    
    render() {
        return (
            <UserContext.Provider value = {this.state.user} >
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider;
