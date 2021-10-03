import React from 'react';
import './characterStyles.css';
/*simply rendering all characters from data received by apollo-graphql API*/
function Character(props) {
    const {name} = props.character

    return (
        <div className="character-container" onClick={() => props.onDetails(props.character)}>
            <p>{name}</p>
        </div>
    );
}

export default Character;
