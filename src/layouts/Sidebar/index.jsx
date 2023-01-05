import { useLocation } from 'react-router-dom'
import SidebarDashboard from '../../components/SidebarComponents/SidebarDashboard';
import SidebarQuestions from '../../components/SidebarComponents/SidebarQuestions';

import './index.css'
export default function Sidebar() {
    const location = useLocation();
    const currentPath = location.pathname;
    if(currentPath === '/questions') {
        return <div className="side-bar">
            <SidebarQuestions/>
            </div>
    }
    if(currentPath === '/dashboard') {
        return <div className="side-bar">
            <SidebarDashboard/>
            </div>
    }
    
}