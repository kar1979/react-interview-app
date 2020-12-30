import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, Typography, FormControl, DialogActions, Button, TextField } from '@material-ui/core';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';

export default function Modal(props) {
  const classes = useStyles();

  
  return (
    <Dialog open={props.modalState} onClose={props.changeState} className={classes.root} maxWidth='lg'>
      <div className='title'>
        <PersonAddRoundedIcon color='primary' fontSize='large' />
        <Typography variant='h5'>Nuevo entrevistador</Typography>
      </div>
      <DialogContent>
        <FormControl fullWidth>
          <Typography>Nombre completo</Typography>
          <TextField placeholder='Ingrese el nombre del empleado' />

          <Typography>ID del empleado</Typography>
          <TextField placeholder='Ingrese el ID del empleado' />

          <Typography>EID</Typography>
          <TextField placeholder='Ingrese el EID del empleado' />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color='primary' >Guardar</Button>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    '& .title': {
      display: 'flex',
      padding: '24px',

      '& h5': {
        marginLeft: '10px'
      }
    },
    '& p': {
      fontWeight: 'bold'
    },
    '& .MuiInput-root': {
      marginBottom: '2em'
    }
  }
}));