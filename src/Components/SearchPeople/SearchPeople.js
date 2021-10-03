import React, {useState} from 'react';
import './searchStyles.css';
import {useLazyQuery} from "@apollo/client";
import {searchPeople} from "../../queries/queries";
import CharacterDetails from "../CharacterDetails/characterDetails";
import Character from "../Character/Character";

/*
* This component is very similar to the home/All component just seperated for simplicity and to reduce clustering of
* too much code, there are 2 different changes here that differ form All component
* 1. Query to apollo API is different
* 2. instead of using useQuery form apollo/client package, now using useLazyQuery for more manual control
* some of the css is also reused here.
* */

function SearchPeople() {
    const [details, setDetails] = useState({});
    const [searchInput, setSearchInput] = useState('');

    const [searchCharacters, {loading, error, data}] = useLazyQuery(searchPeople, {
        variables: {searchInput: ''}
    });

    const onDetails = (character) => {
        setDetails(character);
    }

    const onBack = () => {
        setDetails({});
    }

    const onInput = (event) => {
        setSearchInput(event.target.value);
    }

    const onSearch = () => {
        if(searchInput !== ''){
            searchCharacters({
                variables: {searchInput: searchInput}
            });
        }
    }

    if (loading) {
        return <div className="all-loading-screen">Loading...</div>;
    } else if (error) {
        return <div>{error}</div>;
    } else {
        if (details.name && details.homeworld) {
            return (
                <CharacterDetails
                    details={details}
                    onBack={onBack}
                />
            );
        } else {
            return (
                <div className="all-container">
                    <h2>Search for a character</h2>
                    <div className="search-container">
                        <input
                            type="text" onChange={onInput}
                            value={searchInput} placeholder="Anakin"
                            className="input-styles"
                        />
                        <button className="all-pagination-button"
                                onClick={onSearch}
                        >Search
                        </button>
                    </div>
                    <h2>Click on characters for more</h2>
                    {
                        data && data.search.results.length > 0 ?
                            <div className="all-character-container">
                                {
                                    data.search.results.map((character, index) => (
                                        <Character
                                            key={index}
                                            character={character}
                                            onDetails={onDetails}
                                        />
                                    ))
                                }
                            </div>
                            : <p className='text-center'>Nothing Found</p>
                    }
                </div>
            );
        }
    }
}

export default SearchPeople;