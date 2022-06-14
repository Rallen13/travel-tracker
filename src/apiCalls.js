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

const fetchUser = id => {
  return Promise.all(
    fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(`Travelers API error!`))
  );
};

const postData = formData => {
  return fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(data => {
      console.log(`Trip is Booked`);
    })
    .catch(err => {
      console.log(err);
    });
};

export default {
  fetchData,
  postData
};
