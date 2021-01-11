import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles, Container } from '@material-ui/core';
import QuestionsCarousel from '../components/QuestionsCarousel';
import Footer from '../components/Footer';
import { SkillsContext } from '../context/skills-context';
import { AnswersContext } from '../context/answers-context';

export default function Questions() {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [ skillsFromContext ] = useContext(SkillsContext);
  const [ totalQuestions ] = useContext(AnswersContext);

  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));
  const skillsByCandidate = skillsFromContext.skills.filter(
    candidate => candidate.candidateId === idCandidate
  );
  let questionsByCandidate = [];
  const questions = totalQuestions.questions;
  
  const setQuestionsByCandidate = () => {
    questions.filter( question => {
      skillsByCandidate[0].categories.forEach((category) => {
        if(question.category === category.category) {
          questionsByCandidate.push(question);
        }
      });
    });
  }

  return (
    <div className={classes.root}>
      {setQuestionsByCandidate()}

      <Container maxWidth='xl'>
        <h2>Preguntas</h2>
      </Container>

      <QuestionsCarousel
        questionsCandidate={questionsByCandidate}
        idCan={idCandidate}
      />

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