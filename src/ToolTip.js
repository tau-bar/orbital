import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './ToolTip.styles.scss';

export default function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const buttonStyle = {
    fontFamily: 'Quicksand',
    color: 'white',
    margin: '20px',
    fontWeight: 'bold'
  }

  const textStyle = {
    fontFamily: 'Quicksand',
    color: 'white',
    fontSize: '1.5em'
  }
  
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title={<p style={textStyle}>Drag to rotate, scroll to zoom!</p>} disableFocusListener >
            <Button style={buttonStyle}>Instructions</Button>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title={<p style={textStyle}>Rendered using Threejs and Blender</p>} disableFocusListener >
            <Button style={buttonStyle}>Tools Used</Button>
          </Tooltip>
        </Grid>
        
      </Grid>
    </div>
  );
}

// <Grid item>
// <Tooltip title={<p style={textStyle}>The spikes of the virus penetrate the host cell.
// The virus releases its mRNA and duplication occurs.</p>} disableFocusListener >
//   <Button style={buttonStyle}>Information</Button>
// </Tooltip>
// </Grid>