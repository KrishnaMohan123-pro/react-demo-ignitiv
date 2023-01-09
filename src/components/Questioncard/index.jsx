import React,{useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
 import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
 import FormControl from '@material-ui/core/FormControl';
//  import FormLabel from '@material-ui/core/FormLabel';
import './index.css';
import AnswerCard from '../AnswerCard';

function QuestionCard(props) {
        // console.log(props.data)
    const Data = props.data;
    const [disable, setDisable] = React.useState(false);
    const [totalCorrectAnswer, setTotalCorrectAnswer] = useState('');
    const [answers, setAnswers] = useState({});
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>
    const AnswerData = [];
    const CorrectAnswerData = [];
    for(let j=0; j<Data.length; j++){
      CorrectAnswerData.push({
        name: Data[j].question,
        answer: Data[j].correct_answer
      })
    }
    // console.log("CorrectAnswerData", CorrectAnswerData);
    const submitTest=(event)=>{
      event.preventDefault();
      // console.log("handleAnswerClick", answers);

      // console.log("test submit", event);
      for(let i=1; i<event.target.length; i++){
        if(event.target[i].checked === true){
          AnswerData.push({
            name: event.target[i].name,
            answer: event.target[i].defaultValue
          });
        }
      }
      //  console.log("AnswerData", AnswerData);
      //  console.log("CorrectAnswerData", CorrectAnswerData);

      // for(let i=0;i<AnswerData.length; i++){
      //   for(let j=0;j<CorrectAnswerData.length; j++){
      //     if(AnswerData[i].name === CorrectAnswerData[j].name){
      //       if(AnswerData[i].answer === CorrectAnswerData[j].answer){
      //         console.log("answer correct");
      //         setCounter((prev) => prev + 1);
      //       }
      //     }
      //   }
      // }
      var CorrectAnswers = Object.keys(answers).map((key) => [Number(key), answers[key]]);
      //  console.log("result", CorrectAnswers);
     setTotalCorrectAnswer("Correct Answers: "+CorrectAnswers.length)
      setDisable(true);
    }

        return (
            <div>
              <form onSubmit={submitTest}>
                <FormControl component="fieldset">
                      {/* <FormLabel component="legend">Gender</FormLabel> */}
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

