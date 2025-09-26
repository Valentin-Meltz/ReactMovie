import {api} from "./axiosConfig";

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

// Search by Id
export async function getMovieById(id) {
  const res = await api.get("/", {
    params: { i: id },
  });
  return res.data;
}