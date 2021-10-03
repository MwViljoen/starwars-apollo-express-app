import React, {Fragment} from 'react';
import './characterDetailsStyles.css';
/*this component renders if a user needs more information on a character*/
function CharacterDetails({details, onBack}) {
    const {name, height, mass, gender, homeworld} = details;
    return (
        <Fragment>
            <div className="character-detail-container">
                <div className='character-detail'>
                    <p>Name:</p>
                    <p>Height:</p>
                    <p>Mass:</p>
                    <p>Gender:</p>
                    <p>Home World:</p>
                </div>
                <div className='character-detail text-center'>
                    <p>{name}</p>
                    <p>{height}</p>
                    <p>{mass}</p>
                    <p>{gender}</p>
                    <p>{homeworld.name}</p>
                </div>
            </div>
            <div className="text-center">
                <button onClick={onBack} className="all-pagination-button">Back</button>
            </div>
        </Fragment>
    );
}

export default CharacterDetails;