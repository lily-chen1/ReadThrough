//import './resources/ScriptDisplay.css';
import Data from "../script_mock_data.json";
import {useState, useEffect} from "react";
import { db } from "../firebase";
//import { ref, child, get } from "firebase/database";
import { collection, getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";


function ScriptDisplay() {
    const [scripts, setScripts] = useState({});
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
            snapshot.docs.forEach(doc => {
                // doc is a DocumentSnapshot with actual data
                doc_array.push(doc.data());
            })
            setScripts(doc_array);
            setLoading(false);
            }  
            else {
            console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }


    const load_more = (event) => {
        setPaginate((prevValue) => prevValue+8)
    }


    return (
        <div className="container">
            <h2>Real data from firebase!</h2>
            <ul className="card-grid">
                {Object.keys(scripts).map((key) => (
                    <li key={key}>
                        <article className="card">
                            <div className="card-content">
                                <div class="header">
                                    <h4>{scripts[key].title}</h4>
                                    Author:{" "} <span>{scripts[key].authorName}</span>
                                </div>
                                <ol className="card-list">
                                    <li>
                                        Logline:{" "} <span>{scripts[key].logline}</span>
                                    </li>
                                    <li>
                                        <span>{scripts[key].genre[0]}, {scripts[key].tags[0]}</span>
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
            <h2>Not-so real data!</h2>
            <ul className="card-grid">
                {Data.slice(0, paginate).map((item) => (
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
                                        <span>{item.genres[0]}</span>
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

const ScriptList = ({ scripts }) => (
    <div>
      <h2>List of scripts</h2>
      {Object.keys(scripts).map((key) => (
        <div key={key}>{scripts[key].title+","+scripts[key].authorName+","+scripts[key].genre}</div>
      ))}
    </div>
  );

export default ScriptDisplay;