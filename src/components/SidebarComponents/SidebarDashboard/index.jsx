import { Link } from "react-router-dom";
import './index.css'
export default function SidebarDashboard() {
    return <div className="side-bar-contents">
            <div className="dashboardSidebar">
                <div className="dashboardSidebarItems">
                    <Link className="dashboardSidebarLinks" to='/dashboard'>User Data</Link>
                </div>
                <div className="dashboardSidebarItems">
                    <Link className="dashboardSidebarLinks" to='/dashboard#Result'>Exam Result Details</Link>
                </div>
                
            </div>
    </div>
}