import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}))

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Mão na Massa
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
