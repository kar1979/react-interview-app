import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles, Container } from '@material-ui/core';
import QuestionsCarousel from '../components/QuestionsCarousel';
import Footer from '../components/Footer';
import { SkillsContext } from '../context/skills-context';

export default function Questions() {

  const questions = [
    { idQuestion: 1, category: 'html', categoryName: 'HTML', question: 'HTML significa `Hyper Text Markup Language`' },
    { idQuestion: 2, category: 'html', categoryName: 'HTML', question: 'La etiqueta correcta para salto de línea es <lb>' },
    { idQuestion: 3, category: 'html', categoryName: 'HTML', question: 'La etiqueta <body> contiene todo elcontenido visible de una aplicación web' },
    { idQuestion: 4, category: 'html', categoryName: 'HTML', question: 'La expresión `<a> http://www.google.com</a>` define correctamente un hipervinculo' },
    { idQuestion: 5, category: 'css', categoryName: 'CSS', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 6, category: 'css', categoryName: 'CSS', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 7, category: 'css', categoryName: 'CSS', question: '¿Que significa herencia?' },
    { idQuestion: 8, category: 'css', categoryName: 'CSS', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 9, category: 'git', categoryName: 'Git', question: '¿Que significa herencia?' },
    { idQuestion: 10, category: 'git', categoryName: 'Git', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 11, category: 'git', categoryName: 'Git', question: '¿Que significa herencia?' },
    { idQuestion: 12, category: 'git', categoryName: 'Git', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 13, category: 'javascript', categoryName: 'JavaScript', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 14, category: 'javascript', categoryName: 'JavaScript', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 15, category: 'javascript', categoryName: 'JavaScript', question: '¿Que significa herencia?' },
    { idQuestion: 16, category: 'javascript', categoryName: 'JavaScript', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 17, category: 'typescript', categoryName: 'TypeScript', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 18, category: 'typescript', categoryName: 'TypeScript', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 19, category: 'typescript', categoryName: 'TypeScript', question: '¿Que significa herencia?' },
    { idQuestion: 20, category: 'typescript', categoryName: 'TypeScript', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 21, category: 'react', categoryName: 'ReactJS', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 22, category: 'react', categoryName: 'ReactJS', question: '¿Que significa herencia?' },
    { idQuestion: 23, category: 'react', categoryName: 'ReactJS', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 24, category: 'react', categoryName: 'ReactJS', question: '¿Que significa herencia?' },
    { idQuestion: 25, category: 'angular', categoryName: 'Angular', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 26, category: 'angular', categoryName: 'Angular', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 27, category: 'angular', categoryName: 'Angular', question: '¿Que significa herencia?' },
    { idQuestion: 28, category: 'angular', categoryName: 'Angular', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 29, category: 'node', categoryName: 'NodeJS', question: '¿Que significa herencia?' },
    { idQuestion: 30, category: 'node', categoryName: 'NodeJS', question: '¿Que diferencia existe entre let, var y const?' },
    { idQuestion: 31, category: 'node', categoryName: 'NodeJS', question: '¿Que significa herencia?' },
    { idQuestion: 32, category: 'node', categoryName: 'NodeJS', question: '¿Que diferencia existe entre let, var y const?' }
  ];

  const classes = useStyles();
  const { url } = useRouteMatch();
  const [ skillsFromContext ] = useContext(SkillsContext);

  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));
  const skillsByCandidate = skillsFromContext.skills.filter(
    candidate => candidate.candidateId === idCandidate
  );
  let questionsByCandidate = [];
  
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