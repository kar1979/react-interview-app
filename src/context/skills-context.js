import React, { createContext, useReducer } from 'react';

export const SkillsContext = createContext();

const initialState = {
  skills: [
    {
      id: 1,
      candidateId: 1,
      categories: [
        { category: 'html', categoryName: 'HTML' },
        { category: 'javascript', categoryName: 'JavaScript' }
      ]
    },
    {
      id: 2,
      candidateId: 2,
      categories: [
        { category: 'css', categoryName: 'CSS' },
        { category: 'angular', categoryName: 'Angular' }
      ]
    }
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CANDIDATES":
      let newCandidates = state.candidates;
      newCandidates.push({
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        type: action.payload.type
      })
      return {...state, candidates: newCandidates }
    
    case "EDIT_INTERVIEWER":
      let tempCandidate = state.candidates;
      const candidateToEdit = tempCandidate.findIndex(candidate => candidate.id === action.payload.id);

      tempCandidate.fill(
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          type: action.payload.type
        },
        candidateToEdit,
        candidateToEdit + 1
      );
      return { ...state, posts: tempCandidate }

    default:
      return initialState
  }
}

export const SkillsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SkillsContext.Provider value={[state, dispatch]}>
      {props.children}
    </SkillsContext.Provider>
  );
}