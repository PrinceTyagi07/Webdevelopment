// Function to fetch weather details based on user input
function getWeatherDetails(){
    console.log(place.value); // Log the entered place to console

    // Async function to fetch weather details from API
    const weatherDetails = async () => {
        if (place.value) { // Check if place input is not empty
            // Fetch weather data from OpenWeatherMap API
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);
            
            if (response.status === 200) { // If request is successful
                const weatherPlaceDetails = await response.json(); // Parse JSON response
                var currentdate = new Date(); // Get current date and time

                // Update HTML with weather summary
                weatherSummary.innerHTML = `
                    <h3>${weatherPlaceDetails.main.temp}&deg;</h3>
                    <p> feels like ${weatherPlaceDetails.main.feels_like}&deg;</p>
                    <h3>${weatherPlaceDetails.name}</h3>
                    <p>${currentdate}</p>
                    <p class="text-center">${weatherPlaceDetails.weather[0].description}</p>`;

                // Update weather details in the sidebar
                country.innerHTML = `${weatherPlaceDetails.sys.country}`;
                humidity.innerHTML = `${weatherPlaceDetails.main.humidity} %`;
                wind.innerHTML = `${weatherPlaceDetails.wind.speed} kmph`;
                pressure.innerHTML = `${weatherPlaceDetails.main.pressure}`;
            } else {
                alert("Place Not Found!!!"); // Alert if place is not found
            }
        } else {
            alert("Please provide a place"); // Alert if place input is empty
        }
    };

    weatherDetails(); // Call the weather details fetching function
}
