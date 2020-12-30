import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, Container } from '@material-ui/core';
import ExtensionRoundedIcon from '@material-ui/icons/ExtensionRounded';
import NoSkillsSelected from '../components/NoSkillsSelected';
import SkillsSelected from '../components/SkillsSelected';

export default function CandidateSkills() {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent className='candidate_card'>
        <Typography variant='subtitle1' className='title'>Skills a evaluar:</Typography>

        {/*<NoSkillsSelected />*/}
        <SkillsSelected />
        
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: '48%',
    display: 'flex',
    flexDirection: 'column',

    '& .title': {
      fontSize: '25px',
      fontWeight: 'bold'
    }
  }
}));