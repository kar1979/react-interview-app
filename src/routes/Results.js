import React, { useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { makeStyles, Container, Button, Typography, TextField } from '@material-ui/core';
import { CandidatesContext } from '../context/candidates-context';
import { SkillsContext } from '../context/skills-context';
import { AnswersContext } from '../context/answers-context';

import CardCandidateDetail from '../components/CardCandidateDetail';
import SkillsSelected from '../components/SkillsSelected';
import Qualification from '../components/Qualification';

export default function Results() {
  const classes = useStyles();
  const history = useHistory();
  const [ candidateDetails ] = useContext(CandidatesContext);
  const [ candidateSkills ] = useContext(SkillsContext);
  const [ candidateAnswer ] = useContext(AnswersContext);
  
  const { url } = useRouteMatch();
  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));
  
  const selectedCandidate = candidateDetails.candidates.filter(
    candidate => candidate.id === idCandidate
  );
  const skillsByCandidate = candidateSkills.skills.filter(
    skill => skill.id === idCandidate
  );

  const answersByCandidate = candidateAnswer.answers.answers.filter(
    answer => answer.idCandidate === idCandidate
  );

  const skills = skillsByCandidate[0].categories;
  let questionsByCandidate = [];

  const setQuestionsByCandidate = () => {
    candidateAnswer.questions.filter( question => {
      skillsByCandidate[0].categories.forEach((category) => {
        if(question.category === category.category) {
          questionsByCandidate.push(question);
        }
      });
    });
    
  }
  
  return(
    <div className={classes.root}>
      {setQuestionsByCandidate()}
      <Container maxWidth='xl'>
        <h2>Resumen</h2>
      </Container>

      <Container className='principal_container'>
        <Container className='container_result'>
          <Typography variant='h5'>Datos del candidato</Typography>
          <CardCandidateDetail detailsCandidate={selectedCandidate[0]} widthContainer={'100%'} />
        </Container>

        <Container className='container_result'>
          <Typography variant='h5'>Resultados</Typography>

          <Container className='container_skill'>
            <Typography variant='subtitle2' color='secondary'>Skill</Typography>
            <SkillsSelected actualSkills={skills} />
          </Container>

          <Container className='container_skill'>
            <Typography variant='subtitle2' color='secondary'>Puntaje</Typography>
            <Qualification
              questionsCandidate={questionsByCandidate}
              answersCandidate={answersByCandidate}
              actualSkills={skills}
            />
          </Container>
        </Container>

        <Container className='container_result'>
          <Typography variant='h5'>Comentarios:</Typography>
          <TextField
            multiline
            rows={7}
            variant="outlined"
            value=""
            fullWidth
          />
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

    '& .principal_container': {
      padding: '0px'
    },

    '& .container_result': {
      display: 'inline-block',
      width: '50%',
      verticalAlign: 'top',

      '& h5': {
        margin: '1.5em 0 .5em'
      },

      '& .container_skill': {
        width: '50%',
        display: 'inline-block',
        verticalAlign: 'top',
      }
    },

    '& .finish_btn': {
      position: 'absolute',
      right: '2em',
      bottom: '100px',
      zIndex: '99'
    }
  }
}));