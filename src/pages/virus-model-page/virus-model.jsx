import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import { getVirus } from '../../firebase/firebase.utils';
import Container from '../../ThreeSceneAnother';
import ContainerC from '../../ThreeSceneCopy';
import '../../pages/new-virus-page/new-virus.styles.scss';

const VirusModelPage = ({ history }) => {
  const arr = history.location.pathname.split('/')
  const key = arr[3]
  const id = arr[4];
  
    const virusModelPath = {
        coronavirus: {
          src:'/assets/coronavirus.obj',
          img:'/assets/coronaWrap.png'
        },
        flavivirus: {
          src:'/assets/flavivirus.obj',
          img:'/assets/flavWrap.png'
        },
        mobillivirus: {
          src:'/assets/mobillivirus.obj',
          img:'/assets/mobWrap.png'
        },
        yersinia: {
          src:'/assets/yersinia.obj',
          img: '/assets/yerWrap.png'
        },
        ebolavirus: {
          src:'/assets/ebolavirus.obj',
          img: '/assets/yerWrap.png'
        },
        
        orthopoxvirus : {
          src:'/assets/orthopox.obj',
          img: '/assets/clear.png'
        },    
      }

      const user = useContext(UserContext);
      const [values, setValues] = useState('');

      useEffect(() => {
        if (user !== null && values === '') {
            const getVirusData = async () => {
                if (user !== null) {
                    const virus = await getVirus(user, id);
      
                    await setValues({
                      id: id,
                      ...virus
                    })
                }
            }
            getVirusData();
        }
      }, [])

    console.log(values)
    return(
      <div className = "virus-model-loader">
       
        {id !== undefined ? <ContainerC id = {id} values = {values} ></ContainerC> : <Container img = {virusModelPath[key].img} modelPath ={virusModelPath[key].src}></Container>}
       </div>
    )

    
}

export default VirusModelPage;
