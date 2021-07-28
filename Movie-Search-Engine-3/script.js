async function myFunction() {
  var name = document.getElementById("movie").value;
  var output = document.getElementById("output");
  let res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=354de64`);
  let data = await res.json();
  console.log("data:", data);
  if (name == "") {
    output.innerHTML = null;
  } else if (
    data.Title == undefined &&
    data.DVD == undefined &&
    data.Actors == undefined &&
    data.imdbRating == undefined
  ) {
    output.innerHTML = `<div id="main">
          <iframe
            src="https://giphy.com/embed/IS9LfP9oSLdcY"
            width="100%"
            height="270"
            frameborder="0"
            class="giphy-embed"
            allowfullscreen
          ></iframe>
          <p id="noting">Nothing is found</p>
        </div>`;
  } else if (data.imdbRating > 8.5) {
    output.innerHTML = `<div id="main"><img src="${data.Poster}" id="poster" alt="" />
        <br />
        
        <h1 id="heading">${data.Title}</h1>
        <div id="recomd">Recommanded</div>
        <p id="date">release date : ${data.DVD}</p>
        <p id="actor">actors : ${data.Actors}</p>
        <p id="rating">IMDB rating : ${data.imdbRating}</p></div>`;
  } else {
    output.innerHTML = `<div id="main"><img src="${data.Poster}" id="poster" alt="" />
        <br />
        <h1 id="heading">${data.Title}</h1>
        <p id="date">release date : ${data.DVD}</p>
        <p id="actor">actors : ${data.Actors}</p>
        <p id="rating">IMDB rating : ${data.imdbRating}</p></div>`;
  }
}
