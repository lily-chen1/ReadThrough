import {useState, useEffect} from "react";
import '../SearchResults.css';
import Data from "../mockData.json";


// Note: the empty deps array [] means
// this useEffect will run once
function SearchResults() {
  const [error, setError] = useState(null);
  //const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({});
  const [paginate, setPaginate] = useState(8)


  const search_parameters = Object.keys(Object.assign({}, ...Data));
  const filter_position = [...new Set(Data.map((item) => item.position))];
  const filter_genre = [...new Set(Data.map((item) => item.genre))];

  function search(items) {
      return Data.filter((item) =>{
            let passedFilters = true;
            Object.keys(filter).forEach(filterName => {
                console.log(item[filterName], filter[filterName])
                if(filter[filterName] != "" && item[filterName] != filter[filterName] ){
                    passedFilters = false;
                }
            })
            console.log(passedFilters)
            if(passedFilters){
                return search_parameters.some((parameter) =>
                    item[parameter].toString().toLowerCase().includes(query),
                )
            }

        }
        //  item.position.includes(filter) && search_parameters.some((parameter) =>
        //       item[parameter].toString().toLowerCase().includes(query),
        //   )
      );
  }

  const load_more = (event) => {
    setPaginate((prevValue) => prevValue+8)
  }


  if (error) {
      return <>{error.message}</>;
  } else {
      return (
          <div className="wrapper">
              <div className="search-wrapper">
                  <label htmlFor="search-form">
                      <input
                          type="search"
                          name="search-form"
                          id="search-form"
                          className="search-input"
                          placeholder="Search for..."
                          onChange={(e) => setQuery(e.target.value)}
                      />
                      <span className="search-only">Search for People</span>
                  </label>

                  <div className="select">
                      <select
                          onChange={(e) => setFilter({...filter, "position":e.target.value})}
                          className="custom-select"
                          aria-label="Filter People By Position">

                          <option value="">Filter By Position</option>
                          {filter_position.map((item) => (
                              <option value={item}>Filter By {item}</option>
                              
                          ))}
                      </select>
                      <span className="focus"></span>
                  </div>

                  <div className="select">
                      <select
                          onChange={(e) => {
                            setFilter({...filter, "genre":e.target.value}) //...filter -> appends to dict
                            console.log(e.target.value)
                        }}
                          className="custom-select"
                          aria-label="Filter People By Genre">

                          <option value="">Filter By Genre</option>
                          {filter_genre.map((item) => (
                              <option value={item}>Filter By {item}</option> 
                          ))}
                      </select>
                      <span className="focus"></span>
                  </div>
              </div>

              <ul className="card-grid">
                  {search(Data).slice(0, paginate).map((item) => (
                      <li key={item.id}>
                          <article className="card">
                              <div className="card-image">
                                  <img
                                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                                  />
                              </div>
                              <div className="card-content">
                                  <h2 className="card-name">{item.name}</h2>
                                  <ol className="card-list">
                                      <li>
                                          Position:{" "} <span>{item.position}</span>
                                      </li>
                                      <li>
                                          Goal:{" "} <span>{item.goal}</span>
                                      </li>
                                      <li>
                                          Genre:{" "} <span>{item.genre}</span>
                                      </li>
                                  </ol>
                              </div>
                          </article>
                      </li>
                  ))}
              </ul>
              <button onClick={load_more}>Load More</button>
          </div>
      );
  }
}

export default SearchResults;