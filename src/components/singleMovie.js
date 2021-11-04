import "./singleMovie.css";

const SingleMovie = ({ movie }) => {
  return (
    <div className="movieContainer">
      <div className="left">
        <h1>{movie.Title}</h1>
        <div className="leftInfos">
          <div>
            {" "}
            <span>Year:</span> {movie.Year}
          </div>
          <div>
            {" "}
            <span> IMDB Rating:</span> {movie.imdbRating}
          </div>
          <div>
            <span>Genre:</span> {movie.Genre}
          </div>
        </div>
        <div className="ul">
          <div className="li">
            {" "}
            <span>Writer</span>: {movie.Writer}
          </div>
          <div className="li">
            {" "}
            <span>Director</span>: {movie.Director}
          </div>
          <div className="li">
            {" "}
            <span>Actors</span>: {movie.Actors}
          </div>
          <div className="li">
            {" "}
            <span>BoxOffice</span>: {movie.BoxOffice}
          </div>
          <div className="li">
            {" "}
            <span>Awards</span>: {movie.Awards}
          </div>
        </div>
        <div className="plot">{movie.Plot}</div>
      </div>
      <div className="right">
        <img src={movie.Poster} alt="Movie Poster" />
      </div>
    </div>
  );
};

export default SingleMovie;
