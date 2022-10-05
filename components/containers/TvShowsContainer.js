import React, { useState, useEffect } from 'react'
import FormTvAndMovie from '../forms/FormTvAndMovie';
import Loading from '../layout/Loading'
import { getTvShows } from '../../services/api';
import MoviesList from '../lists/MoviesList';
import Pager from '../utils/Pager';
import { tvShowsSelectArr } from '../utils/constants';


const TvShowsContainer = ({ navigation }) => {
    const [ selectChoice, setSelectChoice ] = useState("popular")
    const [ isLoading, setIsLoading ] = useState(false)
    const [ movies, setMovies ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ totalPages, setTotalPages ] = useState(1)
    
    useEffect(() => {
        async function fetchMovies() {
            try {
                setIsLoading(true)

                const data = await getTvShows(selectChoice, page);
                
                setMovies([...data.results])

                // in API docs the maximum page that can be requested is 1000 
                setTotalPages(data.total_pages > 1000 ? 1000 : data.total_pages)

                setIsLoading(false)
                
            } catch (error) {
                throw error   
            }
        }

        fetchMovies();

    }, [selectChoice, page]);
   

    return (
        <>
            <FormTvAndMovie selectChoice={selectChoice} setSelectChoice={setSelectChoice} choices={tvShowsSelectArr} />
            {isLoading ? <Loading /> :<>
                <MoviesList navigation={navigation} movies={movies} type={'tv'}/> 
                <Pager page={page} setPage={setPage} totalPages={totalPages} /> 
            </>}

        </>
    )
}

export default TvShowsContainer
