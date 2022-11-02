import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './resources/NavBar.css';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

function NavBar() {
    const AddScript = () => {
        const title = prompt("title ?");
        const authorID = prompt("authorID?");
        const authorName = prompt("authorName?");
        const writerExp = prompt("writer Experience?");
        const genre1 = prompt("genre 1?");
        const genre2 = prompt("genre 2?");
        const genres = [];
        if (genre1 != ""){
            genres.push(genre1);
        }
        if (genre2 != ""){
            genres.push(genre2);
        }
        const logline = prompt("logline?");
        const link = prompt("link?");
        const tag1 = prompt("tag 1?");
        const tag2 = prompt("tag 2?");
        const tags = [];
        if (tag1 != ""){
            tags.push(tag1);
        }
        if (tag2 != ""){
            tags.push(tag2);
        }
        addDoc(collection(db, "scripts"), {
            title: title,
            authorID: authorID,
            authorName: authorName,
            writerExp: writerExp,
            genre: genres,
            logline: logline,
            link: link,
            tags: tags
        })
        .then((docRef)=> {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error(error);
        });
    };
    return (
        // <Navbar>
        //     <Container>
        //         <Navbar.Brand href="#home"> Home </Navbar.Brand>
        //         <Nav className="me-auto">
        //         <Nav.Link href="/setuser">Set User</Nav.Link>
        //         <Nav.Link href="/searchresults">Search</Nav.Link>
        //         <Nav.Link href="/users">Users</Nav.Link>
        //         <NavDropdown title="Profile" id="profile-nav-dropdown">
        //             <NavDropdown.Item href="profile">My profile</NavDropdown.Item>
        //             <NavDropdown.Item href="">Edit profile</NavDropdown.Item>
        //             <NavDropdown.Item href="">Settings</NavDropdown.Item>
        //             <NavDropdown.Divider/>
        //             <NavDropdown.Item href="">Logout</NavDropdown.Item>
        //         </NavDropdown>
        //         </Nav>
        //     </Container>
        //     </Navbar>


        // <nav className="navigation">
        // <a href="/home">
        //     Home
        // </a>
        // <div className="navigation-menu">
        //     <ul>
        //     <li>
        //         <a href="/setuser">Set User</a>
        //     </li>
        //     <li>
        //         <a href="/users">Users</a>
        //     </li>
        //     <li>
        //         <a href="/profile">Profile</a>
        //     </li>
        //     </ul>
        // </div>
        // </nav>

        

        <div className="navigation">
            <ul>
            <li className="navItem">
                <a href="/home">Home</a>
            </li>
            <li className="navItem">
                <a href="/setuser">Set User</a>
            </li>
            <li className="navItem">
                <a href="/users">Users</a>
            </li>
            <li className="navItem">
                <a href="/profile">Profile</a>
            </li>
            <li className="navItem">
                <a href="/searchresults">Script Search</a>, <Link onClick={AddScript} to="/searchresults">Add Script</Link>
            </li>
            </ul>
        </div>

    );

}

export default NavBar;