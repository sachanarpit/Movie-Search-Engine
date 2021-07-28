async function myFunction() {
  var name = document.getElementById("movie").value;
  var output = document.getElementById("output");
  let res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=354de64`);
  let data = await res.json();
  console.log("data:", data);

  output.innerHTML = `<div id="main"><img src="${data.Poster}" id="poster" alt="" />
        <br />
        <h1 id="heading">${data.Title}</h1>
        <p id="date">release date : ${data.DVD}</p>
        <p id="actor">actors : ${data.Actors}</p>
        <p id="rating">IMDB rating : ${data.imdbRating}</p></div>`;
}
