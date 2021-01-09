import React, { createContext, useReducer } from 'react';

export const AnswersContext = createContext();

const initialState = {
  answers: [
    { idCandidate: 1, idQuestion: 1, idAnswer: 1, category: "html", categoryName: "HTML", answer: "correcto"},
    { idCandidate: 1, idQuestion: 2, idAnswer: 2, category: "html", categoryName: "HTML", answer: "incorrecto"},
    { idCandidate: 1, idQuestion: 3, idAnswer: 3, category: "html", categoryName: "HTML", answer: "correcto"},
    { idCandidate: 1, idQuestion: 4, idAnswer: 4, category: "html", categoryName: "HTML", answer: "incorrecto"},
    { idCandidate: 1, idQuestion: 13, idAnswer: 5, category: "javascript", categoryName: "JavaScript", answer: "correcto"},
    { idCandidate: 1, idQuestion: 14, idAnswer: 6, category: "javascript", categoryName: "JavaScript", answer: "incorrecto"},
    { idCandidate: 1, idQuestion: 15, idAnswer: 7, category: "javascript", categoryName: "JavaScript", answer: "correcto"},
    { idCandidate: 1, idQuestion: 16, idAnswer: 8, category: "javascript", categoryName: "JavaScript", answer: "incorrecto"}
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEND_ANSWERS":
      console.log(action.payload);
      let newAnswers = state;
      /*action.payload.forEach((answer, i) => {
        newAnswers.push({
          idAnswer: i,
          category: answer.category,
          answer: answer.answer
        });
      });*/
      console.log(newAnswers);
      /*return {...state, candidates: newCandidates }*/
      return {...state}
    
    default:
      return initialState
  }
}

export const AnswersContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AnswersContext.Provider value={[state, dispatch]}>
      {props.children}
    </AnswersContext.Provider>
  );
}