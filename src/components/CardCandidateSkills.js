import React, { useState, useContext } from 'react';
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import NoSkillsSelected from './NoSkillsSelected';
import SkillsSelected from './SkillsSelected';
import ModalSkills from './ModalSkills';
import { SkillsContext } from '../context/skills-context';

export default function CardCandidateSkills(props) {
  const classes = useStyles();
  const [ isOpen, setModalState ] = useState(false);
  const [ skillsFromContext ] = useContext(SkillsContext);
  const totalSkills = skillsFromContext.skills;
  const skillsByCand = totalSkills.filter(
    skill => skill.candidateId === props.idCandidate
  )

  const handleModalState = (event) => {
    setModalState(!isOpen);
  };
  
  return(
    <Card className={classes.root}>
      <ModalSkills modalState={isOpen} idCandidate={props.idCandidate} changeState={handleModalState}/>

      <CardContent className='candidate_card'>
        <Typography variant='subtitle1' className='title'>Skills a evaluar:</Typography>

        {skillsByCand.length === 0 ?
            <NoSkillsSelected onClick={handleModalState} />
          :
            <SkillsSelected actualSkills={skillsByCand[0].categories}/>
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