import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import QuestionsCarousel from '../components/QuestionsCarousel';
import Footer from '../components/Footer';

export default function Questions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Preguntas</h2>
      </Container>

      <QuestionsCarousel />

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