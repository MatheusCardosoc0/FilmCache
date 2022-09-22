import axios from 'axios'


//base Url: https://api.themoviedb.org/3
//url : https://api.themoviedb.org/3/movie/now_playing?api_key=ccbfbc8dd52c71d7f1a46e1b46db20ee

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
})

