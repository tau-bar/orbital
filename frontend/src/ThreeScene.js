import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const style = {
    height: 500
};

class App extends Component {

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
        const height = this.mount.clientHeight / 2;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            50, 
            width/height, 
            1, 
            100
        );
        this.camera.position.z = 50; 
        this.controls = new OrbitControls( this.camera, this.mount );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement );
    };

    addLights = () => {
        const lights = [];

        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        lights[ 0 ].position.set( 0, 2000, 0 );
        lights[ 1 ].position.set( 1000, 2000, 1000 );
        lights[ 2 ].position.set( - 1000, - 2000, - 1000 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
    };

    startAnimationLoop = () => {
        this.renderer.render( this.scene, this.camera );
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.renderer.setSize( width, height );
        this.camera.aspect = height;
        this.camera.updateProjectionMatrix();
    };

    // Boilerplate code ends here

    //Load obj and mtl file here

    loadTheModel = () => {
        const loader = new OBJLoader();

        loader.load(
            '/assets/eleph.obj',
            ( object ) => {
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
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

class Container extends React.Component {
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
                {isMounted && <App onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
                {isMounted && loadingPercentage !== 100 && <div>Loading Coronavirus: {loadingPercentage}%</div>}
            </>
        )
    }
}

export default Container;

const rootElement = document.getElementById("root");
ReactDOM.render(<Container />, rootElement);