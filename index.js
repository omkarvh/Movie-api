
// Define API key and base URL

const apiKey = 'df46bc53'; // Replace with your OMDb API key
const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Thriller']; // Add genres as needed

// Fetch movies with IMDb rating above 8 from specific genres
 function fetchMovies() {
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const searchUrl = `http://www.omdbapi.com/?s=${encodeURIComponent(genre)}&apikey=${apiKey}`;

    return fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const moviePromises = data.Search.map(movie => {
                    return fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
                        .then(response => response.json())
                        .then(movieData => {
                            if (movieData.imdbRating && parseFloat(movieData.imdbRating) > 5) {
                                return movieData;
                            }
                        });
                });

                return Promise.all(moviePromises)
                    .then(movies => movies.filter(movie => movie)); // Filter out undefined values
            } else {
                console.error(data.Error);
                return [];
            }
        })
        .catch(error => {
            console.error('Error:', error);
            return [];
        });
}

// Display a random movie
function displayRandomMovie(movies) {
    if (movies.length === 0) {
        document.getElementById('movieList').innerHTML = '<p>No movies found with IMDb rating above 7.</p>';
        return;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];

     const num = `${movie.Metascore}`
    const title =`${movie.Title}` 
    const year =`${movie.Year}` 
    const actors =`${movie.Actors}`
    const imbd =`${movie.imdbRating}` 
    const poster =`${movie.Poster}` 
    const genre =`${movie.Genre}` 
    const type =`${movie.Type}` 
    const plot = `${movie.Plot}`
    const lang = `${movie.Language}`
    const run = `${movie.Runtime}`

    console.log(title)


    var circle = document.querySelector('#svg #bar');

    if (isNaN(num)) {
        
    } else {
        var r = circle.getAttribute('r');
        var c = Math.PI * (r * 2);
    
        if (num < 0) { num = 0; }
        if (num > 100) { num = 100; }
    
        var pct = ((100 - num) / 100) * c;
    
        circle.style.strokeDashoffset = pct;
    
        document.getElementById('cont').setAttribute('data-pct', num);
    }

    var cal = imbd*10;
    console.log(cal);
    document.getElementById("meter").style.width = cal + '%';
   
    //content section
    document.getElementById("pic").src = poster;
    document.getElementById("percent").innerHTML = "<strong>Imdb</strong> " + cal + '%'
    document.getElementById("name").innerText = title;
    document.getElementById("year").innerHTML =  year
    document.getElementById("genre").innerHTML = "<strong>Genre</strong> : "  + genre 
    document.getElementById("type").innerHTML ="Type : " + type
    document.getElementById("imdb").innerHTML = "Imbd : " + imbd
    document.getElementById("actors").innerHTML = "Actors : " + actors
    document.getElementById("plot").innerHTML = plot;
    document.getElementById("lang").innerHTML = "<strong>LANGUAGE</strong> : " + lang;
    document.getElementById("run").innerHTML = "<strong>RUN TIME</strong> : " + run;
    document.getElementById("main").style.backgroundImage = `url(${poster})`;

  
}

// Fetch and display movies every 15 seconds
function startMovieDisplay() {
    fetchMovies().then(movies => {
        displayRandomMovie(movies);
        setInterval(() => {
            fetchMovies().then(movies => displayRandomMovie(movies)); // Refresh movies every 15 seconds
        }, 15000); // 15 seconds
    });
}

// Start the movie display
startMovieDisplay();












/*
var circle = document.querySelector('#svg #bar');

if (isNaN(sampleNum)) {
    sampleNum = 100; // Assign 100 if the value is not a number
} else {
    var r = circle.getAttribute('r');
    var c = Math.PI * (r * 2);

    if (sampleNum < 0) { sampleNum = 0; }
    if (sampleNum > 100) { sampleNum = 100; }

    var pct = ((100 - sampleNum) / 100) * c;

    circle.style.strokeDashoffset = pct;

    document.getElementById('cont').setAttribute('data-pct', sampleNum);
}

//search

/*

document.getElementById('searchButton').addEventListener('click', function() {
    const movieTitle = document.getElementById('movieTitle').value;
    const apiKey = 'df46bc53'; // Replace with your OMDb API key
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const movieInfo = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <img src="${data.Poster}" alt="${data.Title}" style="width: 200px;">
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
                `;
                document.getElementById('movieInfo').innerHTML = movieInfo;
            } else {
                document.getElementById('movieInfo').innerHTML = `<p>Movie not found!</p>`;
            }
        })
        .catch(error => console.error('Error:', error));
});

//search ends

*/


