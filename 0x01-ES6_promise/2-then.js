export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({status: 200, body: 'Success'})) // Resolved promise result
    .catch(() => new Error()) // Catch error when promise rejects
    .finally(() => console.log('Got a response from the API')); // Finally returns no matter what happens
}
