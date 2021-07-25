import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function TriggersTooltips() {
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title={<h1 style={{ color: "lightblue"}}>Drag to rotate, scroll to zoom!</h1>} disableFocusListener >
            <Button style={{ color: "white"}}>Hover for Instructions</Button>
          </Tooltip>
        </Grid>
       
        <Grid item>
          <Tooltip title={<h1 style={{ fontSize: 15 }}>The Spikes of the virus is used to penetrate the host cell, 
          where the virus will then release its mRNA and duplication will occur. Take a look at our video animation 
          to visualise how a virus attacks our body! Click on the hamburger menu, and then click on virus on body.</h1>} disableFocusListener >
            <Button style={{ color: "white"}}>Information about Coronavirus</Button>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title={<h1 style={{ fontSize: 15 }}>Rendered using Threejs and Blender</h1>} disableFocusListener >
            <Button style={{ color: "white"}}>Tools Used</Button>
          </Tooltip>
        </Grid>
        
      </Grid>
    </div>
  );
}