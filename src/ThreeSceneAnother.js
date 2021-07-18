import React, { Component } from "react";
import { useState } from "react";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three-obj-mtl-loader";
import './ThreeScene.css';
import TriggersTooltips from './ToolTip';
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter
} from "three";


const style = {
    height: "15vh",
    width: "80vh"

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
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();
        /*
        this.scene.background = new THREE.Color( 0xff0000 );
        */

        /*
        const bgTexture = loader.load("/assets/1.jpg",
            function ( texture ) {
                var img = texture.image;
                var bgWidth= img.width;
                var bgHeight = img.height;
            } );
            */
            
            
 
            var bgTexture = new THREE.TextureLoader().load("/assets/tenor.gif");
            bgTexture.minFilter = THREE.LinearFilter;
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
        this.renderer.setClearColor( 0x000000, 0 );

        //first
        this.renderer.setSize( width *4.5 , height * 6.1) ;
        this.mount.appendChild( this.renderer.domElement );
    };

    addLights = () => {
        const lights = [];
        //color code here
        const color1 = new THREE.Color(0xFFFFFF);
        const color2 = new THREE.Color(0xFFFFFF);
        const color3 = new THREE.Color(0xFFFFFF);


        lights[ 0 ] = new THREE.PointLight( color1, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( color2, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( color3, 1, 0 );

        lights[ 0 ].position.set( 0, 2000, 0 );
        lights[ 1 ].position.set( 1000, 2000, 1000 );
        lights[ 2 ].position.set( - 1000, - 2000, - 1000 );

        
        /*
        const directionalLight = new THREE.DirectionalLight(0xffffff,100);
        directionalLight.position.set(0,1,0);
        directionalLight.castShadow= true;
        this.scene.add(directionalLight);
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.scene.add( light );
        */
        
        /*
        const light = new THREE.PointLight(0xc4c4c4,10);
        light.position.set(0,300,500);
        this.scene.add(light);

        const hlight = new THREE.AmbientLight(0x404040,100);
        this.scene.add(hlight);
        */

        

        

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );

        
    };

    startAnimationLoop = () => {
        this.controls.update();
        this.renderer.render( this.scene, this.camera );
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    /*
    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        //second
        this.renderer.setSize( width, height);
        this.camera.aspect = height;
        this.camera.updateProjectionMatrix();
    };
    */

    // Boilerplate code ends here

    //Load obj and mtl file here




    loadTheModel = () => {
        const loader = new OBJLoader();
        const mtlLoader = new MTLLoader();
        const loadingManager = new THREE.LoadingManager();
        

        const textureLoader =  new THREE.TextureLoader(loadingManager);

        
        const material = new THREE.MeshLambertMaterial({map: textureLoader.load(this.props.texturePath)});
        const material2 = new THREE.MeshLambertMaterial({map:
            textureLoader.load(this.props.texturePath),
            emissiveIntensity : 0.6,
            bumpScale: 1,
            metalness: 1.0,
            roughness: 1});
        

        /*
        const material = new THREE.MeshLambertMaterial({map: textureLoader.load(this.props.texturePath)});
        const material2 = new THREE.MeshLambertMaterial({map:
            textureLoader.load(this.props.texturePath),
            emissiveIntensity : 0.6,
            bumpScale: 1,
            metalness: 1.0,
            roughness: 1.0});
            */

            

        /*
        mtlLoader.load('/assets/virusami.mtl', function(materials) {
            materials.preload();
            loader.setMaterials(materials);  
             
        });

        */

        
        
        var OBJFile = '/assets/finallyMobi.obj';
var MTLFile = '/assets/finallyMobi.mtl';
var JPGFile = '/assets/mobWrap.png';

/*
mtlLoader
.load(MTLFile, function (materials) {
    materials.preload();
    loader
        .setMaterials(materials)
        .load(OBJFile, function (object) {
            object.position.y = - 95;
            var texture = new THREE.TextureLoader().load(JPGFile);

            object.traverse(function (child) {   // aka setTexture
                if (child instanceof THREE.Mesh) {
                    child.material.map = texture;
                }
            });
            this.scene.add(object);
        });
});
*/
        
        /*
        const mtlLoader = new MTLLoader();
        mtlLoader.load("/assets/ebola.mtl",null,(materials)=>{
            loader.setMaterials(materials);
            */
        
            
        


        
        
        loader.load(
            /*
            '/assets/eleph.obj'
            */
           this.props.modelPath, 
            ( object ) => {
                var cent = new THREE.Vector3();
                var size = new THREE.Vector3();
                var bbox = new THREE.Box3().setFromObject(object);
                bbox.getCenter(cent);
                bbox.getSize(size);

                //Rescale the object to normalized space
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
        //These are just some random groups to demonstrate multi material, you need to set these up so they actually work for your object, either in code or in your 3D editor
        geo.addGroup(0,geo.getAttribute("position").count/2,0);
        geo.addGroup(geo.getAttribute("position").count/2,
        geo.getAttribute("position").count/2,1);
        //Mesh with multiple materials for material parameter
        const obj = new THREE.Mesh(geo, mats);
        obj.scale.multiplyScalar(1.0 / maxAxis);

                bbox.setFromObject(obj);
                bbox.getCenter(cent);
                bbox.getSize(size);

                
                
                obj.position.x = -cent.x;
                obj.position.y = -cent.y;
                obj.position.z = -cent.z;
        //obj.position.y = 3;

                

  /*
            object.traverse(function (child) {   // aka setTexture
                if (child instanceof THREE.Mesh) {
                    console.log("threeMesh instance")
                    child.material.map = texture;
                }
            });
            */

            
/*
               
                const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const cubes = [];  // just an array we can use to rotate the cubes
  const loader = new THREE.TextureLoader();

  const material = new THREE.MeshBasicMaterial({
    map: loader.load('/assets/mobWrap.png'),
  });
  const cube = new THREE.Mesh(geometry, material);
  this.scene.add(cube);
  cubes.push(cube);
  */
                
    


                
                this.scene.add( obj );

                
                
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

            },
            
        
        );
        /*
    })
    */
        
    };
    
    

            
    render() {
     
        return (
            <> 
            <div style={style} ref={ref => (this.mount = ref)} />
            <div className="ToolTipPos">
            <TriggersTooltips></TriggersTooltips>
            </div>
            </>
        );
        
    }
}

class Container extends React.Component {
    state = {isMounted: true};
    
    

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            
            <div id="canvas">
            <div className="LoadingAnimation">
        
                {isMounted && <App texturePath={this.props.img} modelPath={this.props.modelPath} onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
                {isMounted && loadingPercentage !== 100 && <div className = "LoadingBar"> Loading Virus Model: {loadingPercentage}%</div>}
            </div>   
            
      
      
    
            
        
          
         
         </div>
        )
    }
}

export default Container;