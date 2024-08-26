# Movie Lovers World

**Movie Lovers World** is a dynamic web application that displays random movies fetched from the OMDb API based on specific genres. The project uses Bootstrap for styling and JavaScript for fetching and displaying the movie data.

## Features

- Displays random movies from different genres.
- Fetches movie details such as title, year, plot, genre, IMDb rating, and actors.
- Dynamically updates the page with a new movie every 15 seconds.
- Visualizes IMDb ratings with a progress bar.
- Responsive design using Bootstrap.

## Technologies Used

- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Backend**: JavaScript (Fetch API)
- **API**: [OMDb API](http://www.omdbapi.com/)
- **Fonts**: [Google Fonts - Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- **Icons**: Bootstrap Icons

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie-lovers-world.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-lovers-world
   ```
3. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

## Usage

1. Replace `YOUR_API_KEY` in `index.js` with your OMDb API key.
2. Open the website in your browser. The page will automatically fetch and display a random movie.
3. The movie information will refresh every 15 seconds with a new random movie.

## Project Structure

```
├── index.html          # The main HTML file
├── style.css           # Custom CSS styling
├── index.js            # JavaScript file to fetch and display movies
├── README.md           # Project documentation
└── assets/             # Directory for images, fonts, etc.
```

## Issues & Troubleshooting

- **404 Error**: Ensure that your OMDb API key is correctly added in `index.js`.
- **Slow Loading**: The application depends on external API calls, so response time may vary based on network conditions.

## Contributing

Feel free to fork this repository and submit pull requests. Any improvements or suggestions are welcome!
