import './index.css'
import { FormControlLabel, Radio } from "@material-ui/core";



export default function SidebarOptions(props) {
    return  <FormControlLabel
    value={props.value}
    control={<Radio className='radio-button' value={props.value} color='primary'/>}
    label={props.value}
    labelPlacement="end"
    className="side-bar-option"
    checked={false}
  />
}