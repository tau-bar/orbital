import React, { Component } from "react";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import './ThreeScene.scss';
import './ThreeScene.css';
import TriggersTooltips from './ToolTip';
import Button from '@material-ui/core/Button';
import LoadingBar from "./components/loading-bar/loading-bar.component";
import PhotoCamera from '@material-ui/icons/PhotoCamera';



const style = {
    height: "15vh",
    width: "80vh"

};

class App extends Component {

    constructor(props) {
        super(props);
    
        console.log(this.props)
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

    sceneSetup = () => {
        const width = this.mount.clientWidth * 1.61;
        const height = this.mount.clientHeight * 5.4;

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
        console.log(this.props.colorCode)

        
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
        console.log("7")
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
                console.log("2")

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
                console.log( ( loadingPercentage ) + '% loaded' );
                this.props.onProgress(loadingPercentage);
            },
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
    };
     
    render() {     
        return (
            <> 
            <div style={style} ref={ref => (this.mount = ref)} />
            </>
        );
    }
}

class Container extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            showComponent: false,
          };
        this.state = {isOpened: false};
        this._onButtonClick = this._onButtonClick.bind(this);
       
    }

    state = {isMounted: true};

    _onButtonClick() {
        this.setState({
          showComponent: !this.state.showComponent,
        });
      }

    render() {  
        console.log(this.props.sizeCode)
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (    
            <>
            <div className="sceneBg">
                <div className="sceneBg">
                <h1 style={{ color: 'white' }}>{this.props.virusName}</h1>
                    <TriggersTooltips></TriggersTooltips>
          <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={this._onButtonClick}
        startIcon={<PhotoCamera />}
      >
        View Results
      </Button>       
                </div>
                {this.state.showComponent ?
           <App virusType={this.props.virusType} colorCode={this.props.colorCode} sizeCode={this.props.sizeCode} onProgress={loadingPercentage => this.setState({ loadingPercentage })} />:
           null
        }                {isMounted && loadingPercentage !== 100 && <LoadingBar percentage = { loadingPercentage } ></LoadingBar>}
             </div>             
             </>
            )
    }
}

export default Container;



