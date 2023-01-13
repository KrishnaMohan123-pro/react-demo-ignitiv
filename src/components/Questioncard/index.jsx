import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
 import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import './index.css';
import AnswerCard from '../AnswerCard';
import { useSearchParams } from 'react-router-dom';
import { addUserScoreToDB } from '../../services/firebase';
import userId from '../../utility/getUserIdFromCookie';

function QuestionCard(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const limit = searchParams.get('limit');
    const Data = props.data;
    const [disable, setDisable] = React.useState(false);
    const [totalCorrectAnswer, setTotalCorrectAnswer] = useState('');
    const [answers, setAnswers] = useState({});
    const AnswerData = [];
    const CorrectAnswerData = [];
    for(let j=0; j<Data.length; j++){
      CorrectAnswerData.push({
        name: Data[j].question,
        answer: Data[j].correct_answer
      })
    }
    const submitTest=(event)=>{
      event.preventDefault();
      for(let i=1; i<event.target.length; i++){
        if(event.target[i].checked === true){
          AnswerData.push({
            name: event.target[i].name,
            answer: event.target[i].defaultValue
          });
        }
      }
      var CorrectAnswers = Object.keys(answers).map((key) => [Number(key), answers[key]]);
      setTotalCorrectAnswer("Correct Answers: "+CorrectAnswers.length)
      setDisable(true);
      const payload = {};
      payload.id = userId;
      payload.category = category.toLowerCase();
      payload.difficulty = difficulty.toLowerCase();
      payload.marks = CorrectAnswers.length
      payload.total = parseInt(limit)
      addUserScoreToDB(payload);
    }

        return (
            <div>
              <form onSubmit={submitTest}>
                <FormControl component="fieldset">
                      {/* <FormLabel component="legend">Gender</FormLabel> */}
                      <h1>Questions</h1>
                        <Grid container spacing={3}>
                                {Data.map((item, index)=> (
                                    <Grid item xs={12} key={item.id}>
                                      {/* {console.log("item", item)} */}
                                        <Card className="QuestionCard Container" variant="outlined">
                                          <CardContent>
                                            <Typography variant="h5" component="h2">
                                            <span>{index+1}.</span><span> {item.question}</span>
                                            </Typography>
                                          </CardContent>
                                          <CardActions>
                                              <AnswerCard item={item} handleAnswerClick={setAnswers} />
                                          </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                  <br/>
                  <Button variant="contained" color="primary" type='submit' disabled={disable} > Submit Test </Button>
                <br/>
                <p> {totalCorrectAnswer}</p>
                </FormControl>
              </form>
            </div>
          )
    }

  export default QuestionCard;

