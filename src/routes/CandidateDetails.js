import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import CandidateDetail from '../components/CardCandidateDetail';
import CandidateSkills from '../components/CardCandidateSkills';
import Footer from '../components/Footer';

export default function CandidateDetails() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Candidato</h2>

        <Container className='cards_candidate'>
          <CandidateDetail />
          <CandidateSkills />
        </Container>
      </Container>

      <Footer />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    '& .cards_candidate': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0'
    }
  },
}));