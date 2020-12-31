import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import QuestionsCarousel from '../components/QuestionsCarousel';
import Footer from '../components/Footer';

export default function Results() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Resumen</h2>
      </Container>

      <Footer />
    </div>
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
  }
}));