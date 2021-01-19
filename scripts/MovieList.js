import {useMovies} from "./MovieDataProvider.js"
import {Movie} from "./Movie.js"

let movieListContainer = document.querySelector("#movieList-container")//selecting the piece of html in index.html where this info will go after we build the new list

export function MovieList(){//this is the function that can call the new list
    const allTheMovies = useMovies();

    let movieListHTMLString = "";//this is the new list we're building

    for(let i=0; i<allTheMovies.length; i++) {
        movieListHTMLString += Movie(allTheMovies[i]);//this is smushing togehter the new list we're building and the html component we built on the movie.js module after its being looped through and applied to all the movies.

    }

    console.log(movieListHTMLString);//we console.log the new list we built so it shows all the new applied html components

    movieListContainer.innerHTML = `${movieListHTMLString}`//now the new html string we built is completed and put into the container 
}