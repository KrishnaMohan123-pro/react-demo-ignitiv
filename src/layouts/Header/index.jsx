import Navbar from "../../components/HeaderComponents/Navbar";
import TopHeader from '../../components/HeaderComponents/Header'

export default function Header() {
    return <div className="header">
        <div className="top-header">
        </div>
        <TopHeader/>
        <Navbar/>
    </div>
}