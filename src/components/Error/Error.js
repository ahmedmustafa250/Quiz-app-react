import "./error.css"
import {useLocation} from "react-router-dom";

export default function Error(){
    let location=useLocation();
    return (
       <div className="error-main">
           <h1 className="error">Error Type :</h1>
           <h3 className="error1">Reference Error 404  "{location.pathname}"</h3>
       </div>

    )
}