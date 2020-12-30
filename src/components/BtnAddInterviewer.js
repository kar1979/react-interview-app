import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';

export default function BtnAddInterviewer(props) {
  const classes = useStyles();

  return (
    <PersonAddRoundedIcon
      color='primary'
      className={classes.icon}
      onClick={props.onClick}
    />
  );
}

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '5em'
  }
}));