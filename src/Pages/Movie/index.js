import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {GetData} from "../../Services/Http";
import {MovieDetails} from "../../components/MovieDetails";

export const Movie = () => {
    let { movieId } = useParams();
    movieId = Number(movieId);

    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {

            GetData(setLoading, `movies/${movieId}`)
                .then(res => {
                    setMovie(res)
                })
                .catch(err => console.log(err))

    },[movieId])

    return (
        <MovieDetails
            loading={loading}
            poster={movie.poster}
            title={movie.title}
            genres={movie.genres}
            rating={movie.imdb_rating}
            votes={movie.imdb_votes}
            released={movie.released}
            runtime={movie.runtime}
            year={movie.year}
            country={movie.country}
            writer={movie.writer}
            actors={movie.actors}
            plot={movie.plot}
            director={movie.director}
        />
    )
}

