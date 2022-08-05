import ImageCard from '../components/ImageCard';
import NowPlayingMovie from '../components/NowPlayingMovie';
import PopularMovie from '../components/PopularMovie';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import tmdb from '../apis/tmdb';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState('');
    const [foundImages, setFoundImages] = useState(movies);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("gifs/trending");
                setMovies(fetchedMovies.data.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
            const results = movies.filter((image) => {
            return image.title.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundImages(results);            
        } else {
            setFoundImages(movies);
        }
    
        setName(keyword);
    };
    console.log(foundImages)

    return (
        <Box>
            <div style={{ margin: '0 auto', marginTop: '10%', textAlign: 'center' }}>
                <label>Search:</label>
                <input
                    type="search"
                    value={name}
                    onChange={filter}
                    className="input"
                    placeholder="Filter"
                    style={{padding: '5px', width: '300px'}}
                />
            </div>
            {name && name.length > 0 ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {foundImages && foundImages.length > 0 ? (
                            foundImages.map(image => (
                                <ImageCard key={image.id} movie={image}></ImageCard>
                            ))
                    ) : (
                        <h1>No results found!</h1>
                    )}
                </Box>
            ) : (
                <Box>
                    <NowPlayingMovie/>
                    <PopularMovie/>
                </Box>
            )}
        </Box>
    );
}

export default MovieList;
