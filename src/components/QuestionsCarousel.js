import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';


import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const tutorialSteps = [
  {
    label: '¿Que diferencia existe entre let, var y const?'
  },
  {
    label: '¿Que significa herencia?'
  },
  {
    label: '¿Que diferencia existe entre let, var y const?'
  },
  {
    label: '¿Que significa herencia?'
  }
];

export default function QuestionsCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const [value, setValue] = React.useState('correcto');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography color='textSecondary' variant='h5'>JavaScript</Typography>

        <Typography variant='h5'>{tutorialSteps[activeStep].label}</Typography>

        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" className='options' value={value} onChange={handleChange} >
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
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <ArrowBackIosRoundedIcon color='primary' /> : <ArrowForwardIosRoundedIcon color='primary' />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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