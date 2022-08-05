import * as React from 'react';
import tmdb from '../apis/tmdb';
import { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";

const DetailCard = ({ id_gif }) => {
    const [movie, setMovies] = useState([]);
    const [movieImage, setImageMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get(`gifs/${id_gif}`);
                setMovies(fetchedMovies.data.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, [id_gif]);

    useEffect(() => {
        const fetchImageMovies = async () => {
            try {
                const fetchedImageMovies = await tmdb.get(`gifs/${id_gif}`);
                setImageMovies(fetchedImageMovies.data.data.images.original.url);
            } catch (error) {
                console.log(error);
            }
        }

        fetchImageMovies();
    }, [id_gif]);

    return (
        <div>
            <div className="detail-movie-poster">
                <div className="detail-movie-poster-contain">
                    <h1>{`${movie.title ? movie.title : movie.username}`}</h1>
                    <div className="truncate">
                        <p>Made by {movie.username}</p>
                    </div>
                    <div className="button-group">
                        <button className="info-button">
                        <span
                            className="info-button-text"
                            style={{ width: "20px", textAlign: "center" }}
                        >
                            More Information
                        </span>
                        </button>
                    </div>
                </div>

                <img
                className="detail-movie-poster-image"
                src={`${movieImage}`}
                alt=""
                />
            </div>
            <div className="detail-movie-description">
                <h3>More about Gif</h3>
                <a href={`${movie.url}`} target="blank">{movie.url}</a>
            </div>
        </div> 
    );
}

export default DetailCard;