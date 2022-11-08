import {useState} from "react";
// import '../resources/scriptDisplay.css';
import Data from "../script_mock_data.json";


function ScriptDisplay() {
  const [paginate, setPaginate] = useState(8);

  const load_more = (event) => {
    setPaginate((prevValue) => prevValue+8)
  }



    return (
        <div className="wrapper">
            <ul className="card-grid">
                {Data.slice(0, paginate).map((item) => (
                    <li key={item.id}>
                        <article className="card">
                            <div className="card-image">
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                                />
                            </div>
                            <div className="card-content">
                                <h2 className="card-name">{item.title}</h2>
                                <ol className="card-list">
                                    <li>
                                        Author:{" "} <span>{item.authorName}</span>
                                    </li>
                                    <li>
                                        Logline:{" "} <span>{item.logline}</span>
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
export default ScriptDisplay;