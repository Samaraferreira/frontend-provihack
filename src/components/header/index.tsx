import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  more: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  toolbar: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto'
  }
}))

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">
            Mão na Massa
          </Link>
        </Typography>
        <Button color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
