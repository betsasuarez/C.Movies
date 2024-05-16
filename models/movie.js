const { v4: uuidv4 } = require('uuid');

class Movie {
  constructor(name, director, duration) {
    this.id = uuidv4();
    this.name = name;
    this.director = director;
    this.duration = duration;
  }
}

module.exports = Movie;
