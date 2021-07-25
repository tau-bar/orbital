import React, { Component } from 'react';
import "./Emoji.css";
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        style: {
          transform: `translate(${this.props.from[0]}px, ${
            this.props.from[1]
          }px) rotate(${Math.random() * 360}deg)`
        }
      };
      this.setStyle = this.setStyle.bind(this);
    }
  
    componentDidMount() {
      setTimeout(this.setStyle, 1);
    }
  
    setStyle() {
      const movingStyle = `translate(${Math.random() *
        window.innerHeight *
        2}px, ${Math.random() * window.innerWidth * 2}px) rotate(${Math.random() *
        360}deg)`;
      const time = this.props.time ? this.props.time : 20;
      const size = this.props.size ? this.props.size : "150px";
      const style = {
        position: "absolute",
        zIndex: "-1",
        transform: movingStyle,
        transition: `transform ${time}s ease-out`,
        MsTransform: movingStyle,
        MsTransition: `transform ${time}s ease-out`,
        Webkitransform: movingStyle,
        WebkitTransition: `transform ${time}s ease-out`,
        overflow: "visible",
        willChange: "transform"
      };
      const imgSize = {
        width: size,
        height: "auto"
      };
      this.setState({
        style: style,
        size: imgSize
      });
      setTimeout(this.setStyle, time * 1000);
    }
  
    render() {
      const { style, size } = this.state;
  
      return (
        <div style={style} >
          <img style={size} srcSet={this.props.what} alt="img" />
        </ div>
      );
    }
  }
  
  class Sky extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        moves: []
      };
      this.movement = this.movement.bind(this);
    }
  
    componentDidMount() {
      const many = this.props.how;
      const temp_moves = [];
      for (let i = 0; i < many; i++) {
        temp_moves.push(this.movement());
      }
      this.setState({
        moves: temp_moves
      });
    }
  
    movement() {
      const rotation = Math.floor((Math.round(Math.random()) * 2 - 1) * 600);
      const fromX = Math.floor(Math.random() * window.innerWidth);
      const fromY = Math.floor(Math.random() * window.innerHeight * 1.5);
      const toX = Math.floor(
        Math.random() * window.innerWidth * (Math.round(Math.random()) * 2 - 1)
      );
      const toY = Math.floor(
        Math.random() *
          window.innerHeight *
          1.5 *
          (Math.round(Math.random()) * 2 - 1)
      );
      const temp = {
        rotation,
        fromX,
        fromY,
        toX,
        toY
      };
      return temp;
    }
  
    render() {
      const items = this.props.images;
      const outerStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        zIndex: "-1",
        background: this.props.background ? this.props.background : ""
      };
  
      return (
        <div style={outerStyle} id="sky">
          {this.state.moves.map((e, i) => {
            const conditional = Math.floor(
              Math.random() * Object.keys(items).length
            );
  
            return (
              <Item
                what={items[conditional]}
                from={[e.fromX, e.fromY]}
                to={[e.toX, e.toY]}
                rotation={e.rotation}
                size={this.props.size}
                time={this.props.time}
                key={i}
              />
            );
          })}
        </div>
      );
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }
  
  class Emoji extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        mode: "space",
        background: "#000000",
        how: 100,
        showComponent: false,
        isOpened: false
      };
      
      this.handleClick = this.handleClick.bind(this);
      this._onButtonClick = this._onButtonClick.bind(this);
      
    }

    
    state = {isMounted: true};
    _onButtonClick() {
      this.setState({
        showComponent: !this.state.showComponent,
      });
    }

    handleClick(e) {
      this.setState({
        mode: e.target.value,
        how: e.target.attributes.how.value,
        background: e.target.attributes.background.value
      });
    }
    render() {

    
      const { mode, background, how } = this.state;
      const {isMounted = true, loadingPercentage = 0} = this.state;
      const modes = {
        space: {
          0: "/assets/Emoji/cholera.png",
        },
        black: {
          0: "/assets/Emoji/black.png",
          
        },
        
        ebola: {
          0: "/assets/Emoji/ebola.png",
         
        },
        corona: {
          0: "/assets/Emoji/corona.png",
         
        },
        
      };
      return (
        <div className="App">
         
      
          <div className="title">
            
            <div className="git">
              <h1>Viruses </h1>
            </div>
            <button
              how={10}
              background={"#000000"}
              value={"black"}
              onClick={this.handleClick}
            >
              Black Plague 
            </button>
            <button
              how={3}
              background={"#000000"}
              value={"space"}
              onClick={this.handleClick}
            >
              Cholera
            </button>
            
            <button
              how={0}
              background={"#000000"}
              value={"ebola"}
              onClick={this.handleClick}
            >
              Ebola
            </button>
            <button
              how={0}
              background={"#000000"}
              value={"corona"}
              onClick={this.handleClick}
            >
              Covid-19/SARS/Spanish-Flu
            </button>
          </div>
          <Sky
            images={modes[mode]}
            how={this.props.how}
            size={"100px"}
            time={30}
            background={background}
          />
        </div>
      );
    }
  }
  
//export default Emoji;

class Final extends React.Component {

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
         <Emoji how={this.props.how}  />:
         null
      }                 
           </div>     
           </>
          )      
  }
}

export default Final;
  