export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulates API response
        const APIresponse = '{"message": "Hello, world!"}';

        setTimeout(() => {
            try{
                // Parse JSON response
                const data = JSON.parse(APIresponse);
                resolve(data); //Returns the promise with data.
            } catch (error) {
                reject(new Error("Failed to parse json")) // Rejects and returns error
            }
        }, 1000); //Simulates 1 second delay
    });
}


// Example usage of the getResponseFromAPI function
getResponseFromAPI()
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });