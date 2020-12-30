import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import BtnAddInterviewer from '../components/BtnAddInterviewer';
import Candidate from '../components/Candidate';
import Footer from '../components/Footer';

export default function Candidates() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Candidatos</h2>
      </Container>

      <Container className='candidates'>
        <Candidate />
        <div className='other_candidate btn_candidate'>
          <BtnAddInterviewer />
          <Typography variant='subtitle1'>Haz click aquí para añadir a otro candidato</Typography>
        </div>
      </Container>

      <Container maxWidth='xl' className='no_candidates'>
        <h4>No se ha registrado ningún candidato</h4>
        <Container className='actions_candidate btn_candidate'>
          <BtnAddInterviewer />
          <p>Haga click aquí para añadir</p>
        </Container>


      </Container>

      <Footer />

    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .btn_candidate:hover': {
      cursor: 'pointer'
    },

    '& .candidates': {
      display: 'inline-flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },

    '& .other_candidate': {
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

    '& .no_candidates': {
      textAlign: 'center'
    },

    '& .actions_candidate': {
      maxWidth: '25%',
      minWidth: '25%'
    }
  },
}));