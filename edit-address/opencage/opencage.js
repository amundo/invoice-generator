const apiKey = '41538f458b1f4410baea6066d1e98dff';

// Convert to an arrow function and export it
export const fetchGeocodeData = async (zipCode) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${zipCode}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status.code === 200 && data.results.length > 0) {
      const result = data.results[0];
      return result
    } else {
      console.error('Geocoding failed:', data.status.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Since it's already exported, you can import and use it like this in another file:
// import { fetchGeocodeData } from './path/to/this/file';
// fetchGeocodeData('01001');
