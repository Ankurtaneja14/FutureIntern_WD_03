document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('unit').value;
    const toUnit = document.getElementById('convertTo').value;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = 'Please enter a valid number';
        return;
    }

    let convertedTemperature;

    if (fromUnit === toUnit) {
        convertedTemperature = temperature;
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = temperature + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemperature = ((temperature - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
});
