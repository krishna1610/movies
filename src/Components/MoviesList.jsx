import React from "react";

const movieURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=844fefe57b679c2e68335be1fc2ab4bd";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: null,
      page: 1,
    };
    this.loadMoreMovies = this.loadMoreMovies.bind(this);
  }

  fetchMovies() {
    let url = movieURL;
    url += "&page=" + this.state.page + "&sort_by=" + this.props.sortBy;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Data not found");
        }
      })
      .then((data) => {
        return data.results;
      })
      .then((newResults) => {
        let allResults = [...this.state.results];
        allResults.push(...newResults);
        this.setState({ results: allResults, error: null });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error });
      });
  }

  componentDidMount() {
    console.log(this.props.sortBy);
    this.fetchMovies();
  }

  loadMoreMovies() {
    let newPage = this.state.page + 1;
    this.setState(
      {
        page: newPage,
      },
      () => {
        this.fetchMovies();
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h2>{this.props.title}</h2>
        <div className="row row-cols-5 g-3">
          {this.state.results.map((result, index) => {
            return (
              <div className="col d-flex" key={index}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    className="card-img-top"
                    alt={result.original_title}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{result.original_title}</h5>
                    <p className="card-text">{result.release_date}</p>
                    <p className="card-text">{result.vote_average * 10}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={() => {
            this.loadMoreMovies();
          }}
        >
          Load More
        </button>
      </div>
    );
  }
}

export default MoviesList;
