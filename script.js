const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temp").innerText = `🌡️ Temperature: ${data.main.temp} °C`;
        document.getElementById("condition").innerText = `☁️ Condition: ${data.weather[0].main}`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `🌬️ Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        alert(error.message);
    }
}

