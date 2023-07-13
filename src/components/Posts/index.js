import {Link, Navigate} from "react-router-dom";
import {Loading} from "../Loading";
import {useState} from "react";

export const Posts = ({data, loading}) => {

    if (loading) {
        return <Loading/>
    } else {
        return (
            data.map(post => {
                return (
                        <div key={post.id} className='my-1 col-sm-12 text-dark col-md-6'>
                            <div className="card flex-row">
                                <img src={post.poster} className="card-img-top w-50" alt="poster"></img>
                                <div className=" w-50">
                                    <div className='card-header h-25 d-flex justify-content-center align-items-center'>
                                        <h6 className="card-title h-25">{post.title}</h6>
                                    </div>
                                    <div
                                        className='card-body d-flex flex-column justify-content-around lh-sm text-start fs-6 h-50'>
                                        <p className="card-text">Year: {post.year}</p>
                                        <p className="card-text">Country: {post.country}</p>
                                        <p className="card-text">Rating: {post.imdb_rating}</p>
                                    </div>
                                    <div className='card-footer h-25 d-flex justify-content-center align-items-center'>
                                        <Link to={`/movie/${post.id}`} className="btn btn-primary">Movie Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

        )
    }
}
