import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import BtnAddInterviewer from '../components/BtnAddInterviewer';
import Candidate from '../components/Candidate';

export default function Candidates() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <footer className={classes.root}>
      <Button variant='contained' className='back_btn' onClick={() => history.goBack()}>
        <ArrowBackRoundedIcon />
        Regresar
      </Button>

      <Button variant='contained' className='start_btn' color='primary' onClick={() => history.push(`/interview`)}>
        Comenzar
        <ArrowForwardRoundedIcon />
      </Button>
    </footer>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    '& .back_btn': {
      width: '10em',
      margin: '2em',
      backgroundColor: '#d10808',
      color: '#fff'
    },

    '& .back_btn:hover': {
      backgroundColor: '#a10303'
    },

    '& .start_btn': {
      width: '10em',
      margin: '2em'
    }
  },
}));