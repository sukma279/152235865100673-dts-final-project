import { Box } from '@mui/material';
import NowPlayingMovie from '../components/NowPlayingMovie';
import PopularMovie from '../components/PopularMovie';

const MovieList = () => {
    return (
        <Box>
            <NowPlayingMovie/>
            <PopularMovie/>
        </Box>
    );
}

export default MovieList;
