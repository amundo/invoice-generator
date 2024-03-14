const apiKey = '41538f458b1f4410baea6066d1e98dff';
const zipCode = '4 clifton ave 01002'; // Example ZIP code
const url = `https://api.opencagedata.com/geocode/v1/json?q=${zipCode}&key=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {
    if (data.status.code === 200 && data.results.length > 0) {
        // Assuming the first result is the most relevant
        const result = data.results[0];
        // console.log(result.formatted); // This is the formatted address including the city and state
        // For more detailed info, you can dive into the components of the result
        console.log(JSON.stringify(result, null,2))
    } else {
        console.error('Geocoding failed:', data.status.message);
    }
})
.catch(error => console.error('Error:', error));
