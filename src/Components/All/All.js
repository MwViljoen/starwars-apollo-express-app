import React, {useState} from 'react';
import './allStyles.css';
import {useQuery} from "@apollo/client";
import Character from "../Character/Character";
import CharacterDetails from "../CharacterDetails/characterDetails";
import {allPeople} from '../../queries/queries'
import {actionButton} from "../ActionButton/ActionButton";

function All() {
    /*states using hooks*/
    const [details, setDetails] = useState({});
    /*setting up the pagination by starting with the first page
    * https://www.apollographql.com/docs/react/data/queries/#refetching
    * */
    const { loading, error, data, refetch } = useQuery(allPeople, {
        variables: {navUrl: 'https://swapi.dev/api/people/?page=1'}
    });
    /*event handler for when a user wants to see more */
    const onDetails = (character) => {
        setDetails(character);
    }
    /*event handler for going back to previous page*/
    const onBack = () => {
        setDetails({});
    }
    /*part of pagination*/
    if (loading) { return <div className="all-loading-screen">Loading...</div>; }
    else if (error) { return <div>{error}</div>; }
    else{
        /*this only executes if user clicked on a name for more details */
        if(details.name && details.homeworld){
            return (
                <CharacterDetails
                    details={details}
                    onBack={onBack}
                />
            )
        }
        else{
            /*executes after getting data from api*/
            let results = data.nav.results;
            /*notice the previous and next for pagination calling
             a actionButton that calls for a refetch accordingly*/
            return (
                <div className="all-container">
                    <h2>Click for more details</h2>
                    <div className="all-character-container">
                        {results.map((character, index) => (
                            <Character
                                key={index}
                                character={character}
                                onDetails={onDetails}
                            />
                        ))}
                    </div>
                    <div className="all-pagination-container">
                        {
                            data.nav.previous === null ? null
                                : actionButton(refetch ,data.nav.previous, 'Prev')
                        }
                        {
                            data.nav.next === null ? null
                                : actionButton(refetch ,data.nav.next, 'Next')
                        }
                    </div>
                </div>
            );
        }
    }
}

export default All;