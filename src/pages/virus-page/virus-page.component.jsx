
import React, { useContext,
    // useState,
    // useEffect
     } from 'react';
// import CardItem from '../../components/cards/CardItem';
import Cards from '../../components/cards/Cards';
import './virus-page.styles.scss';
import { UserContext } from '../../context/UserProvider';
import { HamburgerContext } from '../../context/HamburgerProvider';
import { Button } from '@material-ui/core';
// import { getUserViruses } from '../../firebase/firebase.utils';

const VirusPage = ({ history }) => {
    const user = useContext(UserContext);
    const setIsActive = useContext(HamburgerContext)[1];
    // const [viruses, setViruses] = useState([]);

    // useEffect(() => {
    //     getUserViruses(user.uid)
    //     .then(snapshot => {
    //         if (!snapshot.empty) {
    //             snapshot.forEach(doc => {
    //                 const id = doc.id;
    //                 const { primary, virusType, lethality, size } = doc.data();
    //                 setViruses([...viruses, {
    //                     id,
    //                     primary, 
    //                     virusType, 
    //                     lethality, 
    //                     size
    //                 }])
    //             })
    //         }
    //     })
    // }, [user])

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

    const UserMyViruses = () => {
       
        
        return (
            <button>test</button>
        );
    }

    return(
        <div>
            <div className = 'my-viruses'>
                <h1 className = 'my-viruses-title'>My Viruses</h1>
                { user === undefined || user === null ? 
                    <noUserMyViruses/>:
                    <UserMyViruses/> }
            </div>
            <Cards/>
        </div>
    )
}

export default VirusPage;