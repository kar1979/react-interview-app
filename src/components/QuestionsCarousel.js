import React, { useState, useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles, useTheme, MobileStepper, Paper, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, TextField } from '@material-ui/core';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { SkillsContext } from '../context/skills-context';

const questions = [
  { category: 'html', categoryName: 'HTML', question: 'HTML significa `Hyper Text Markup Language`' },
  { category: 'html', categoryName: 'HTML', question: 'La etiqueta correcta para salto de línea es <lb>' },
  { category: 'html', categoryName: 'HTML', question: 'La etiqueta <body> contiene todo elcontenido visible de una aplicación web' },
  { category: 'html', categoryName: 'HTML', question: 'La expresión `<a> http://www.google.com</a>` define correctamente un hipervinculo' },
  { category: 'css', categoryName: 'CSS', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'css', categoryName: 'CSS', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'css', categoryName: 'CSS', question: '¿Que significa herencia?' },
  { category: 'css', categoryName: 'CSS', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'git', categoryName: 'Git', question: '¿Que significa herencia?' },
  { category: 'git', categoryName: 'Git', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'git', categoryName: 'Git', question: '¿Que significa herencia?' },
  { category: 'git', categoryName: 'Git', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'javascript', categoryName: 'JavaScript', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'javascript', categoryName: 'JavaScript', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'javascript', categoryName: 'JavaScript', question: '¿Que significa herencia?' },
  { category: 'javascript', categoryName: 'JavaScript', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'typescript', categoryName: 'TypeScript', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'typescript', categoryName: 'TypeScript', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'typescript', categoryName: 'TypeScript', question: '¿Que significa herencia?' },
  { category: 'typescript', categoryName: 'TypeScript', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'react', categoryName: 'ReactJS', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'react', categoryName: 'ReactJS', question: '¿Que significa herencia?' },
  { category: 'react', categoryName: 'ReactJS', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'react', categoryName: 'ReactJS', question: '¿Que significa herencia?' },
  { category: 'angular', categoryName: 'Angular', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'angular', categoryName: 'Angular', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'angular', categoryName: 'Angular', question: '¿Que significa herencia?' },
  { category: 'angular', categoryName: 'Angular', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'node', categoryName: 'NodeJS', question: '¿Que significa herencia?' },
  { category: 'node', categoryName: 'NodeJS', question: '¿Que diferencia existe entre let, var y const?' },
  { category: 'node', categoryName: 'NodeJS', question: '¿Que significa herencia?' },
  { category: 'node', categoryName: 'NodeJS', question: '¿Que diferencia existe entre let, var y const?' }
];

export default function QuestionsCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [ state ] = useContext(SkillsContext);

  const [ questionsByCandi, setQuestionsByCandi ] = useState([]);
  const [ skillsByCandidate, setSkillsByCandidate ] = useState([]);
  const [ activeQuestion, setActiveQuestion ] = useState(0); 
  const maxQuestions = questionsByCandi.length;

  let { url } = useRouteMatch();
  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));

  useEffect(() => {
    let tempQuestions = [];

    state.skills.forEach(candidate => {
      if (candidate.candidateId === idCandidate) {
        setSkillsByCandidate(candidate.categories);
      }
    });

    questions.forEach(question => {
      skillsByCandidate.forEach(skill => {
        if (question.category === skill.category) {
          question.id = tempQuestions.length + 1;
          tempQuestions.push(question);
        }
      });
    });
    setQuestionsByCandi(tempQuestions);
  }, []);

  console.log(questionsByCandi);

  const handleNext = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
  };

  const handleBack = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
  };
  
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography color='textSecondary' variant='h5'>{questionsByCandi[activeQuestion].categoryName}</Typography>

        <Typography variant='h5'>{questionsByCandi[activeQuestion].question}</Typography>

        <FormControl component="fieldset" >
          <RadioGroup className='options' value={value} onChange={handleChange} >
            <FormControlLabel value="correcto" control={<Radio color='primary' />} label="Correcto" />
            <FormControlLabel value="incorrecto" control={<Radio color='primary' />} label="Incorrecto" />
          </RadioGroup>
        </FormControl>

        <TextField
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows={4}
          variant="outlined"
        />

      </Paper>

      <MobileStepper
        className='carousel_actions'
        steps={maxQuestions}
        position="static"
        variant="text"
        activeStep={activeQuestion}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeQuestion === maxQuestions - 1}>
            {theme.direction === 'rtl' ? <ArrowBackIosRoundedIcon color='primary' /> : <ArrowForwardIosRoundedIcon color='primary' />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeQuestion === 0}>
            {theme.direction === 'rtl' ? <ArrowForwardIosRoundedIcon color='primary' /> : <ArrowBackIosRoundedIcon color='primary' />}
          </Button>
        }
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    '& .options': {
      flexDirection: 'initial'
    },

    '& .carousel_actions': {
      background: 'none',

      '& button': {
        top: '-10em'
      },

      '& svg':{
        fontSize: '7em'
      }
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& h5': {
      margin: '1rem 0'
    },

    '& fieldset': {
      marginBottom: '1rem'
    }
  }
}));