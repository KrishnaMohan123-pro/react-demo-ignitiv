import { Link } from "react-router-dom";
import "./index.css";


const quizApiParams = require("../../../utility/quizApiParams.json");
export default function Navbar(){
    console.log(quizApiParams);
    return <div className="nav-bar">{quizApiParams.categories.map((item, index) => {
        return <Link to="/questions" key={index} className="nav-items">{item}</Link>
    })}</div>
}