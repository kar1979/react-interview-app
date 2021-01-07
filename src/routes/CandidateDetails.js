import React, { useState, useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles, Container } from '@material-ui/core';
import CardCandidateDetail from '../components/CardCandidateDetail';
import CardCandidateSkills from '../components/CardCandidateSkills';
import Footer from '../components/Footer';
import { CandidatesContext } from '../context/candidates-context';

export default function CandidateDetails() {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [ state ] = useContext(CandidatesContext);
  const [ currentCandidate, setcurrentCandidate ] = useState({});

  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));
  const totalCandidates = state.candidates;
  
  useEffect(() => {
    totalCandidates.forEach(candidate => {
      if (candidate.id === idCandidate) {
        setcurrentCandidate(candidate)
      }
    });
  }, []);
  
  return(
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Candidato</h2>

        <Container className='cards_candidate'>
          <CardCandidateDetail detailsCandidate={currentCandidate} />
          <CardCandidateSkills idCandidate={idCandidate} />
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
  }
}));