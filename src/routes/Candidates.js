import React, { useState, useContext } from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import BtnAddInterviewer from '../components/BtnAddInterviewer';
import ModalCandidate from '../components/ModalCandidate';
import Candidate from '../components/Candidate';
import Footer from '../components/Footer';
import { CandidatesContext } from '../context/candidates-context';

export default function Candidates() {
  const classes = useStyles();
  const [ initialCands ] = useContext(CandidatesContext);
  const [ selectedCandi, setSelectedCandi ] = useState(null);
  const [ isOpen, setModalState ] = useState(false);

  const selectedCands = initialCands.candidates;

  const handleModalState = (event) => {
    if (event !== undefined) {
      toSelectedCandidate(event);
    }
    setModalState(!isOpen);
  };

  const toSelectedCandidate = (candidate) => {
    const tempSelectedCandi = Number(candidate.target.id);
    setSelectedCandi(tempSelectedCandi);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <h2>Candidatos</h2>
      </Container>

      <ModalCandidate
        modalState={isOpen}
        changeState={handleModalState}
        candiIdSelected={selectedCandi}
        totalCandis={selectedCands}
      />

      {selectedCands.length !== 0 ?
        <Container className='candidates'>
          {selectedCands.map(candi => (
            <Candidate
              key={candi.id}
              candidateInfo={candi}
              changeState={handleModalState}
            />
          ))}

          <div className='other_candidate btn_candidate'>
            <BtnAddInterviewer onClick={handleModalState} />
            <Typography variant='subtitle1'>Haz click aquí para añadir a otro candidato</Typography>
          </div>
        </Container>
      :
        <Container maxWidth='xl' className='no_candidates'>
          <h4>No se ha registrado ningún candidato</h4>
          <Container className='actions_candidate btn_candidate'>
            <BtnAddInterviewer onClick={handleModalState} />
            <p>Haga click aquí para añadir</p>
          </Container>
        </Container>
      }

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

    '& .candidates': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: '8em'
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
    },

    '& .btn_candidate:hover': {
      cursor: 'pointer'
    }
  }
}));