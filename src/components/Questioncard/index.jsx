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

// import CircularProgress from '@material-ui/core/CircularProgress';
function QuestionCard(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const limit = searchParams.get('limit');
    const Data = props.data;
    const [disable, setDisable] = React.useState(false);
    const [totalCorrectAnswer, setTotalCorrectAnswer] = useState('');
    const [totalCorrectAnswerPercentage, setTotalCorrectAnswerPercentage] = useState('');
    const [totalAnsweredQuestion, setTotalAnsweredQuestion] = useState('');
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [answeredQuestion, setAnsweredQuestion] = useState({});
    const totalQuestion = Data.length;
    const singleQuestionPercentage = 100 / totalQuestion;

    // console.log("answeredQuestion", answeredQuestion);
    const submitTest=(event)=>{
      event.preventDefault();
      var CorrectAnswers = Object.keys(correctAnswers).map((key) => [Number(key), correctAnswers[key]]);
      var QuestionAnswered = Object.keys(answeredQuestion).map((key) => [Number(key), answeredQuestion[key]]);
      const correctAnswerPercentage = singleQuestionPercentage * CorrectAnswers.length;
      setTotalCorrectAnswer("Correct Answers: "+CorrectAnswers.length +" Questions");
      setTotalCorrectAnswerPercentage("Correct Answers Percentage: "+correctAnswerPercentage+"% out of 100%");
      setTotalAnsweredQuestion("Question Attempted: " + QuestionAnswered.length + " out of "+ totalQuestion + " Questions");
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
                                              <AnswerCard item={item} handleAnswerClick={setCorrectAnswers} onAnswerClick={setAnsweredQuestion} />
                                          </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                  <br/>
                  <Button variant="contained" color="primary" type='submit' disabled={disable} > Submit Test </Button>
                <br/>
                <p> {totalCorrectAnswer}</p>
                <p> {totalCorrectAnswerPercentage}</p>

                <p>{totalAnsweredQuestion}</p>
                </FormControl>
              </form>
            </div>
          )
    }

  export default QuestionCard;

