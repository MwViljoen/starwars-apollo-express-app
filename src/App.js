import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from "./Components/Nav/Nav";
import All from "./Components/All/All";
import SearchPeople from "./Components/SearchPeople/SearchPeople";
/*using react router for easy navigation between Single page components*/
function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Route path="/" exact={true}>
                <All/>
            </Route>
            <Route path="/SearchPeople" exact={true}>
                <SearchPeople/>
            </Route>
        </BrowserRouter>
    );
}

export default App;
