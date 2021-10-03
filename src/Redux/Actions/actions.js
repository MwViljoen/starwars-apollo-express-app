import {useQuery, gql} from "@apollo/client";

const allPeople = gql`
  query {
        getPeople {
            next
            previous
            results {
              name
              height
              mass
              gender
              homeworld {
                name
              }
            }
        }
  }
`;

export const updateSearchField = (text) => ({
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
});

export const requestCharacters = async (dispatch) => {
    dispatch({type: 'REQ_CHARACTER_PENDING'});

}