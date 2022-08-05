import { Box, Typography } from '@mui/material';
import * as React from 'react';
import tmdb from '../apis/tmdb';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";
import { useNavigate } from 'react-router-dom';

const PopularMovie = () => {
    let navigate = useNavigate();

    const onClickMovie = (id) => {
        navigate(`/detail/${id}`);
        window.scrollTo(0, 0)
    }

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("stickers/trending");
                setMovies(fetchedMovies.data.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Box sx={{margin: 10}}>
            <Typography variant="h6" gutterBottom component="div">
                Trending Sticker
            </Typography>
            <div className="container">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={3}
                    navigation={true}
                    modules={[Grid, Navigation]}
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                        },
                        "@0.75": {
                          slidesPerView: 3,
                        },
                        "@1.00": {
                          slidesPerView: 4,
                        },
                        "@1.50": {
                          slidesPerView: 5,
                        },
                      }}
                    className="mySwiper"
                >
                    {
                        movies.map(movie => (
                            <SwiperSlide id={movie.id}>
                                <div style={{ height: 200 }}
                                    className="imageContainer"
                                    onClick={() => onClickMovie(movie.id)}
                                    >
                                    {movie.images.fixed_height.url ? (
                                        <img
                                        src={`${movie.images.fixed_height.url}`}
                                        alt="poster"
                                        className="slide-img"
                                        />
                                    ) : (
                                        <img
                                        src={process.env.PUBLIC_URL + "/img/movie_logo.png"}
                                        alt="poster"
                                        className="slide-img"
                                        />
                                    )}
                                    <div className='imgTitle'>{movie.title}</div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </Box>  
    );
}

export default PopularMovie;