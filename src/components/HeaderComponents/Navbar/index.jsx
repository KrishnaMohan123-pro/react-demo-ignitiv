import { Link, useSearchParams } from "react-router-dom";
import "./index.css";


const quizApiParams = require("../../../utility/quizApiParams.json");
export default function Navbar(){
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = searchParams.get('limit') ? searchParams.get('limit') : '10';
    const difficulty = searchParams.get('difficulty') ? searchParams.get('difficulty') : 'easy';
    return <div className="nav-bar">{quizApiParams.categories.map((item, index) => {
        return <Link to={'/questions?category=' + item + '&limit=' + limit + '&difficulty=' + difficulty} key={index} className="nav-items">{item}</Link>
    })}</div>
}