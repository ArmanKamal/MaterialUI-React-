import React from 'react';
import {Button,Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique"
  }
})



function App() {
  return (
    <div className="">
      <Typography variant="h2" color="primary">
        Hello There
      </Typography>
       <Button color="primary" variant="outlined">Primary  Button</Button>
       <Button color=""></Button>
       <Button color="secondary">This is our material UI Button</Button>
    </div>
    
  );
}

export default App;
