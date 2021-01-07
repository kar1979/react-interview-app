import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

export default function Candidates() {
  const classes = useStyles();
  const history = useHistory();
  let { url } = useRouteMatch();
  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));

  return (
    <footer className={classes.root}>
      <Button variant='contained' className='back_btn' onClick={() => history.goBack()}>
        <ArrowBackRoundedIcon />
        Regresar
      </Button>

      { url.indexOf('/candidate/') ?
          <Button variant='contained' className='start_btn' color='primary' onClick={() => history.push(`/interview/${idCandidate}`)}>
            Comenzar
            <ArrowForwardRoundedIcon />
          </Button>
        :
          null
      }
    </footer>
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

    '& .back_btn:hover': {
      backgroundColor: '#a10303'
    },

    '& .start_btn': {
      width: '10em',
      margin: '2em'
    }
  },
}));