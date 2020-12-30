import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import ExtensionRoundedIcon from '@material-ui/icons/ExtensionRounded';

export default function NoSkillsSelected() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant='subtitle1'>No se ha seleccionado skills</Typography>
      <ExtensionRoundedIcon color='primary' className='skills_icon' />
      <Typography variant='subtitle1'>Haz click para añadir</Typography>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& .skills_icon': {
      fontSize: '4.5em'
    },

    '& h6': {
      margin: '1em 0'
    }
  }
}));