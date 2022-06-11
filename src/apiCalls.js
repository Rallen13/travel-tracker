const fetchApiData = type => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(`${type} API error!`));
};

const fetchData = () => {
  return Promise.all([
    fetchApiData("travelers"),
    fetchApiData("trips"),
    fetchApiData("destinations")
  ]);
};

export default {
  fetchData
};
