const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const LocalFetch = (user) => fetch (url, {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'content-type': 'application/json',
  },
})
  .then(response => response.json())

export { LocalFetch };