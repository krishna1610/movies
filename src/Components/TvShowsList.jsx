import React from "react";

const tvURL =
  "https://api.themoviedb.org/3/discover/tv?api_key=844fefe57b679c2e68335be1fc2ab4bd";

class TVShowsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: null,
      page: 1,
    };
    this.loadMoretvShows = this.loadMoretvShows.bind(this);
  }

  fetchTVShows() {
    let url = tvURL;
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
    this.fetchTVShows();
  }

  loadMoretvShows() {
    let newPage = this.state.page + 1;
    this.setState(
      {
        page: newPage,
      },
      () => {
        this.fetchTVShows();
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
                    alt={result.name}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{result.name}</h5>
                    <p className="card-text">{result.first_air_date}</p>
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
            this.loadMoretvShows();
          }}
        >
          Load More
        </button>
      </div>
    );
  }
}

export default TVShowsList;
