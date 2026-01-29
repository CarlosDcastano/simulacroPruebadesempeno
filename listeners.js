import { app } from "./elements.js";
import { state } from "./state.js";
import { getAllUsersJs } from "./services.js";
import { renderSignUp} from "./render.js"

export function setupListeners() {

    app.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            console.log("click")
            renderSignUp()
        }
    })

    /* btnSearch.addEventListener("click", (event) => {
        getAllMoviesByTitle(wordToSearch.value)
    })

    selectGender.addEventListener("change", (event) => {
        getAllMoviesByGenre(event.target.value)
    })

    containerMovies.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            // Obtener la tarea actual en base al ID
            const selectedMovie = state.movies.find(movie => movie.id == event.target.dataset.movieId)
            deleteFavoriteMovie(selectedMovie.id)
        }
    }) */

}