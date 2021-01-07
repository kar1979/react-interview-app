import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  FormControl,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem
} from '@material-ui/core';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { CandidatesContext } from '../context/candidates-context';

export default function ModalCandidate(props) {
  const classes = useStyles();
  const history = useHistory();
  const [ state, dispatch ] = useContext(CandidatesContext);

  const newIdCandi = props.totalCandis.length + 1;
  const [ idEditCandidate, setIdEditCandidate ] = useState(null);
  const [ nameCandidate, setNameCandidate ] = useState('');
  const [ emailCandidate, setEmailCandidate ] = useState('');
  const [ typeCandidate, setTypeCandidate ] = useState('');

  const closeModal = props.changeState;
  let { url } = useRouteMatch();

  const onSubmit = () => {
    if(props.candiIdSelected !== 0 ) {
      dispatch({
        type: "EDIT_INTERVIEWER",
        payload: {
          id: Number(idEditCandidate),
          name: nameCandidate,
          email: emailCandidate,
          type: typeCandidate
        }
      });
    } else {
      dispatch({
        type: "ADD_CANDIDATES",
        payload: {
          id: newIdCandi,
          name: nameCandidate,
          email: emailCandidate,
          type: typeCandidate
        }
      });
    }
    closeModal();
  };

  const changeNameCandidate = event => {
    setNameCandidate(event.target.value);
  };

  const changeEmailCandidate = event => {
    setEmailCandidate(event.target.value);
  };

  const changeTypeCandidate = event => {
    setTypeCandidate(event.target.value);
  };

  useEffect(() => {
    if(props.candiIdSelected !== 0 ) {
      props.totalCandis.forEach(candi => {
        if ( candi.id === props.candiIdSelected) {
          setIdEditCandidate(candi.id);
          setNameCandidate(candi.name);
          setEmailCandidate(candi.email);
          setTypeCandidate(candi.type);
        }
      });
    }
  }, [props.candiIdSelected, props.totalCandis]);

  return (
    <Dialog
      open={props.modalState}
      onClose={props.changeState}
      className={classes.root}
    >
      <div className='title'>
        <PersonAddRoundedIcon color='primary' fontSize='large' />
        <Typography variant='h5'>
          {props.candiIdSelected === 0 ? `Nuevo candidato` : `Editar candidato: ${props.candiIdSelected}`}
        </Typography>
      </div>

      <DialogContent>
        <FormControl fullWidth>
          <Typography>Nombre completo</Typography>
          <TextField placeholder='Ingrese el nombre del candidato' onChange={changeNameCandidate} value={nameCandidate} />

          <Typography>Correo electrónico</Typography>
          <TextField placeholder='Ingrese el ID del empleado' onChange={changeEmailCandidate} value={emailCandidate} />

          <Typography>Tipo</Typography>
          <Select
            value={typeCandidate}
            onChange={changeTypeCandidate}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value=''>Seleccione el tipo</MenuItem>
            <MenuItem value={'interno'}>Interno</MenuItem>
            <MenuItem value={'externo'}>Externo</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>

      <DialogActions className='actions_modal'>
          <Button
            variant="contained"
            color='secondary'
            onClick={() => history.push(`${url}/candidate/${props.candiIdSelected}`)}
            disabled={props.candiIdSelected === 0 ? true : false }>
            Continuar
          </Button>
        <Button variant="contained" color='primary' onClick={onSubmit}>Guardar</Button>
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
    },
    '& .actions_modal': {
      justifyContent: 'space-between'
    }
  }
}));