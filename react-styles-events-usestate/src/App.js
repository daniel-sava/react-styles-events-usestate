import Events from './Events';
import Temperature from './Temperature';
import UsersList from './UsersList';

function App() {
    return (
        <div className="App">
            <UsersList isDisplayed="true" />
            <Events />
            <Temperature />
        </div>
    );
}

export default App;
