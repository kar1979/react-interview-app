import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  useTheme,
  MobileStepper,
  Paper,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField } from '@material-ui/core';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { AnswersContext } from '../context/answers-context';

export default function QuestionsCarousel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [ state, dispatch ] = useContext(AnswersContext);

  const questionsByCandidate = props.questionsCandidate;
  const maxQuestions = props.questionsCandidate.length;
  const idCandidate = props.idCan;
  let tempDefaultAnswers = [];

  const [ activeQuestion, setActiveQuestion ] = useState(0);
  const [ radioValue, setAnswerValue] = useState(tempDefaultAnswers);

  const setDefaultAnswers = () => {
    questionsByCandidate.forEach((question, i) => {
      tempDefaultAnswers.push({
        idAnswer: i + 1,
        idCandidate: idCandidate,
        idQuestion: question.idQuestion,
        question: question.question,
        category: question.category,
        categoryName: question.categoryName,
        answer: '',
        comments: ''
      });
    });
  };

  const handleNext = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
  };

  const handleBack = () => {
    setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
  };

  const handleChangeAnswer = (event) => {
    let temNewArray = [...radioValue];
    temNewArray[event.target.name-1] = {
      idAnswer: Number(event.target.name),
      idCandidate: idCandidate,
      idQuestion: tempDefaultAnswers[activeQuestion].idQuestion,
      question: tempDefaultAnswers[activeQuestion].question,
      category: tempDefaultAnswers[activeQuestion].category,
      categoryName: tempDefaultAnswers[activeQuestion].categoryName,
      answer: event.target.value,
      comments: ''
    };
    setAnswerValue(temNewArray);
  };

  const handleChangeComments = (event) => {
    let temNewArray = [...radioValue];
    temNewArray[event.target.name-1] = {
      ...temNewArray[event.target.name-1],
      answer: radioValue[event.target.name-1].answer,
      comments: event.target.value
    };
    setAnswerValue(temNewArray);
  };

  const onSubmit = () => {
    dispatch({
      type: "SEND_ANSWERS",
      payload: [...radioValue]
    });
    goToResults();
  }

  const goToResults = () => {
    history.push(`/results/${idCandidate}`);
  }
  
  return (
    <div className={classes.root}>
      {setDefaultAnswers()}
      <Paper square elevation={0} className={classes.header}>
        <Typography color='textSecondary' variant='h5'>{questionsByCandidate[activeQuestion].categoryName}</Typography>
        <Typography variant='h5'>{questionsByCandidate[activeQuestion].question}</Typography>

        <FormControl component="fieldset" >
          <RadioGroup
            className='options'
            onChange={handleChangeAnswer}
            name={tempDefaultAnswers[activeQuestion].idAnswer}
            value={radioValue[activeQuestion].answer}>
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
          name={tempDefaultAnswers[activeQuestion].idAnswer}
          value={radioValue[activeQuestion].comments}
          onChange={handleChangeComments}
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

      {activeQuestion === maxQuestions-1?
        <Button variant='contained' className='send_test' color='primary' onClick={onSubmit}>
          Finalizar
        </Button>
        :
        null
      }
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

      '& svg': {
        fontSize: '7em'
      }
    },

    '& .send_test': {
      position: 'absolute',
      right: '2em',
      bottom: '100px',
      zIndex: '99'
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