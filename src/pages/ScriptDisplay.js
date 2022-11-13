import "./resources/ScriptDisplay.css";
import Data from "../script_mock_data.json";
import { useState, useEffect } from "react";
import { db } from "../firebase";
//import { ref, child, get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";

function ScriptDisplay() {
  const [error, setError] = useState(null);
  const [scripts, setScripts] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({
    genres: [],
    scriptType: [],
    writerExperience: [],
  });
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState(8);
  const [favorite, setFav] = useState([]);

  useEffect(() => {
    getScripts();
  }, []);

  async function getScripts() {
    //const dbRef = ref(db);
    await getDocs(collection(db, "scripts"))
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          const doc_array = [];
          snapshot.docs.forEach((doc) => {
            // doc is a DocumentSnapshot with actual data
            doc_array.push(doc.data());
          });
          setScripts(doc_array);
          setLoading(false);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  console.log("Scripts: ", scripts);
  const search_parameters = Object.keys(Object.assign({}, ...scripts));
  // get unique genres from item.genres in Data
  const filter_genres = [...new Set(scripts.map((item) => item.genres))];
  const filter_unique_genres = [...new Set(filter_genres.flat())];
  const filter_script_type = [
    ...new Set(scripts.map((item) => item.scriptType)),
  ];
  const filter_writer_experience = [
    ...new Set(scripts.map((item) => item.writerExperience)),
  ];

  const filter_genre_objects = [
    ...filter_unique_genres.map(
      (item) =>
        new Object({ value: item, key: item, label: item, cat: "Genre" })
    ),
  ];

  const filter_scripttype_objects = [
    ...filter_script_type.map(
      (item) =>
        new Object({ value: item, key: item, label: item, cat: "Script Type" })
    ),
  ];

  const filter_writerexperience_objects = [
    ...filter_writer_experience.map(
      (item) =>
        new Object({
          value: item,
          key: item,
          label: item,
          cat: "Writer Experience",
        })
    ),
  ];

  const load_more = (event) => {
    setPaginate((prevValue) => prevValue + 8);
  };

  function filterAll(items) {
    // all filters applied, no search
    return items.filter((item) => {
      const filterKeys = Object.keys(filter);

      return filterKeys.every((key) => {
        if (!filter[key].length) {
          //if no filters, just show results based on search
          return search_parameters.some((parameter) =>
            item[parameter].toString().toLowerCase().includes(query)
          ); //if there are any filters
        }
        //else, return based on filters and search parameters
        else {
          console.log("Item at key: ", item[key]);
          if (Array.isArray(item[key])) {
            for (var i = 0; i < item[key].length; i++) {
              console.log("Item at key[i]: ", item[key][i]);
              if (filter[key].includes(item[key][i])) {
                return (
                  filter[key].includes(item[key][i]) &&
                  search_parameters.some((parameter) =>
                    item[parameter].toString().toLowerCase().includes(query)
                  )
                );
              }
            }
          } else {
            return (
              filter[key].includes(item[key]) &&
              search_parameters.some((parameter) =>
                item[parameter].toString().toLowerCase().includes(query)
              )
            );
          }
        }
      });
    });
  }

  function handleGenreFilters(items) {
    const genres = [...new Set(items.map((e) => e.value))];
    console.log("Genres: ", genres);
    const scriptTypeSaved = filter.scriptType;
    const writerExperienceSaved = filter.writerExperience;
    setFilter({
      genres: genres,
      scriptType: scriptTypeSaved,
      writerExperience: writerExperienceSaved,
    });
  }

  function handleTypeFilters(items) {
    const types = [...new Set(items.map((e) => e.value))];
    console.log("Script Type: ", types);
    const genreSaved = filter.genres;
    const writerExperienceSaved = filter.writerExperience;
    setFilter({
      genres: genreSaved,
      scriptType: types,
      writerExperience: writerExperienceSaved,
    });
  }

  function handleExperienceFilters(items) {
    const experience = [...new Set(items.map((e) => e.value))];
    console.log("Experience: ", experience);
    const genreSaved = filter.genres;
    const scriptTypeSaved = filter.scriptType;
    setFilter({
      genres: genreSaved,
      scriptType: scriptTypeSaved,
      writerExperience: experience,
    });
  }

  if (error) {
    return <>{error.message}</>;
  } else {
    return (
      <div className="wrapper">
        <div className="searchHeader">
          <h2 className="heading col-6">Start Reading Scripts!</h2>
          <label htmlFor="search-form" className="col-6">
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
        </div>

        <div className="container filters">
          <div className="row filter-row">
            <div className="col-sm filter-column" id="filter-selection-1">
              <Multiselect
                options={filter_genre_objects}
                placeholder="Genre"
                displayValue="key"
                filterable={true}
                onSelect={(e) => handleGenreFilters(e)}
                onRemove={(e) => handleGenreFilters(e)}
                closeOnSelect={false}
                hidePlaceholder={true}
                style={{
                  multiselectContainer: { width: "80%" },
                  chips: { background: "#93816250", color: "#6B665C" },
                  searchBox: {
                    color: "#6B665C",
                    border: "none",
                    "border-radius": "10px",
                    background: "#EDEBE3",
                    margin: 0,
                  },
                  optionContainer: { border: "none" },
                  option: { color: "#6B665C", "background-color": "#EDEBE3" },
                  inputField: { margin: 5 },
                }}
              />
            </div>
            <div className="col-sm filter-column" id="filter-selection-2">
              <Multiselect
                options={filter_scripttype_objects}
                placeholder="Script Type"
                displayValue="key"
                filterable={true}
                onSelect={(e) => handleTypeFilters(e)}
                onRemove={(e) => handleTypeFilters(e)}
                closeOnSelect={false}
                hidePlaceholder={true}
                style={{
                  multiselectContainer: { width: "80%" },
                  chips: { background: "#93816250", color: "#6B665C" },
                  searchBox: {
                    color: "#6B665C",
                    border: "none",
                    "border-radius": "10px",
                    background: "#EDEBE3",
                    margin: 0,
                  },
                  optionContainer: { border: "none" },
                  option: { color: "#6B665C", "background-color": "#EDEBE3" },
                  inputField: { margin: 5 },
                }}
              />
            </div>
            <div className="col-sm filter-column" id="filter-selection-3">
              <Multiselect
                options={filter_writerexperience_objects}
                placeholder="Writer Experience"
                displayValue="key"
                filterable={true}
                onSelect={(e) => handleExperienceFilters(e)}
                onRemove={(e) => handleExperienceFilters(e)}
                closeOnSelect={false}
                hidePlaceholder={true}
                style={{
                  multiselectContainer: { width: "80%" },
                  chips: { background: "#93816250", color: "#6B665C" },
                  searchBox: {
                    color: "#6B665C",
                    border: "none",
                    "border-radius": "10px",
                    background: "#EDEBE3",
                    margin: 0,
                  },
                  optionContainer: { border: "none" },
                  option: { color: "#6B665C", "background-color": "#EDEBE3" },
                  inputField: { margin: 5 },
                }}
              />
            </div>

            <span className="focus"></span>
          </div>
        </div>
        <div className="container">
          <ul className="card-grid">
            {filterAll(scripts)
              .slice(0, paginate)
              .map((item) => (
                <li key={item.id}>
                  <article className="card">
                    <div className="card-content">
                      <div class="header">
                        <h4 className="script-title">{item.title}</h4>
                        Author:{" "}
                        <span className="script-author">{item.authorName}</span>
                      </div>
                      <ol className="card-list">
                        <li>
                          Logline:{" "}
                          <span className="script-logline">{item.logline}</span>
                        </li>
                      </ol>
                      <div className="tag-list">
                        <span className="script-tag">{item.scriptType}</span>
                        {item.genres.map((genre) => (
                          <span className="genre-tag">{genre}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </li>
              ))}
          </ul>
          <button onClick={load_more}>Load More</button>
        </div>
      </div>
    );
  }
}
export default ScriptDisplay;
