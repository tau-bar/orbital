import React from 'react';
import Container from '../../ThreeScene';

const VirusModelPage = ({ history }) => {
    const { id, virusType } = history.location.state;

    const modelPaths = [
        "/assets/eleph.obj",
        "/assets/ebola.obj",
        "/assets/flavivirus.obj",
        '/assets/mobillivirus.obj',
        '/assets/orthopox.obj',
        '/assets/yersinia.obj',
    ]

    /*You need to pass the history props to the Container component so that can pass id to edit/delete button*/
    return(
        <Container modelPath = { modelPaths[virusType] } ></Container>
    )
}

export default VirusModelPage;