import React, { createContext, useReducer } from 'react';

export const SkillsContext = createContext();

const initialState = {
  skills: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SKILLS":
      let newSkills = state.skills;
      newSkills.push({
        id: newSkills.length + 1,
        candidateId: action.payload.candidateId,
        categories: action.payload.categories
      })
      return {...state, skills: newSkills }

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