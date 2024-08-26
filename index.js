
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



function open(){
    document.getElementById("search_result").style.display = 'block'
}
function close() {
    document.getElementById("search_result").style.display = 'none';
}


// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', function() {
    const movieTitle = document.getElementById('movieTitle').value;
    const apiKey = 'df46bc53'; // Replace with your OMDb API key
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const M_name = data.Title;
                const M_year = data.Year;
                const M_poster = data.Poster;
                const M_genre = data.Genre;
                const M_plot = data.Plot;
                const M_rating = data.imdbRating;

                $('#Movie_name').html(M_name);
                $('#M_year').html(M_year);
                $('#Picture').attr('src', M_poster); // Use attr() to set the src attribute
                $('#M_genere').html(M_genre);
                $('#M_plot').html(M_plot);
                $('#M_rating').html(`IMDB Rating: ${M_rating}`);
                
                // Show the search results
                open()
     
            } else {

                open()
                $('#Movie_name').html(`<p>Movie not found!</p>`);
                
                // Show the search results
 
            }
        })
        .catch(error => console.error('Error:', error));
});






