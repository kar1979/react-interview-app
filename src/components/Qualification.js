import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function Qualification(props) {
  const totalQuestions = props.questionsCandidate;
  const totalSkills = props.actualSkills;
  const totalAnswers = props.answersCandidate;

  let totalQue = totalQuestions.length / totalSkills.length
  let questionsByCandidate = [];
  let variables = {};
  let prefix = 'contQuestion';
  let corrects = 'correctAns';
  let correctAnswers = [];

  const setQuestionsByCandidate = () => {
    totalQuestions.filter( question => {
      totalSkills.forEach((category) => {
        if(question.category === category.category) {
          questionsByCandidate.push(question);
        }
      });
    });
    setQualification();
  }
  
  const setQualification = () => {
    totalAnswers.forEach((answer, n) => {
      if (answer.answer === totalQuestions[n].correctAnswer) {
        correctAnswers.push(answer);
      }
    });

    totalSkills.forEach((skill, i) => {
      variables[prefix + i] = skill.category;
      variables[corrects + i] = correctAnswers.filter(correct => 
        correct.category === variables[prefix + i]
      );
    });
  }

  return (
    <div>
      {setQuestionsByCandidate()}
      <List>
        {totalSkills.map((skill, i) => (
          <ListItem key={i} variant='body1'>
            <ListItemText primary={ `${variables[corrects + i].length} / ${totalQue}` }/>
          </ListItem>
        ))}
      </List>
    </div>
  );
}