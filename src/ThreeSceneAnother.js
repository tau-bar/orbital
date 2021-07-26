import React, { Component, useState, useContext, useEffect } from "react";
import { UserContext } from "./context/UserProvider";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

import TriggersTooltips from './ToolTip';
import LoadingBar from "./components/loading-bar/loading-bar.component";
import { withRouter } from 'react-router';
import { getVirus } from "./firebase/firebase.utils";
import './ThreeScene.scss';

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
        
        
        const width = window.innerWidth;
        const height = window.innerHeight*0.7;
        this.scene = new THREE.Scene();    
        this.scene.background = null;
        this.camera = new THREE.PerspectiveCamera(
            30, 
            width/height, 
            2, 
            200
        );
        this.camera.position.z = 5; 
        this.controls = new OrbitControls( this.camera, this.mount );
        this.controls.minDistance=3
        this.controls.maxDistance=8
        this.controls.autoRotate=true
        this.controls.update();     
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        // this.renderer.setClearColor( 0x000000, 0 );
        this.renderer.setSize( width, height) ;
        this.mount.appendChild( this.renderer.domElement );
    };

    addLights = () => {
        if (this.props.modelPath !== "/assets/orthopox.obj" && this.props.modelPath !== "/assets/yersinia.obj") {
        const lights = [];

        const color1 = new THREE.Color(0xFFFFFF);
        const color2 = new THREE.Color(0xFFFFFF);
        const color3 = new THREE.Color(0xFFFFFF);

        lights[ 0 ] = new THREE.PointLight( color1, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( color2, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( color3, 1, 0 );

        lights[ 0 ].position.set( 0, 2000, 0 );
        lights[ 1 ].position.set( 1000, 2000, 1000 );
        lights[ 2 ].position.set( - 1000, - 2000, - 1000 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
        }    
    };

    startAnimationLoop = () => {
        this.controls.update();
        this.renderer.render( this.scene, this.camera );
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    loadTheModel = () => {
        const loader = new OBJLoader();
        //const mtlLoader = new MTLLoader();
        const loadingManager = new THREE.LoadingManager();
        

        const textureLoader =  new THREE.TextureLoader(loadingManager);

        
        const material = new THREE.MeshLambertMaterial({map: textureLoader.load(this.props.texturePath)});
        const material2 = new THREE.MeshLambertMaterial({map:
            textureLoader.load(this.props.texturePath),
            emissiveIntensity : 0.6,
            bumpScale: 1,
            metalness: 1.0,
            roughness: 1});

        loader.load(
           this.props.modelPath, 
            ( object ) => {
                var cent = new THREE.Vector3();
                var size = new THREE.Vector3();
                var bbox = new THREE.Box3().setFromObject(object);
                bbox.getCenter(cent);
                bbox.getSize(size);

                var maxAxis = Math.max(size.x, size.y, size.z);
                object.scale.multiplyScalar(1.0 / maxAxis);

                bbox.setFromObject(object);
                bbox.getCenter(cent);
                bbox.getSize(size);
                
                object.position.x = -cent.x;
                object.position.y = -cent.y;
                object.position.z = -cent.z;

                var geo = object.children[0].geometry;
        var mats = [material, material2];
        geo.addGroup(0,geo.getAttribute("position").count/2,0);
        geo.addGroup(geo.getAttribute("position").count/2,
        geo.getAttribute("position").count/2,1);
        const obj = new THREE.Mesh(geo, mats);        
        obj.scale.multiplyScalar(1.0 / maxAxis);


                bbox.setFromObject(obj);
                bbox.getCenter(cent);
                bbox.getSize(size);
              
                obj.position.x = -cent.x;
                obj.position.y = -cent.y;
                obj.position.z = -cent.z;
                if (this.props.modelPath === "/assets/orthopox.obj") {
                    this.scene.add( object ); 
                    const reds = [];
 
        const red1 = new THREE.Color(0x6e4c4b);
        const red2 = new THREE.Color(0xEE4B2B);
        const red3 = new THREE.Color(0x6E260E);


        reds[ 0 ] = new THREE.PointLight( red1, 1, 0 );
        reds[ 1 ] = new THREE.PointLight( red2, 1, 0 );
        reds[ 2 ] = new THREE.PointLight( red3, 1, 0 );

        reds[ 0 ].position.set( 0, 2000, 0 );
        reds[ 1 ].position.set( 1000, 2000, 1000 );
        reds[ 2 ].position.set( - 1000, - 2000, - 1000 );

        
        this.scene.add( reds[ 0 ] );
        this.scene.add( reds[ 1 ] );
        this.scene.add( reds[ 2 ] ); 
                    
                } else if (this.props.modelPath === "/assets/yersinia.obj" || this.props.modelPath === "/assets/ebolavirus.obj") {
                    this.scene.add( object ); 
                    const greens = [];

        const green1 = new THREE.Color(0x66ff00);
        const green2 = new THREE.Color(0x228B22);
        const green3 = new THREE.Color(0x00FF00);


        greens[ 0 ] = new THREE.PointLight( green1, 1, 0 );
        greens[ 1 ] = new THREE.PointLight( green2, 1, 0 );
        greens[ 2 ] = new THREE.PointLight( green3, 1, 0 );

        greens[ 0 ].position.set( 0, 2000, 0 );
        greens[ 1 ].position.set( 1000, 2000, 1000 );
        greens[ 2 ].position.set( - 1000, - 2000, - 1000 );

        
        this.scene.add( greens[ 0 ] );
        this.scene.add( greens[ 1 ] );
        this.scene.add( greens[ 2 ] ); 
                }else {
                    this.scene.add( obj );
                }        

                const el = this.scene.getObjectByName("Elephant_4");             
                this.model = el;
            },
             ( xhr ) => {
                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                this.props.onProgress(loadingPercentage);
            },
             ( error ) => {
                console.log( 'An error happened:' + error );
            },        
        );
    };
    render() {
        return (
            <div className="sceneBg"> 
            <div /*style={style}*/ ref={ref => (this.mount = ref)} />
            </div>
        );
    }
}

const Container = (props) => {
    const [state, setState] = useState({
        isMounted: true,
        loadingPercentage: 0
    })
    const [values, setValues] = useState('')

    const { isMounted, loadingPercentage } = state;
    const user = useContext(UserContext);

    useEffect(() => {
        if (props.history.location.state && user != null) {
            const getVirusData = async () => {
                if (user !== null) {
                    const virus = await getVirus(user, props.history.location.state.id);
      
                    await setValues({
                      id: props.history.location.state.id,
                      ...virus
                    })
                }
            }
            getVirusData();
        }
      }, [])



    const title = props.modelPath.split('/')
    const realTitle = title[2].split('.')
    
        return (    
        <div className ='virus-canvas'>
            <div className="LoadingAnimation">
                <h1 style={{ color: 'white' }}>{realTitle[0]}</h1>
                <TriggersTooltips></TriggersTooltips>
            </div>
            <div className="LoadingAnimation" >
            <div className="sceneBg">
            {isMounted && <App texturePath={props.img} modelPath={props.modelPath} onProgress={loadingPercentage => setState({ ...state, loadingPercentage: loadingPercentage })} />}
            </div>
            {isMounted && loadingPercentage !== 100 && <LoadingBar percentage = { loadingPercentage } ></LoadingBar>}
            </div>   
         </div>
        )
}

export default withRouter(Container);