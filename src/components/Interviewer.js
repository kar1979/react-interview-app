import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

export default function Interviewer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PersonRoundedIcon color='primary' className='user_icon' />
      <Typography variant='h6'>{props.interInfo.name}</Typography>
      <Typography variant='subtitle1' color='primary' className='to_click' id={props.interInfo.idInter} onClick={props.changeState}>#{props.interInfo.idInter}</Typography>
      <Typography variant='subtitle1'>{props.interInfo.eid}</Typography>
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
    }
  }
}));