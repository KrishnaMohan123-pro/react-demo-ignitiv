import './index.css'
import { FormControlLabel, Radio } from "@material-ui/core";
import { useSearchParams } from 'react-router-dom';



export default function SidebarOptions(props) {

  const [searchParams, setSearchParams] = useSearchParams();
  
  function handleOptionSelect(e) {
    e.preventDefault();
    let query;
    const value = e.currentTarget.innerText;
    const category = searchParams.get('category');
    const limit = searchParams.get('limit') ? searchParams.get('limit') : '10';
    const difficulty = searchParams.get('difficulty') ? searchParams.get('difficulty') : 'easy';
    if (props.type === 'difficulty') {
      query = `category=${category}&difficulty=${value}&limit=${limit}`
    } else {
      query = `category=${category}&difficulty=${difficulty}&limit=${value}`
    }
    
    setSearchParams(query);
  }

    return  <FormControlLabel
    value={props.value}
    control={<Radio className='radio-button' value={props.value} color='primary'/>}
    label={props.value}
    labelPlacement="end"
    className="side-bar-option"
    checked={props.selected}
    onClick={handleOptionSelect}
  />
}