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

const postDate = formData => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(`Way to stay active!`);
      // fetchApiCalls(formData.userID);
    })
    .catch(err => {
      console.log(err);
    });
};

export default {
  fetchData
};
