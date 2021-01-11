import React from 'react';
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

export default function CandidateDetail(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{width: props.widthContainer}} >
      <CardContent className='candidate_card'>
        <PersonRoundedIcon color='primary' className='user_icon' />
        <Typography variant='subtitle2' color='secondary' >Nombre completo</Typography>
        <Typography variant='subtitle1' className='item'>{props.detailsCandidate.name}</Typography>
        <Typography variant='subtitle2' color='secondary'>Correo electrónico</Typography>
        <Typography variant='subtitle1' className='item'>{props.detailsCandidate.email}</Typography>
        <Typography variant='subtitle2' color='secondary'>Tipo</Typography>
        <Typography variant='subtitle1' className='item type'>{props.detailsCandidate.type}</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    '& .user_icon': {
      fontSize: '3.5em'
    },

    '& h6': {
      fontWeight: 'bold'
    },

    '& .item': {
      marginBottom: '0.5em'
    },

    '& .type': {
      textTransform: 'capitalize'
    }
  }
}));