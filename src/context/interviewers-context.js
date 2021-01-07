import React, { createContext, useReducer } from 'react';

export const InterviewersContext = createContext();

const initialState = {
  interviewers: [

  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INTERVIEWER":
      let newInterviewer = state.interviewers;
      newInterviewer.push({
        id: action.payload.id,
        idInter: action.payload.idInter,
        name: action.payload.name,
        eid: action.payload.eid
      })
      return {...state, interviewers: newInterviewer }
    
    case "EDIT_INTERVIEWER":
      let tempInter = state.interviewers;
      const interToEdit = tempInter.findIndex(inter => inter.id === action.payload.id);

      tempInter.fill(
        {
          id: action.payload.id,
          idInter: action.payload.idInter,
          name: action.payload.name,
          eid: action.payload.eid
        },
        interToEdit,
        interToEdit + 1
      );
      return { ...state, posts: tempInter }

    default:
      return initialState
  }
}

export const InterviewersContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InterviewersContext.Provider value={[state, dispatch]}>
      {props.children}
    </InterviewersContext.Provider>
  );
}