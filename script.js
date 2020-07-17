"use strict";

const numberOfFilm = +prompt('Сколько фильмов вы прсмотрели', '');

const personalMovirDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: {},
    privet: false

};

for (let i = 0; i < 2; i++) {
    const a = prompt('Which cind of film you see last time', '' ),
          b = prompt('Do you like it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovirDB.movies[a] = b;  
        console.log('OK');
    }else{
        console.log("error");
        i--;
    }      

        
}

if (personalMovirDB.count < 10) {
    console.log("Very less");

} else if (personalMovirDB.count >= 10 && personalMovirDB.count < 30 ) {
    console.log('Very good');
} else if (personalMovirDB.count >= 30) {
    console.log('You are cinimamen');
} else {
    console.log("fail");
}


console.log(personalMovirDB);


