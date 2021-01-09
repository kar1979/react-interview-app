import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

export default function Candidate(props) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <PersonRoundedIcon color='primary' className='user_icon' />
      <Typography variant='h6'>{props.candidateInfo.name}</Typography>
      <Typography variant='subtitle1'>{props.candidateInfo.email}</Typography>
      <Typography variant='subtitle1' color='primary' className='to_click' id={props.candidateInfo.id} onClick={props.changeState}>#{props.candidateInfo.id}</Typography>
      <Typography variant='subtitle1' className='type_text'>{props.candidateInfo.type}</Typography>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '50%',
    minWidth: '25%',
    padding: '0 1em',
    margin: '1em 0',

    '& .user_icon': {
      fontSize: '5em'
    },

    '& .to_click:hover':{
      cursor: 'pointer'
    },

    '& .type_text': {
      textTransform: 'capitalize'
    }
  }
}));