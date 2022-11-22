import { db } from "../firebase";
import { collection, getDocs, doc, addDoc,setDoc} from "firebase/firestore";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { resolveConfig } from "prettier";

function ScriptFunctions() {
    const [scripts, setScripts] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        accessScriptsandReviews();
    }, []);

    async function accessScriptsandReviews() {
        const doc_array = [];
        await getDocs(collection(db, "scripts"))
        .then((snapshot) => {
            if (snapshot.docs.length > 0) {
                snapshot.docs.forEach((doc) => {
                    // doc is a DocumentSnapshot with actual data
                    var temp = doc.data();
                    temp.docID = doc.id;
                    doc_array.push(temp);
                });
            }  
            else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });

        for(var i in doc_array){
            await getDocs(collection(db, "scripts", doc_array[i].docID, "ratings"))
            .then((snapshot) => {
                if (snapshot.docs.length > 0) {
                    var temp = 0;
                    var len = 0;
                    snapshot.docs.forEach((doc) => {
                        temp = temp + doc.data().outof5;
                        len = len + 1;
                    });
                    doc_array[i].outof5 = temp/len;
                }  
                else {
                    doc_array[i].outof5 = 2.5;
                }
                    
            })
            .catch((error) => {
                console.error(error);
            });
        }

        setScripts(doc_array);
        setLoading(false);
    }

    const add_script = async() => {
        const title = prompt("Title?");
        const authorID = prompt("Author ID?");
        const authorName = prompt("Author Name?");
        const genre1 = prompt("genre 1?");
        const genre2 = prompt("genre 2?");
        const logline = prompt("logline?");
        const link = prompt("link?");
        const scriptType = prompt("script Type?");
        const length = prompt("length?");
        const tag1 = prompt("tag 1?");
        const tag2 = prompt("tag 2?");
        const writerExperience = prompt("writer Experience?");
        const docData = {
            title : title,
            authorID : authorID,
            authorName : authorName,
            genres : [genre1,genre2],
            logline : logline,
            link : link,
            scriptType : scriptType,
            length : length, 
            tags : [tag1,tag2],
            writerExperience : writerExperience
        };

        const docRef = await addDoc(collection(db, "scripts"), docData);
        console.log("Script written with ID: ", docRef.id);
    };
    
    const review_script = async(key) => {
        const reviewer = prompt("Name of reviewer?");
        const outof5 = prompt("Rate the script on a scale 1-5");
        const review = prompt("What do you have to say about the script?");

        const docData = {
            reviewer : reviewer,
            outof5 : parseInt(outof5),
            review : review,
        };

        if (outof5 >= 1 && outof5 <= 5)
        {
            const docRef = await addDoc(collection(db,"scripts",key,"ratings"), docData);
            console.log("Review written with ID: ", docRef.id);
        }
    };


    if (loading) {
        return <h1>loading</h1>
    } else {
        return (
            <div className="wrapper">
                <div>
                    <h2>List of scripts </h2> 
                    {Object.keys(scripts).map((key) => (
                    <div>
                        {<div key={key}>{scripts[key].docID+","+scripts[key].authorName+","+scripts[key].genres[0]+","+scripts[key].genres[1]} <Link onClick={() => review_script(scripts[key].docID)}>Review</Link> {","+scripts[key].outof5}</div>}
                    </div>
                    ))}
                    <button onClick={add_script}>Add Script</button>
                </div>
        
            </div>
        );
    }
}


export default ScriptFunctions;