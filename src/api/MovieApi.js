import {api} from "./axiosConfig";

// Get All movies
export async function getAllMovies() {
  const searchChars = ['a', 'b', 'c'];
  let allMovies = [];

  for (const char of searchChars) {
    let page = 1;
    let totalResults = 0;
    let fetchedResults = 0;

    do {
      const res = await api.get("/", {
        params: { s: char, page },
      });
      if (res.data && res.data.Search) {
        allMovies = allMovies.concat(res.data.Search);
        totalResults = parseInt(res.data.totalResults, 10);
        fetchedResults += res.data.Search.length;
      } else {
        break;
      }
      page++;
    } while (fetchedResults < totalResults && page <= 10);
  }

  return allMovies;
}

// Search by title
export async function searchMovies(query, page = 1) {
  const res = await api.get("/", {
    params: { s: query, page },
  });
  return res.data;
}

// Search by Year
export async function searchMoviesByYear(year, page = 1) {
  const res = await api.get("/", {
    params: { y: year, page },
  });
  return res.data;
}

// Search by type
export async function searchMoviesByType(type, page = 1) {
  const res = await api.get("/", {
    params: { type, page },
  });
  return res.data;
}

// Search by Id
export async function getMovieById(id) {
  const res = await api.get("/", {
    params: { i: id },
  });
  return res.data;
}