import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: -12,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Baugit
          </Typography>
          <Button color="inherit" onClick={event => (window.location.href = '/empresa')}>
            Empresa
          </Button>
          <Button color="inherit" onClick={event => (window.location.href = '/contacto')}>
            Contacto
          </Button>
          <Button color="inherit" onClick={event => (window.location.href = '/login')}>
            Login <Icon>power_settings_new</Icon>
          </Button>
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
