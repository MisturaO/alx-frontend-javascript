export default function handleResponseFromAPI(promise) {
  const obj = {
    status: 200,
    body: 'Success',
  };

  return promise
    .then(() => obj) // Resolved promise result
    .catch(() => new Error()) // Catch error when promise rejects
    .finally(() => console.log('Got a response from the API')); // Finally returns no matter what happens
}
