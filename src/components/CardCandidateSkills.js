import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import NoSkillsSelected from './NoSkillsSelected';
import SkillsSelected from './SkillsSelected';
import ModalSkills from './ModalSkills';
import { SkillsContext } from '../context/skills-context';

export default function CardCandidateSkills(props) {
  const classes = useStyles();
  const [ isOpen, setModalState ] = useState(false);
  const [ state, dispatch ] = useContext(SkillsContext);
  const [ currentSkills, setCurrentSkills ] = useState({});
  const totalSkills = state.skills;

  useEffect(() => {
    totalSkills.forEach(skill => {
      if (skill.candidateId === props.idCandidate) {
        console.log(skill.categories);
        setCurrentSkills(skill.categories);
      }
    });
  }, []);

  const handleModalState = (event) => {
    setModalState(!isOpen);
  };

  return(
    <Card className={classes.root}>

      <ModalSkills modalState={isOpen} changeState={handleModalState}/>

      <CardContent className='candidate_card'>
        <Typography variant='subtitle1' className='title'>Skills a evaluar:</Typography>

        {currentSkills.length === 0 ?
            <NoSkillsSelected onClick={handleModalState} />
          :
            <SkillsSelected actualSkills={currentSkills}/>
        }
        
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