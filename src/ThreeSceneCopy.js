import React, { Component, useState, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { UserContext } from "./context/UserProvider";
import { deleteVirus } from "./firebase/firebase.utils";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import './ThreeScene.scss';
import TriggersTooltips from './ToolTip';
import Button from '@material-ui/core/Button';
import LoadingBar from "./components/loading-bar/loading-bar.component";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';



const style = {
    height: "15vh",
    width: "50vh"

};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

    componentDidMount() {
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        this.controls.dispose();
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight});
      }

    sceneSetup = () => {
        const width = window.innerWidth * 0.5;
        const height = window.innerHeight*0.7;

        this.scene = new THREE.Scene();
        this.scene.background = 0xFFFFFF;
        this.camera = new THREE.PerspectiveCamera(
            30, 
            width/height, 
            2, 
            200
        );
        
        this.camera.position.z = 5; 
        this.controls = new OrbitControls( this.camera, this.mount );
        this.controls.minDistance=4
        this.controls.maxDistance=7
        this.controls.autoRotate=true

        this.controls.update();
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setClearColor(0x000000, 0 );
        this.renderer.setSize( width, height) ;
        this.mount.appendChild( this.renderer.domElement );
    };

    addLights = () => {
        const lights = [];
        const helper = this.props.colorCode

        
        const color = new THREE.Color(this.props.colorCode);
        
        lights[ 0 ] = new THREE.PointLight( color, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( color, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( color, 1, 0 );

        lights[ 0 ].position.set( 0, 2000, 0 );
        lights[ 1 ].position.set( 1000, 2000, 1000 );
        lights[ 2 ].position.set( - 1000, - 2000, - 1000 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
    };
            
    startAnimationLoop = () => {
        this.controls.update();
        this.renderer.render( this.scene, this.camera );
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    loadTheModel = () => {
        const loader = new OBJLoader();
        

        loader.load(
            "/assets/" + this.props.virusType + ".obj",
            ( object ) => {
                var cent = new THREE.Vector3();
                var size = new THREE.Vector3();
                var bbox = new THREE.Box3().setFromObject(object);
                bbox.getCenter(cent);
                bbox.getSize(size);
                var maxAxis = Math.max(size.x, size.y, size.z);
                object.scale.multiplyScalar((this.props.sizeCode / (60 * maxAxis)));

                bbox.setFromObject(object);
                bbox.getCenter(cent);
                bbox.getSize(size);
                
                object.position.x = -cent.x;
                object.position.y = -cent.y;
                object.position.z = -cent.z;

                this.scene.add( object );
                const el = this.scene.getObjectByName("Elephant_4");             
                this.model = el;
            },

             ( xhr ) => {
                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                this.props.onProgress(loadingPercentage);
            },
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
    };
     
    render() {     
        return (
            <div> 
            <div style={style} ref={ref => (this.mount = ref)} />
            </div>
        );
    }
}

const ContainerC = (props) => {
    const { values } = props
    const user = useContext(UserContext);
    
    const [state, setState] = useState(
        {
        showComponent: false,
        isMounted: true,
        loadingPercentage: 0,
      }
      );

     useEffect(() => {
        setState({
            ...state, 
            showComponent: false,
        }) 
     }, [values.virusType, values.primary, values.size])

      const onButtonClick = () => {
          if (values.virusType === "") {
              alert("Choose a virus type.");
          } else {
            setState({
                ...state,
                loadingPercentage: 0,
                showComponent: !state.showComponent,
            })
          }
          
      }

      const handleDelete = async () => {
        await deleteVirus(user, values.id)
        .then(alert('Virus deleted!'))
        .finally(props.history.push('/virus'))   
    }

    const handleEdit = () => {
        props.history.push({
            pathname: `/virus/create/${values.id}`,
            state: {
                id: values.id
            },
        })
    }
        const { isMounted , loadingPercentage } = state;
        return (    
            <div className="sceneBgTwo">

                <div className="buttonContainer">
                <h1 style={{ color: 'white' }}>{values.virusName}</h1>
                    <TriggersTooltips></TriggersTooltips>
                    <div className = 'model-buttons'>
                    {props.create ? null : <Button
                variant="contained"
                color="secondary"
                size = "small"
                onClick = {handleDelete}
                
                startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>}
               {props.create ? null : <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleEdit}
                    startIcon={<SaveIcon />}
                >
                    Save/Edit
                </Button>}
          {state.showComponent ? null : <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={onButtonClick}
        startIcon={<PhotoCamera />}
      >
        View Results
      </Button>    }  
      </div>
      </div>
      
      <div className="virus-container">
         
                {state.showComponent ?
           <App virusType={values.virusType} colorCode={values.primary} sizeCode={values.size} onProgress={loadingPercentage => setState({ ...state, loadingPercentage })} />:
           null
    
        }                {loadingPercentage !== 100 && <LoadingBar mr percentage = { loadingPercentage } ></LoadingBar>}
             </div>   
             </div>          

            )
    }

export default withRouter(ContainerC);



