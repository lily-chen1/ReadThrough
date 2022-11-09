import {useState} from "react";
import './resources/ScriptDisplay.css';
import Data from "../script_mock_data.json";


function ScriptDisplay() {
    // const [paginate, setPaginate] = useState(8);

    // const load_more = (event) => {
    //     setPaginate((prevValue) => prevValue+8)
    // }

    return (
        <div className="container">
            <ul className="card-grid">
                {Data.slice(0, 8).map((item) => (
                    <li key={item.id}>
                        <article className="card">
                            <div className="card-content">
                                <div class="header">
                                    <h4>{item.title}</h4>
                                    Author:{" "} <span>{item.authorName}</span>
                                </div>
                                <ol className="card-list">
                                    <li>
                                        Logline:{" "} <span>{item.logline}</span>
                                    </li>
                                    <li>
                                        {/* Genre:{" "} <span>{item.genre[0]}</span> */}
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
            {/* <button onClick={load_more}>Load More</button> */}
        </div>
    );
}
export default ScriptDisplay;