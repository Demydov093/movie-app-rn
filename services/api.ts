export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3/movie/changes?page=1',
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint =
        query ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
            `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMBD_CONFIG.headers,
    })

    if (!response.ok) {
        throw new Error(
            'Fail', response.statusText);
    }

    const data = await response.json();

    return data.results;

}


// const url = '';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzZmMzRkMDJkZjI4NTQ5MGU2MDg4ODk5NWYwYmNmOSIsIm5iZiI6MTc1OTI1OTAzNS42NzYsInN1YiI6IjY4ZGMyOTliOTAwMWM1ZjA2ZGUxYzkzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hs5NXmBKUS-TAM8dJmEcdo9i0-vKZu2Bc-DLiQC5cWw'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));