fetch("./data.json").then(response => {
    return response.json();
})
.then((res) => {
  // Work with JSON data here
  console.log(res);
})