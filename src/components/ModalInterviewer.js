import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Dialog, DialogContent, Typography, FormControl, DialogActions, Button, TextField } from '@material-ui/core';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { InterviewersContext } from '../context/interviewers-context';

export default function ModalInterviewer(props) {
  const classes = useStyles();
  const history = useHistory();
  const [ state, dispatch ] = useContext(InterviewersContext);

  const newIdInter = props.totalInters.length + 1;
  const [ idInterviewer, setIdInterviewer ] = useState('');
  const [ nameInterviewer, setNameInterviewer ] = useState('');
  const [ eidInterviewer, setEidInterviewer ] = useState('');
  const [ idEditInterVal, setIdEditInterVal ] = useState(null);

  const closeModal = props.changeState;

  const onSubmit = () => {
    if(props.interIdSelected !== 0 ) {
      dispatch({
        type: "EDIT_INTERVIEWER",
        payload: {
          id: Number(idEditInterVal),
          idInter: Number(idInterviewer),
          name: nameInterviewer,
          eid: eidInterviewer
        }
      });
    } else {
      dispatch({
        type: "ADD_INTERVIEWER",
        payload: {
          id: newIdInter,
          idInter: Number(idInterviewer),
          name: nameInterviewer,
          eid: eidInterviewer
        }
      });
    }
    closeModal();
  };

  const changeIdInter = event => {
    setIdInterviewer(event.target.value);
  };

  const changeNameInter = event => {
    setNameInterviewer(event.target.value);
  };

  const changeEidInter = event => {
    setEidInterviewer(event.target.value);
  };

  useEffect(() =>{
    if(props.interIdSelected !== 0 ) {
      props.totalInters.forEach(inter => {
        if ( inter.idInter === props.interIdSelected) {
          setIdEditInterVal(inter.id);
          setIdInterviewer(inter.idInter);
          setNameInterviewer(inter.name);
          setEidInterviewer(inter.eid);
        }
      });
    }
  }, [props.interIdSelected, props.totalInters]);

  return (
    <Dialog
      open={props.modalState}
      onClose={props.changeState}
      className={classes.root}
    >
      <div className='title'>
        <PersonAddRoundedIcon color='primary' fontSize='large' />
        <Typography variant='h5'>
          {props.interIdSelected === 0 ? `Nuevo entrevistador` : `Editar entrevistador: ${props.interIdSelected}`}
        </Typography>
      </div>

      <DialogContent>
        <FormControl fullWidth>
          <Typography>Nombre completo</Typography>
          <TextField placeholder='Ingrese el nombre del empleado' onChange={changeNameInter} value={nameInterviewer} />

          <Typography>ID del empleado</Typography>
          <TextField placeholder='Ingrese el ID del empleado' onChange={changeIdInter} value={idInterviewer} />

          <Typography>EID</Typography>
          <TextField placeholder='Ingrese el EID del empleado' onChange={changeEidInter} value={eidInterviewer} />
        </FormControl>
      </DialogContent>

      <DialogActions className='actions_modal'>
          <Button
            variant="contained"
            color='secondary'
            onClick={() => history.push(`candidates-of/${props.interIdSelected}`)}
            disabled={props.interIdSelected === 0 ? true : false }>
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