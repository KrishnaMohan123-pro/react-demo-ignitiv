import { Link } from "react-router-dom";

export default function SidebarDashboard() {
    return <div className="side-bar-contents">
            <div>
                <Link to='/dashboard'>User Data</Link>
            </div>
            <div>
                <Link to='/dashboard#Result'>Result /Marks</Link>
            </div>
    </div>
}