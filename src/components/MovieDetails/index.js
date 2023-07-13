import {ListGroup} from "react-bootstrap";
import {Loading} from "../Loading";
import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {Authentication} from "../../Context/Authenticate";

export const MovieDetails = ({
                                 loading,
                                 poster,
                                 title,
                                 genres,
                                 rating,
                                 votes,
                                 country,
                                 year,
                                 released,
                                 runtime,
                                 writer,
                                 actors,
                                 director,
                                 plot
                             }) => {

    const {isLogin, setIsLogin} = useContext(Authentication)
    if (!isLogin) {
        return <Navigate to="/login" />
    }
    if (loading) {
        return <Loading/>
    }
    return (
        <div className='container p-2'>
            <div className='p-2 bg-light border border-light-suble rounded-4'>
                <div className="row flex-wrap">
                    <div className="p-2 col-sm-12 col-md-12 col-lg-3 d-flex align-items-center">
                        <img className="w-100" src={poster} alt="movie-poster"/>
                    </div>
                    <ListGroup className="p-2 col-sm-12 col-md-12 col-lg-9">
                        <ListGroup.Item className="w-100 d-flex justify-content-between align-items-center">
                            <p>Movie Title:</p>
                            <p>{title}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Genres:</p>
                            {/*<p>{genres.join(',')}</p>*/}
                            <div>{genres.map(e => (
                                <p key={e}>
                                    <a className="text-decoration-none link-dark" href="#">{e} </a>
                                </p>
                            ))}</div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>IMDb Rating:</p>
                            <p className="text-end">{rating} / 10 <br/> from {votes} votes </p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Country:</p>
                            <p>{country}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Year:</p>
                            <p>{year}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Release Date:</p>
                            <p>{released}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Duration:</p>
                            <p>{runtime}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Writer:</p>
                            <p className="text-end">{writer}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Actors:</p>
                            <p>{actors}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p>Director:</p>
                            <p>{director}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <p className="m-2">{plot}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div></div>
            </div>
        </div>
    )
}
