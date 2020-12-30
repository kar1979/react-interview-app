import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

export default function Candidate() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <PersonRoundedIcon color='primary' className='user_icon' />
      <Typography variant='h6'>Manuel Morfin</Typography>
      <Typography variant='subtitle1'>#12345</Typography>
      <Typography variant='subtitle1'>manuel.morfin</Typography>
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

    '&:hover':{
      cursor: 'pointer'
    }
  }
}));