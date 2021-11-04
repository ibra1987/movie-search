import "./search.css";
import { useState } from "react";
import SingleMovie from "./singleMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [searchedQuery, setSearchQuery] = useState("");
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [movie, setMovie] = useState(null);
  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchedQuery}`;

  const submitForm = async (e) => {
    e.preventDefault();
    await fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (!data.Error) {
          setMovie(data);
          setErrorMessage(null);
        } else {
          setErrorMessage("no movie found");
          setMovie(null);
        }
        setSearchQuery("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="searchContainer">
      <form onSubmit={(e) => submitForm(e)}>
        <div className="formWrapper">
          {" "}
          <input
            type="text"
            placeholder="Movie name"
            value={searchedQuery}
            className="searchField"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} className="btn" />
          </button>
        </div>
      </form>
      {ErrorMessage !== null && <div className="notFound">{ErrorMessage}</div>}

      {movie !== null && <SingleMovie movie={movie} />}
    </div>
  );
};

export default Search;
