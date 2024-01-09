const button = document.querySelector("#button");
const joke = document.querySelector(".joke");

async function asyncFetch() {
  let config = {
    headers:{
      Accept: "application/json"
    }
  }
  const response = await fetch(
    "https://icanhazdadjoke.com/"
  , config);

  if (!response.ok) {
    throw new Error("ehe");
  }
  const data = await response.json();
  joke.textContent = data.joke;
}

button.addEventListener("click", asyncFetch);

// async function asyncFetch(){
//   const response = await axios.get("")
// }


//**** code testing in process */

// import express from 'express';
// const app = express() 
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// app.listen(3000, () => {
//   console.log("server running at 3000");
// });

