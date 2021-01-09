import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

export default function Candidates() {
  const classes = useStyles();
  const history = useHistory();
  let { url } = useRouteMatch();
  const idCandidate = Number(url.slice(url.lastIndexOf('/') + 1, url.length));
  const [ textButton, setTextButton ] = useState('');
  const [ route, setRoute ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ visibleBack, setVisibleBack ] = useState(true);
  
  useEffect(() => {
    if (url.indexOf('/candidates-of/') === 0 && url.indexOf('/candidate/') === 18) {
      setTextButton('Comenzar');
      setRoute(`/interview/${idCandidate}`);
      setVisible(true);
    } else if (url.indexOf('/results/') === 0) {
      setVisibleBack(false);
    /*}  else if ( url.indexOf('/interview/') === 0) {
      setTextButton('Finalizar');
      setRoute(`/interview/${idCandidate}`);
      setVisible(true);
    */
    } else {
      setVisible(false);
    }
  }, [url]);

  return (
    <footer className={classes.root}>
      {visibleBack === true ?
        <Button variant='contained' className='back_btn' onClick={() => history.goBack()}>
          <ArrowBackRoundedIcon />
          Regresar
        </Button>
        :null
      }

      {visible === true ?
        <Button variant='contained' className='start_btn' color='primary' onClick={() => history.push(route)}>
          {textButton}
          <ArrowForwardRoundedIcon />
        </Button>
        :null
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