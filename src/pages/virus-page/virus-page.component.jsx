
import React, { useContext } from 'react';
import Cards from '../../components/cards/Cards';
import './virus-page.styles.scss';
import { UserContext } from '../../context/UserProvider';
import { HamburgerContext } from '../../context/HamburgerProvider';
import { Button } from '@material-ui/core';

const VirusPage = ({ history }) => {
    const user = useContext(UserContext);
    const setIsActive = useContext(HamburgerContext)[1];

    const noUserMyViruses = () => {
        return (
            <div>
                <p>To view/create your own viruses, sign in!</p>
                <Button color = "secondary" variant = 'contained' onClick = {() => {
                    setIsActive(false);
                    history.push('/login')
                }}>Sign in</Button>
            </div>
        )
    }


    return(
        <div>
            <div className = 'my-viruses'>
                <h1 className = 'my-viruses-title'>My Viruses</h1>
                { user !== undefined ? 
                    <p>Logged in</p>:
                    noUserMyViruses() }
            </div>
            <Cards/>
        </div>
    )
}

export default VirusPage;