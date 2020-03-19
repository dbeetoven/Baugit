import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';

import React from 'react';
import './LoginPage.scss';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  media: {
    height: 280,
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const [setValue] = React.useState('Controlled');
  const subtitle = 'Lleva tu carrera a un nuevo nivel';
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="loginPage">
        <Card className="card">
          <CardHeader
            title={<h2>Baugit</h2>}
            style={{ textAlign: 'center' }}
            subheader={subtitle}
          ></CardHeader>
          <CardContent className="cardContent">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <TextField
                      id="standard-multiline-flexible"
                      label="Email"
                      type="email"
                      placeholder="Email"
                      multiline
                      rowsMax="4"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <TextField
                      id="standard-textarea"
                      label="Contraseña"
                      type="password"
                      placeholder="Password"
                      multiline
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-12 text-center pt-2">
                  <Button variant="contained" color="primary" disableElevation>
                    Iniciar Sesion
                  </Button>
                </div>
              </div>
              <hr />
              <div className="col-12 pt-2">
                <div className="row">
                  <div className="col-sm-12 col-md-6 text-left">
                    <Button href="#text-buttons" color="primary">
                      <span color="primary"> Crear Cuenta</span>
                    </Button>
                  </div>
                  <div className="col-12 col-md-6 text-right">
                    <Button href="#text-buttons" color="primary">
                      Has olvidado tu contraseña?
                    </Button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-12 pt-2">
                <h4>Or</h4>
              </div>
            </div>
          </CardContent>

          <CardActions className="cardAction">
            <Button variant="contained" color="secondary" disableElevation>
              Google
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Facebook
            </Button>
          </CardActions>
        </Card>
      </div>
    </form>
  );
}
