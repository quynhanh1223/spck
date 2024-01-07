fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    // Work with JSON data here
    console.log(res);
  });

fetch("./card.json")
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    const content = document.getElementById("content");

    res.forEach(function (item, index) {
      const divCard = document.createElement("div");
      const imgTag = document.createElement("img");
      const divBody = document.createElement("div");
      const pTag = document.createElement("p");

      divCard.appendChild(imgTag);
      divCard.appendChild(divBody);
      divBody.appendChild(pTag);

      content.appendChild(divCard);
      imgTag.src = item.imgUrl;
      pTag.innerText = item.information;
      // document.getElementById("content").classList.toggle("myStyle");

      // content.classList.add("imgTag");
      imgTag.classList.add("imgSize");
      
    });

  });

  // function myFunction(){
  //   document.getElementById("content").classList.toggle("myStyle");
  // }
