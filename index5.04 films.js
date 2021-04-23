пусть numberOfFilms;

функция пословица(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while(numberOfFilms == " || numberOfFilms == null || isNaN (numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
проверка();

const personalMovieDB = {
  количество: numberOfFilms,
  фильмы: {},
  действующиелица : {},
  жанры: [],
  приват: ложь
};

функция rememberMyFilms(){
    для (пусть i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько оцените его?');   
        if(a != " && b != " && a != null && b != null && a.длина < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('готово');
        }
        еще{
            console.log('ошибка');
            я...; 
        }
    }
}
rememberMyFilms();

функция detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } остальное {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

функция writeYourGenres(){
    для(пусть i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр номер ${i}`);
    }
}
writeYourGenres();

функция showMyDB(скрытая){
    если(!скрытый) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

console.log(personalMovieDB);