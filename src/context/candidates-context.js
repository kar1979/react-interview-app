import React, { createContext, useReducer } from 'react';

export const CandidatesContext = createContext();

const initialState = {
  candidates: []
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

export const CandidatesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CandidatesContext.Provider value={[state, dispatch]}>
      {props.children}
    </CandidatesContext.Provider>
  );
}