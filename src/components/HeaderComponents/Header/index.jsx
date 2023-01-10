import { Link } from "react-router-dom";
import "./index.css";
import Grid from '@material-ui/core/Grid';
import logo from "../../../resources/light-logo-final.png";
import Modal from "../../Modal"

export default function Header() {
    return <>
        <div className="headerMain">
            <Grid container>
                <Grid className="logoPart" item xs={4}>
                    <Link to="/">
                        <img className="ignitivLogo" src={logo} alt="Ignitiv Logo"></img>
                    </Link>
                </Grid>
                <Grid className="blankSpace" item xs={6}></Grid>
                <Grid className="loginLink" item xs={2}>
                    <Modal buttonText={`Sign In / Sign Up`} />
                </Grid>
            </Grid>
        </div>
    </>
}