
import React, { useContext,
  useState,
  useEffect
   } from 'react';
import CardItem from '../../components/cards/CardItem';
import Cards, { virusData }from '../../components/cards/Cards';
import CustomButton from '../../components/custom-button/custom-button.component';
import { UserContext } from '../../context/UserProvider';
import { HamburgerContext } from '../../context/HamburgerProvider';
import { getUserViruses } from '../../firebase/firebase.utils';
import '../../components/cards/Cards.scss';
import './virus-page.styles.scss';

const VirusPage = ({ history }) => {
  const user = useContext(UserContext);
  const setIsActive = useContext(HamburgerContext)[1];
  const [viruses, setViruses] = useState([]) 

  useEffect(() => {
    if (!user) return;
    const getViruses = async () => {
        if (viruses.length === 0 && user !== null) {
            const viruses = await getUserViruses(user);
            if (viruses.length !== 0) {
                setViruses(viruses);
            }
        }
    }
    getViruses();
}, [])

  const noUserMyViruses = () => {
      return (
          <div className = 'cards'>
              <p className = 'virus-page-text'>To view/create your own viruses, sign in!</p>
              <CustomButton filled onClick = {() => {
                  setIsActive(false);
                  history.push('/login')
              }}>
              Sign in <i class="fas fa-sign-in-alt"></i>
              </CustomButton>
          </div>
      )
  }

  const UserViruses = () => {
      if (viruses.length !== 0) {
          return (
                  <div className='cards-container'>
                  {viruses.map(v => {
                              const { id, virusType, virusName } = v
                              return(
                      
                                  <CardItem key = {id} label = {virusName} src = {virusData[virusType].src} onClick = {() => {
                                    history.push({
                                        pathname: `/virus/model/${virusType}`,
                                        state: {
                                            id,
                                            key: virusType,
                                        }
                                    })
                                    setIsActive(false);
                                }
                                }/>)
                                  
                          })
                      }
                  </div>
          )
      }
      return (
          <div className = 'cards'>
          <p className = 'virus-page-text'>
          Looks like you don't have any viruses yet!
          </p>
          <CustomButton filled onClick = {() => history.push('/virus/create')}>Make a virus!</CustomButton>
          </div>
      )
      }

  return(
      <div>
          <div className = "cards my-viruses">
              <h1 className = 'my-viruses-title'>My Viruses</h1>
                  { user === undefined ?
                      noUserMyViruses():
                      user === null ? 
                      <p className = 'virus-page-text'>Loading...</p>:
                      <UserViruses/>}
          </div>
          <Cards/>
      </div>
  )
}

export default VirusPage;