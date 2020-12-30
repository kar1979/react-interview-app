import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import BtnAddInterviewer from '../components/BtnAddInterviewer';
import Modal from '../components/ModalInterviewer';
import Interviewer from '../components/Interviewer';

export default function Interviewers() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  // let isOpen = false;

  const handleOpenModal = () => {
    setOpen(!isOpen);
  };

  // useEffect(){};

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Entrevistadores</h2>
      </Container>

      <Container className='interviewers'>
        <Interviewer onClick={handleOpenModal} />
        <Interviewer />
        <Interviewer />
        <Interviewer />
        <Interviewer />
        <div className='other_inter btn_inters'>
          <BtnAddInterviewer />
          <Typography variant='subtitle1'>Haz click aquí para añadir a otro entrevistador</Typography>
        </div>
      </Container>

      <Container maxWidth='xl' className='no_interviewer'>
        <h4>No se ha registrado ningún entrevistador</h4>
        <Container className='actions_inter btn_inters'>
          <BtnAddInterviewer onClick={handleOpenModal} className='' />
          <Modal modalState={isOpen} />
          <p>Haga click aquí para añadir</p>
        </Container>
      </Container>

    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .btn_inters:hover': {
      cursor: 'pointer'
    },

    '& .interviewers': {
      display: 'inline-flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },

    '& .other_inter': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '25%',
      minWidth: '25%',
      padding: '0 1em',
      margin: '1em 0',
      textAlign: 'center'
    },

    '& .no_interviewer': {
      textAlign: 'center'
    },

    '& .actions_inter': {
      maxWidth: '25%',
      minWidth: '25%'
    }
  },
}));