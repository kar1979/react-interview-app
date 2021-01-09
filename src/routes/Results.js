import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { makeStyles, Container, Button, Typography } from '@material-ui/core';
import { CandidatesContext } from '../context/candidates-context';
import CardCandidateDetail from '../components/CardCandidateDetail';

export default function Results() {
  const classes = useStyles();
  const history = useHistory();
  const [ candidateDetails ] = useContext(CandidatesContext);
  
  const { url } = useRouteMatch();
  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));
  const selectedCandidate = candidateDetails.candidates.filter(
    candidate => candidate.id === idCandidate
  );

  console.log(selectedCandidate);
  return(
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Resumen</h2>
      </Container>

      <CardCandidateDetail detailsCandidate={selectedCandidate[0]} />

      <Container>
        <Typography variant='h5'>Resultados</Typography>

        <Container>
          <Typography variant='subtitle2' color='secondary'>Skill</Typography>
        </Container>

        <Container>
          <Typography variant='subtitle2' color='secondary'>Puntaje</Typography>
        </Container>
      </Container>

      <Button variant='contained' className='finish_btn' color='primary' onClick={() => history.push(`/`)}>
        Finalizar
      </Button>
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

    '& .finish_btn': {
      position: 'absolute',
      right: '2em',
      bottom: '100px',
      zIndex: '99'
    }
  }
}));