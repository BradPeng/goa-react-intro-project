import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import app_bar_icon from './People.png';

function App_Bar() {
  return (
    <div>
      <AppBar style={{ background: '#1776D2', top: 0 }} position="fixed">
        <Toolbar>
          <img src={app_bar_icon} id="PeoplePicture" style={{ paddingRight: 20, height: 15 }} />
          <Typography variant="h6">Game of Apps Summer Intern</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default App_Bar;
