import './resources/Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `profile`; 
      navigate(path);
    }
    return (
    <body>
        <div>
            <form onSubmit={routeChange}>
                <label>
                    Username:
                    <input type="text" name="Username" />
                </label>
                <label>
                    Password:
                    <input type="text" name="Password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </body>
    );
}



export default Login;
