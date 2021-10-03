import {gql} from "@apollo/client";
/*here are the setup queries to the apollo api*/
export const allPeople = gql`
  query ($navUrl: String) {
    nav(url: $navUrl) {
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

export const searchPeople = gql`
    query($searchInput: String) {
      search(input: $searchInput) {
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