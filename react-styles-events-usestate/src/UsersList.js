import './UsersList.css';

import { useState } from 'react';

function UsersList(props) {
    let classList = 'list';
    let listStyling = {};

    const [user, setUser] = useState({
        name: 'Andrei Popescu',
        age: 24,
    });

    function handleUserNameChange(event) {
        setUser((previousUserState) => {
            return { ...previousUserState, name: event.target.value };
        });
    }

    function handleUserAgeChange(event) {
        setUser((previousUserState) => {
            return { ...previousUserState, age: Number(event.target.value) };
        });
    }

    const isListInitiallyDisplayed =
        props.isDisplayed === 'true' ? true : false;
    const [isListDisplayed, toggleList] = useState(isListInitiallyDisplayed);

    function toggleListVisibility() {
        toggleList((previousListDisplayStatus) => !previousListDisplayStatus);
    }

    // listStyling = {
    //     visibility: isListDisplayed ? 'visible' : 'hidden',
    // };

    if (isListDisplayed) {
        classList += ' visible';
    } else {
        classList += ' hidden';
    }

    return (
        <div className="UsersList">
            <h2 className="title">Lista utilizatori</h2>
            <ol className={classList} style={listStyling}>
                <li className="list-item">
                    {user.name} ({user.age} ani)
                </li>
                {/* <li className="list-item">Maria Popescu</li>
                <li className="list-item">Vlad Andrei</li> */}
            </ol>

            <button onClick={toggleListVisibility}>Show / Hide List</button>

            <div className="input-group">
                <label>Nume</label>
                <input
                    onChange={handleUserNameChange}
                    type="text"
                    value={user.name}
                ></input>
            </div>
            <div className="input-group">
                <label>Varsta</label>
                <input
                    onChange={handleUserAgeChange}
                    type="text"
                    value={user.age}
                ></input>
            </div>
        </div>
    );
}

export default UsersList;
