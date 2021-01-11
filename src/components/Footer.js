import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

export default function Candidates() {
  const classes = useStyles();
  const history = useHistory();
  let { url } = useRouteMatch();
  const [ visibleBack, setVisibleBack ] = useState(true);
  
  useEffect(() => {
    if (url.indexOf('/results/') === 0) {
      setVisibleBack(false);
    }
  }, [url]);

  return (
    <footer className={classes.root}>
      {visibleBack === true ?
        <Button variant='contained' className='back_btn' onClick={() => history.goBack()}>
          <ArrowBackRoundedIcon />
          Regresar
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