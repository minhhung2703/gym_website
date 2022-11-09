import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
    return (
        <Box>
            <Detail />
            <SimilarExercises />
        </Box>
    )
}

export default ExerciseDetail