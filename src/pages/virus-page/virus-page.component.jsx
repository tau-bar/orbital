
import React, { useContext,
    useState,
    useEffect
     } from 'react';
import CardItem from '../../components/cards/CardItem';
import Cards, { virusData }from '../../components/cards/Cards';
import './virus-page.styles.scss';
import { UserContext } from '../../context/UserProvider';
import { HamburgerContext } from '../../context/HamburgerProvider';
import { Button } from '@material-ui/core';
import { getUserViruses } from '../../firebase/firebase.utils';
import '../../components/cards/Cards.scss';

const VirusPage = ({ history }) => {
    const user = useContext(UserContext);
    const setIsActive = useContext(HamburgerContext)[1];
    const [viruses, setViruses] = useState([]) 

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

    const UserViruses = () => {

        const virusNames = 
        ['coronavirus',
          'flavivirus',
          'mobillivirus',
          'yersenia',
          'ebolavirus',
          'orthopoxvirus']

        useEffect(() => {
            const getViruses = async () => {
                if (viruses.length === 0 && user !== null) {
                    const viruses = await getUserViruses(user);
                    setViruses(viruses);
                }
            }
            getViruses();
        }, [user])
        
        if (viruses.length !== 0) {
            return (
                <div className='cards my-viruses'>
                    <div className='cards-container'>
                    {viruses.map(v => {
                                const { id, virusType, virusName } = v
                                return(
                        
                                    <CardItem key = {id} label = {virusName} src = {virusData[virusNames[virusType - 1]].src} onClick = {() => history.push({
                                        pathname: '/virus/create',
                                        state: {
                                            id,
                                            virusType,
                                        }
                                    })}/>)
                                    
                            })
                        }
                    </div>
                </div>
            )
        }
        return (
            <div>
            <p>Looks like you don't have any viruses yet!</p>
            <Button color = "secondary" variant = 'contained' onClick = {() => history.push('/virus/create')}>Make a virus!</Button>
            </div>
        )
        }

    return(
        <div>
            <div className = "my-viruses">
                <h1 className = 'my-viruses-title'>My Viruses</h1>
                    { user === undefined ?
                        noUserMyViruses():
                        user === null ? 
                        <p>Loading...</p>:
                        <UserViruses/>}
            </div>
            <Cards/>
        </div>
    )
}

export default VirusPage;