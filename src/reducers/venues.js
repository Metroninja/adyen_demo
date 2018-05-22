import * as Actions from '../actions/venues';

const initialState = {
  list: null,
  error: '',
  peopleHereFilter: false,
  query: '',
}

export const venues = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PEOPLE_HERE_CHECK:
      return { 
        ...state,
        peopleHereFilter: !state.peopleHereFilter,
      }
    case Actions.GET_VENUES:
      return {
        ...state,
        query: action.query
      }
    case Actions.GET_VENUES_SUCCESS:
      const { response } = action.result;
      return {
        ...state,
        list: response.groups[0].items,
      }
    case Actions.GET_VENUES_FAILURE:
      return {
        ...state,
        error: action.exception
      }
    default:
      return state;
  }
};
