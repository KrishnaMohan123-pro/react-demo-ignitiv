import React from 'react'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import './index.css';

function AnswerCard(props) {
    const item = props.item;
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
      console.log(event.target.value);
      setValue(event.target.value);
    };
    return(
        <RadioGroup className='answerCardRadioGroup' aria-label={item.question} name={item.question} value={value} onChange={handleChange}>
            <Grid container spacing={3}>
                {item.answers.answer_a ? <Grid item xs={12} sm={6}>
                <FormControlLabel value={item.answers.answer_a} control={<Radio />} label={item.answers.answer_a} />
                </Grid>: null }

                {item.answers.answer_b ? <Grid item xs={12} sm={6}>
                <FormControlLabel value={item.answers.answer_b} control={<Radio />} label={item.answers.answer_b} />
                </Grid>: null }

                {item.answers.answer_c ? <Grid item xs={12} sm={6}>
                <FormControlLabel value={item.answers.answer_c} control={<Radio />} label={item.answers.answer_c} />
                </Grid>: null }

                {item.answers.answer_d ? <Grid item xs={12} sm={6}>
                <FormControlLabel value={item.answers.answer_d} control={<Radio />} label={item.answers.answer_d} />
                </Grid>: null }

                {item.answers.answer_e ? <Grid item xs={12} sm={6}>
                <FormControlLabel value={item.answers.answer_e} control={<Radio />} label={item.answers.answer_e} />
                </Grid>: null }

                {item.answers.answer_f ? <Grid item xs={12} sm={6}>
                <FormControlLabel value={item.answers.answer_f} control={<Radio />} label={item.answers.answer_f} />
                </Grid>: null }
            </Grid>
        </RadioGroup>
    )
}
export default AnswerCard;