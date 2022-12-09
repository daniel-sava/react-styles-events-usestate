import { useState } from 'react';

function Temperature() {
    const [celsiusTemperature, changeCelsiusTemperature] = useState(0);
    const [fahrenheitTemperature, changeFahrenheitTemperature] = useState(
        celsiusToFahrenheit(celsiusTemperature)
    );

    function handleCelsiusTemperatureChange(event) {
        changeCelsiusTemperature(event.target.value);
        changeFahrenheitTemperature(celsiusToFahrenheit(event.target.value));
    }

    function celsiusToFahrenheit(celsius) {
        return celsius * 1.8 + 32;
    }

    return (
        <div className="Temperature">
            <div className="input-group">
                <label>Temperatura in grade Celsius</label>
                <input
                    onChange={handleCelsiusTemperatureChange}
                    type="text"
                    value={celsiusTemperature}
                ></input>
            </div>
            <div className="input-group">
                <label>Temperatura in grade Fahrenheit</label>
                <input
                    type="text"
                    disabled
                    value={fahrenheitTemperature}
                ></input>
            </div>
        </div>
    );
}

export default Temperature;
