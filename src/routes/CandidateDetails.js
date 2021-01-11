import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { makeStyles, Container, Button } from '@material-ui/core';
import CardCandidateDetail from '../components/CardCandidateDetail';
import CardCandidateSkills from '../components/CardCandidateSkills';
import Footer from '../components/Footer';
import { CandidatesContext } from '../context/candidates-context';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

export default function CandidateDetails() {
  const classes = useStyles();
  const history = useHistory();
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
  });
  
  return(
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Candidato</h2>

        <Container className='cards_candidate'>
          <CardCandidateDetail detailsCandidate={currentCandidate} widthContainer={'48%'}/>
          <CardCandidateSkills idCandidate={idCandidate} />
        </Container>
      </Container>

      <Button variant='contained' className='start_btn' color='primary' onClick={() => history.push(`/interview/${idCandidate}`)}>
        Comenzar
        <ArrowForwardRoundedIcon />
      </Button>
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
    },
    '& .start_btn': {
      position: 'absolute',
      width: '10em',
      zIndex: '100',
      bottom: '4em',
      right: '0',
      margin: '2em'
    }
  }
}));