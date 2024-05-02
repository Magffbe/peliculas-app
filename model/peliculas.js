var peliculas = require('./peliculas')

class Movie {
    constructor (titulo, director, genero, anio){
        this.titulo = titulo
        this.director = director
        this.genero = genero
        this.anio = anio
    }
}

getInfo(); {
    return `${this.titulo} - Dirigida por ${this.director}`;
}

class MovieCollection {
    constructor(){
        this.peliculas = [];
    }
}

addMovie(titulo, director, genero, anio); {
    const movie = new Movie(titulo, director, genero, anio);
    this.peliculas.push(movie);
}

getAllMoviesInfo(); {
    return this.peliculas.map(movie => movie.getInfo());

}

const movieCollection = new MovieCollection();
movieCollection.addMovie('Pulp Fiction', 'Quentin Tarantino', 'Drama', 1994);
movieCollection.addMovie('The Godfather', 'Francis Ford Coppola', 'Drama', 1972);
movieCollection.addMovie('The Dark Knight', 'Christopher Nolan', 'Action', 2008);

console.log(movieCollection.getAllMoviesInfo());

module.exports = peliculas;





