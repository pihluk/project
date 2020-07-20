"use strict";

let numberOfFilm;

function start () {
    numberOfFilm = +prompt('Сколько фильмов вы прсмотрели', '');

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)){
        numberOfFilm = +prompt('Сколько фильмов вы прсмотрели', '');
    }

}

start();

const personalMovirDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: {},
    privet: false

};

function rememberMyFilms (){
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
}           
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovirDB.count < 10) {
        console.log("Very less");
    
    } else if (personalMovirDB.count >= 10 && personalMovirDB.count < 30 ) {
        console.log('Very good');
    } else if (personalMovirDB.count >= 30) {
        console.log('You are cinimamen');
    } else {
        console.log("fail");
    }
}
detectPersonalLevel();

function shoMyDB (hidden) {
    if (!hidden){
        console.log(personalMovirDB);

    }
}
shoMyDB(personalMovirDB);

console.log(personalMovirDB);

function showFirstMessage(){
    console.log('Helllo, world');
     
}


showFirstMessage();

function writeYoreGenerse () {
    for (let i = 1; i <= 3; i++){
        personalMovirDB.genres[i - 1] = prompt(`Youre lovle film number ${i}`); 
    }
}
writeYoreGenerse();
