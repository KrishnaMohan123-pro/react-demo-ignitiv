import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './index.css';
import { Container } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

function AnswerCard(props) {
    const item = props.item;
    const Id = item.id;
    const [value, setValue] = useState('');
    const handleChange = (event) => {
      setValue(event.target.value);
            if(item.correct_answers[event.target.value] === "true"){
                props.handleAnswerClick(prev=>{
                    const newObj = prev; 
                    newObj[Id] = true;
                    return newObj;
                })
                props.onAnswerClick(prev=>{
                    const newObj = prev; 
                    newObj[Id] = true;
                    return newObj;
                })
              }else{
                props.onAnswerClick(prev=>{
                    const newObj = prev; 
                    newObj[Id] = false;
                    return newObj;
                })
              }
    };
    return(
        <Container>
            <RadioGroup className='answerCardRadioGroup' aria-label={item.question} name={item.question} value={value} onChange={handleChange}>
                <Grid container spacing={3}>
                    {item.answers.answer_a ? <Grid item xs={12} sm={6}>
                    <FormControlLabel value="answer_a_correct" control={<Radio />} label={item.answers.answer_a} />
                    </Grid>: null }

                    {item.answers.answer_b ? <Grid item xs={12} sm={6}>
                    <FormControlLabel value="answer_b_correct" control={<Radio />} label={item.answers.answer_b} />
                    </Grid>: null }

                    {item.answers.answer_c ? <Grid item xs={12} sm={6}>
                    <FormControlLabel value="answer_c_correct" control={<Radio />} label={item.answers.answer_c} />
                    </Grid>: null }

                    {item.answers.answer_d ? <Grid item xs={12} sm={6}>
                    <FormControlLabel value="answer_d_correct" control={<Radio />} label={item.answers.answer_d} />
                    </Grid>: null }

                    {item.answers.answer_e ? <Grid item xs={12} sm={6}>
                    <FormControlLabel value="answer_e_correct" control={<Radio />} label={item.answers.answer_e} />
                    </Grid>: null }

                    {item.answers.answer_f ? <Grid item xs={12} sm={6}>
                    <FormControlLabel value="answer_f_correct" control={<Radio />} label={item.answers.answer_f} />
                    </Grid>: null }

                    {/* <Button variant="contained" color="primary" type='submit' onClick={submitQuestionCard}> Submit Answer </Button> */}
                </Grid>
            </RadioGroup>
            {/* <p>your answer is : {answer}</p> */}
        </Container>
    )
}
export default AnswerCard;