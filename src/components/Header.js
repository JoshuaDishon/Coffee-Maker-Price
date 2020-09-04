import React from 'react'
import { Typography } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>({
   AcUnitIcon:{
       color: "red"
   },
   Typographystyles:{
       flex: 1
   }
}))

const Header = () => {
  const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
               <Typography className={classes.Typographystyles}>COFFEE MAKER PRICES </Typography>
               <AcUnitIcon className={classes.AcUnitIcon}/> 
            </Toolbar>
        </AppBar>
    )
}

export default Header;
