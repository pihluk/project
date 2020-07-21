'use strict';


const personalMovirDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privet: false,
    start: function () {
        personalMovirDB.count = +prompt('Сколько фильмов вы прсмотрели', '');
    
        while (personalMovirDB.count == '' || personalMovirDB.count == null || isNaN(personalMovirDB.count)){
            personalMovirDB.count = +prompt('Сколько фильмов вы прсмотрели', '');
        }
    },

    rememberMyFilms: function (){
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
    },
        detectPersonalLevel: function(){
            if (personalMovirDB.count < 10) {
                console.log("Very less");
            
            } else if (personalMovirDB.count >= 10 && personalMovirDB.count < 30 ) {
                console.log('Very good');
            } else if (personalMovirDB.count >= 30) {
                console.log('You are cinimamen');
            } else {
                console.log("fail");
            }
        },      
        shoMyDB:function (hidden) {
            if (!hidden){
                console.log(personalMovirDB);
        
            }
        },

        toggleVisibleMyDB: function(){
            if(personalMovirDB.privet){
                personalMovirDB.privet = false;
            } else{
                personalMovirDB.privet = true;

            }
     
        },

        writeYoreGenerse:function () {
            for (let i = 1; i <= 2; i++){
                let genres = prompt(`Youres lovle film `).toLocaleLowerCase();

                if (genres ==='' || genres == null){
                    console.log('pls complete text');
                    i--;
                } else{
                personalMovirDB.genres = genres.split(`,` );
                personalMovirDB.genres.sort();
             }

            }
           personalMovirDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    };





