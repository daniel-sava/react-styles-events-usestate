import { useState } from 'react';

function Events() {
    let currentInputValue = '';

    const [clicks, incrementClicks] = useState(0);
    function handleButtonClick() {
        // incrementClicks(clicks + 1);
        incrementClicks((previousClicks) => previousClicks + 1);
    }

    return (
        <div className="Events">
            <div>
                <p>Times clicked: {clicks}</p>
                <button onClick={handleButtonClick}>Click me!</button>
            </div>
            <input
                onFocus={() => {
                    console.log('focus on input');
                }}
                onBlur={() => {
                    console.log('removed focus from input');
                }}
                onChange={(event) => {
                    currentInputValue = event.target.value;
                    console.log(currentInputValue);
                }}
            ></input>
        </div>
    );
}

export default Events;
