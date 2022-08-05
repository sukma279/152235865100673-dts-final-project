import { Box, Card, CardContent } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageCard = ({ movie }) => {
    let navigate = useNavigate();

    const onClickMovie = (id) => {
        navigate(`/detail/${id}`);
        window.scrollTo(0, 0)
    }
    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 200 }}
                        className="imageContainer"
                        onClick={() => onClickMovie(movie.id)}
                        >
                        {movie.images.original.url ? (
                            <img
                            src={`${movie.images.original.url}`}
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
            </Box>
        </CardContent>
        </Card>
        
    );
}

export default ImageCard;