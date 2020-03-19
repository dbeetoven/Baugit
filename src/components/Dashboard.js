import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function Dashboard() {
  const [setValue] = React.useState();
  const handleChange = event => {
    console.log(event);

    // setValue(event.target.value);
  };

  return (
    <div class="card border-raduis">
      <div class="card-body seachCard">
        <div>
          <h6>Palabra Clave</h6>
          <TextField
            id="standard-multiline-flexible"
            label="Puesto/Empresa"
            type="text"
            placeholder="Filtrar por ..."
            multiline
            rowsMax="6"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <h6>Ubicacion</h6>
          <TextField
            id="standard-textarea"
            label="Localidad"
            type="text"
            placeholder="Capital Federal"
            multiline
            required
          />
        </div>
        <div className="col-sm-12 text-center pt-2">
          <Button variant="contained" color="primary" disableElevation>
            Filtrar
          </Button>
        </div>
      </div>
    </div>
  );
}
