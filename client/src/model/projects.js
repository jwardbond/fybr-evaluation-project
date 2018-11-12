import axios from 'axios';

export const FETCH_PROJECTS_REQUESTED = 'FETCH_PROJECTS_REQUESTED';
export const FETCH_PROJECTS_COMPLETED = 'FETCH_PROJECTS_COMPLETED';
export const FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR';

function fetchProjectsRequested() {
  return {
    type: FETCH_PROJECTS_REQUESTED
  };
}

function fetchProjectsCompleted(projects) {
  return {
    type: FETCH_PROJECTS_COMPLETED,
    projects
  };
}

function fetchProjectsError(error) {
  return {
    type: FETCH_PROJECTS_ERROR,
    error
  };
}

export function fetchProjects() {
  return dispatch => {
    dispatch(fetchProjectsRequested());

    axios
    .get('/api/projects')
    .then((response) => {
      dispatch(fetchProjectsCompleted(response.data));
    })
    .catch(error => {
      dispatch(fetchProjectsError(error));
    });
  };
}

const initial = {
  status: null,
  error: null,
  byId: {},
  ids: []
};

/*
Object mapping reducer calls to the correct reducer func depending on action.type
Calls to update projects state can either change the state to 
  - requested
  - completed
  - error
*/
const reducer = {
  [FETCH_PROJECTS_REQUESTED](state, action) {
    return {
      ...state,
      status: FETCH_PROJECTS_REQUESTED
    };
  },
  [FETCH_PROJECTS_COMPLETED](state, action) {
    return {
      ...state,
      status: FETCH_PROJECTS_COMPLETED,
      error: null,
      ...action.projects
    };
  },
  [FETCH_PROJECTS_ERROR](state, action) {
    return {
      ...state,
      status: FETCH_PROJECTS_ERROR,
      error: action.error
    };
  }
}

/*
Exports a function that takes two arguments:
  - The state (optional, default to 'initial') defined above
  - An action to change the state
The function checks whether or not the action has a type contained in the reducers defined above
  TRUE: returns the result of applying the appropriate reducer function (the new state)
  FALSE: returns the same state as before
*/
export default (state = initial, action) => reducer.hasOwnProperty(action.type) ? reducer[action.type](state, action) : state;
