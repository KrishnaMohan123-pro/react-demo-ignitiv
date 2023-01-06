import { Link } from "react-router-dom";
import "./index.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from "../../../resources/light-logo-final.png";

export default function Header() {
    return <>
        <div className="headerMain">
            <Grid container>
                <Grid className="logoPart" item xs={4}>
                    <Link to="/">
                        <img className="ignitivLogo" src={logo} alt="Ignitiv Logo"></img>
                    </Link>
                </Grid>
            </Grid>
        </div>
    </>
}