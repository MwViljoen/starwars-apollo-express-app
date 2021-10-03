import React from 'react';
import './navStyles.css';
import {Link} from 'react-router-dom';
/*simply a nav bar between home page and search page
* notice the use of link ( from React Router) from the browser user that overrides basic web browser actions for <a> tags*/
function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-header">
                <h1>Starwars Characters</h1>
            </div>
            <div className="nav-tags">
                <Link to="/" className="nav-tag">
                    <p>
                        All Characters
                    </p>
                </Link>
                <Link to="/SearchPeople" className="nav-tag">
                    <p>
                        SearchPeople
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default Nav;