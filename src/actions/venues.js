
import foursquareConfig from '../config/foursquare.json';
const qsConfig = `client_id=${foursquareConfig.clientId}&client_secret=${foursquareConfig.secret}`;

export const PEOPLE_HERE_CHECK = "PEOPLE_HERE_CHECK";
export const GET_VENUES = "GET_VENUES";
export const GET_VENUES_SUCCESS = "GET_VENUES_SUCCESS";
export const GET_VENUES_FAILURE = "GET_VENUES_FAILURE";

export const peopleFilter = () => {
  return dispatch => dispatch({ type: PEOPLE_HERE_CHECK });
}

export const getVenues = ({coords, query }) => {
  return async (dispatch) =>  {
    dispatch({ type: GET_VENUES, query });
    try {
      let qsLatLong = `ll=${coords.latitude},${coords.longitude}`;
      let qsQuery = (query && `&query=${query}`) || '';
      const response = await fetch(
        `https://api.foursquare.com/v2/venues/explore?${qsConfig}&${qsLatLong}${qsQuery}&limit=20&v=20180323`, {
        method: 'GET',
      });
      const result = await response.json();
      dispatch({type: GET_VENUES_SUCCESS, result});
    } catch (exception) {
      dispatch({type: GET_VENUES_FAILURE, exception})
    }
  }
};
