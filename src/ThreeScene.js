import React, { Component } from "react";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three-obj-mtl-loader";
import './ThreeScene.scss';
import TriggersTooltips from './ToolTip';
import LoadingBar from "./components/loading-bar/loading-bar.component";


const style = {
    height: "15vh",
    width: "50vh"

};

class VirusModel extends Component {
    //Boilerplate code starts here 
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
        const width = this.mount.clientWidth / 2;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();
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
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width *4.5 , height * 6.1) ;
        this.mount.appendChild( this.renderer.domElement );
    };

    addLights = () => {
        const lights = [];

        const color = new THREE.Color(0xff0000);

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
        const mtlLoader = new MTLLoader();

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
                    <div className="ToolTipPos">
                    <TriggersTooltips></TriggersTooltips>
                </div>
            </div>
        );  
    }
}

class Container extends Component {
    constructor() {
        super();
        this.state = {
            isMounted: true,
            loadingPercentage: 0
            };    
    }
    render() {
        const { isMounted, loadingPercentage } = this.state;
        return (
            <div className="virus-model-box">
                {isMounted && <VirusModel modelPath={this.props.modelPath} onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
                {isMounted && loadingPercentage !== 100 && <LoadingBar percentage = { loadingPercentage } />}
            </div>   
        )
    }
}

export default Container;





