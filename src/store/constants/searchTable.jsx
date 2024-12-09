import * as movieService from '~/services/movieService';

const getMovieData = async () => {  
    const data = await movieService.get()
    console.log("data ne hahaha: ", data);
    console.log('data.records ne hahah: ', data.records);
    return data.records;
}

export const SEARCH_TABLE = {
    SCHEDULE: [{ type: 'select', label: 'Movie', id: 'movieId', name: 'movieId', data: await getMovieData() },],
};
