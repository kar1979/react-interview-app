import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExtensionRoundedIcon from '@material-ui/icons/ExtensionRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

export default function SkillsSelected() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <List>
        <ListItem disableGutters='true'>
          <ListItemIcon className='icon_list' >
            <FiberManualRecordRoundedIcon className='icon_item' />
          </ListItemIcon>
          <ListItemText primary='HTML' />
        </ListItem>

        <ListItem disableGutters='true'>
          <ListItemIcon className='icon_list'>
            <FiberManualRecordRoundedIcon className='icon_item' />
          </ListItemIcon>
          <ListItemText primary='CSS' />
        </ListItem>

        <ListItem disableGutters='true'>
          <ListItemIcon className='icon_list'>
            <FiberManualRecordRoundedIcon className='icon_item' />
          </ListItemIcon>
          <ListItemText primary='JavaScript' />
        </ListItem>
      </List>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '0',

    '& .icon_item': {
      fontSize: '1em',
      color: '#000'
    },

    '& .icon_list': {
      minWidth: '1.5em'
    }
  }
}));