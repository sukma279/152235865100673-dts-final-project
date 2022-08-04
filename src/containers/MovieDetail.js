import { Box } from '@mui/material';
import NowPlayingMovie from '../components/NowPlayingMovie';
import PopularMovie from '../components/PopularMovie';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';

const MovieDetail = () => {
    let params = useParams();

    return (
        <Box>
            <DetailCard id_gif={params.id}></DetailCard>
            <NowPlayingMovie/>
            <PopularMovie/>
        </Box>
    );
}

export default MovieDetail;
