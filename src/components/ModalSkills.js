import React, { useState } from 'react';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  FormControl,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import ExtensionRoundedIcon from '@material-ui/icons/ExtensionRounded';

export default function ModalSkills(props) {
  const classes = useStyles();

  const skills = [
    {category: 'html', categoryName: 'HTML'},
    {category: 'css', categoryName: 'CSS'},
    {category: 'git', categoryName: 'Git'},
    {category: 'javascript', categoryName: 'JavaScript'},
    {category: 'typescript', categoryName: 'TypeScript'},
    {category: 'react', categoryName: 'ReactJS'},
    {category: 'angular', categoryName: 'Angular'},
    {category: 'node', categoryName: 'NodeJS'}
  ]

  const [ toCheck, setToCheck ] = useState({
    html: false,
    css: false,
    git: false,
    javascript: false,
    typescript: false,
    react: false,
    angular: false,
    node: false
  });

  const handleChange = (event) => {
    setToCheck({ ...toCheck, [event.target.name]: event.target.checked });
  };
  // console.log(toCheck);

  return (
    <Dialog
      open={props.modalState}
      onClose={props.changeState}
      className={classes.root}
    >
      <div className='title'>
        <ExtensionRoundedIcon color='primary' fontSize='large' />
        <Typography variant='h5'>Skills a evaluar</Typography>
      </div>

      <DialogContent>
        <FormControl fullWidth>
          {skills.map(skill => (
            <FormControlLabel
              key={skill.category}
              control={
                <Checkbox
                  checked={toCheck[skill.category]}
                  onChange={handleChange}
                  name={skill.category}
                  color="primary"
                />
              }
              label={skill.categoryName}
            />
          ))}
        </FormControl>
      </DialogContent>

      <DialogActions className='actions_modal'>
        <Button variant="contained" color='secondary' onClick={props.changeState}>Cancelar</Button>
        <Button variant="contained" color='primary'>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    '& .title': {
      display: 'flex',
      padding: '24px',

      '& h5': {
        marginLeft: '10px'
      }
    },
    '& p': {
      fontWeight: 'bold'
    },
    '& .MuiInput-root': {
      marginBottom: '2em'
    },
    '& .actions_modal': {
      justifyContent: 'space-between'
    }
  }
}));