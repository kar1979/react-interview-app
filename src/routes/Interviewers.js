import React, { useState, useContext } from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import BtnAddInterviewer from '../components/BtnAddInterviewer';
import ModalInterviewer from '../components/ModalInterviewer';
import Interviewer from '../components/Interviewer';
import { InterviewersContext } from '../context/interviewers-context';

export default function Interviewers() {
  const classes = useStyles();
  const [ initialInters ] = useContext(InterviewersContext);
  const [ selectedInter, setSelectedInter ] = useState(null);
  const [ isOpen, setModalState ] = useState(false);

  const selectedInters = initialInters.interviewers;

  const handleModalState = (event) => {
    if (event !== undefined) {
      toSelectedInter(event);
    }
    setModalState(!isOpen);
  };

  const toSelectedInter = (interviewer) => {
    const tempSelectedInter = Number(interviewer.target.id);
    setSelectedInter(tempSelectedInter);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Entrevistadores</h2>
      </Container>

      <ModalInterviewer
        modalState={isOpen}
        totalInters={selectedInters}
        changeState={handleModalState}
        interIdSelected={selectedInter}
      />

      {selectedInters.length !== 0 ?
        <Container className='interviewers'>
          {selectedInters.map(inter => (
            <Interviewer
              key={inter.id}
              interInfo={inter}
              changeState={handleModalState}
            />
          ))}

          <div className='other_inter btn_inters'>
            <BtnAddInterviewer onClick={handleModalState} />
            <Typography variant='subtitle1'>Haz click aquí para añadir a otro entrevistador</Typography>
          </div>
        </Container>
      :
        <Container className='no_interviewer'>
          <h4>No se ha registrado ningún entrevistador</h4>
          <Container className='actions_inter btn_inters'>
            <BtnAddInterviewer onClick={handleModalState} />
            <p>Haga click aquí para añadir</p>
          </Container>
        </Container>
      }
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

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

    '& .btn_inters:hover': {
      cursor: 'pointer'
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