import React from 'react';
import './App.css';
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";



const App = () => {
  return (
    <Grid container direction="column">
    <Grid>
      <Header/>
    </Grid>
     <Grid item container>
       <Grid item xs={false} xs={2}/>
       <Grid item xs={12} xs={8}/>
        <Content/> 
        <Grid item xs={false} xs={2}/>
      </Grid>
    </Grid>
  )
}

export default App;
