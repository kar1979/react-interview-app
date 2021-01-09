import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

export default function SkillsSelected(props) {
  const classes = useStyles();
  const currentSkills = props.actualSkills;
  
  return (
    <Container className={classes.root}>
      <List>
        {currentSkills.map(skill => (
          <ListItem key={skill.category} disableGutters={true}>
            <ListItemIcon className='icon_list' >
              <FiberManualRecordRoundedIcon className='icon_item' />
            </ListItemIcon>
            <ListItemText primary={skill.categoryName} />
          </ListItem>
        ))}
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