''

const numberOfFilm = +prompt('Сколько фильмов вы прсмотрели', '');

const personalMovirDB = {
    count: {},
    movies: {},
    actors: {},
    genres: {},
    privet: false

};

const a = prompt('Which cind of film you see last time', '' ),
      b = prompt('Do you like it?', ''),
      c = prompt('Which cind of film you see last time', '' ),
      d = prompt('Do you like it?', '');  
      
personalMovirDB.movies[a] = b;     
personalMovirDB.movies[c] = d;

console.log(personalMovirDB);