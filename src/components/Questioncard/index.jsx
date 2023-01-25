import React,{ useState, useRef, useEffect, useDeferredValue } from 'react'
// import {Container, Box, makeStyles} from '@material-ui/core';
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
import { Link } from "react-router-dom";

function QuestionCard(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const limit = searchParams.get('limit');
    const Data = props.data;
    const [disable, setDisable] = useState(false);
    // const [totalCorrectAnswer, setTotalCorrectAnswer] = useState('');
    // const [totalCorrectAnswerPercentage, setTotalCorrectAnswerPercentage] = useState('');
    // const [totalAnsweredQuestion, setTotalAnsweredQuestion] = useState('');
    const [timerAlert, setTimerAlert] = useState('');
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [answeredQuestion, setAnsweredQuestion] = useState({});
    const [formDisplay, setFormDisplay] = useState('displayNone');
    const [afterExamDisplay, setAfterExamDisplay] = useState('');
    const [examRulesDisplay, setExamRulesDisplay] = useState('');
    const totalQuestion = Data.length;
    // const singleQuestionPercentage = 100 / totalQuestion;
    const INITIAL_COUNT = useDeferredValue(totalQuestion * 6);
    useEffect(() => {
      setFormDisplay('displayNone');
      setAfterExamDisplay('displayNone');
      setExamRulesDisplay('displayBlock');
      setTimerAlert('');
      setDisable(false);
    }, [Data])

    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
    const [status, setStatus] = useState(STATUS.STOPPED)
  
    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60
  
    const handleStart = () => {
      setExamRulesDisplay('displayNone');
      setFormDisplay('displayBlock')
      window.scrollTo({
        top: 10,
        behavior: 'smooth'
      });
      setSecondsRemaining(INITIAL_COUNT)
      setStatus(STATUS.STARTED)
    }
    // const handleStop = () => {
    //   setStatus(STATUS.STOPPED)
    // }
    // const handleReset = () => {
    //   setStatus(STATUS.STOPPED)
    //   setSecondsRemaining(INITIAL_COUNT)
    // }
    useInterval(
      () => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1);
          if(secondsRemaining < 60){
            setTimerAlert('you have less then 60 seconds');
          }
        } else {
          setStatus(STATUS.STOPPED);
          submitTest();
          setFormDisplay('displayNone');
          setAfterExamDisplay('displayBlock');
          setTimerAlert('');
          window.scrollTo({
            top: 10,
            behavior: 'smooth'
          });
        }
      },
      status === STATUS.STARTED ? 1000 : null,
      // passing null stops the interval
    )

    const submitTest=(event)=>{
      // event.preventDefault();
      var CorrectAnswers = Object.keys(correctAnswers).map((key) => [Number(key), correctAnswers[key]]);
      // var QuestionAnswered = Object.keys(answeredQuestion).map((key) => [Number(key), answeredQuestion[key]]);
      // const correctAnswerPercentage = singleQuestionPercentage * CorrectAnswers.length;
      // setTotalCorrectAnswer("Correct Answers: "+CorrectAnswers.length +" Questions");
      // setTotalCorrectAnswerPercentage("Correct Answers Percentage: "+correctAnswerPercentage+"% out of 100%");
      // setTotalAnsweredQuestion("Question Attempted: " + QuestionAnswered.length + " out of "+ totalQuestion + " Questions");
      setDisable(true);
      const payload = {};
      payload.id = userId;
      payload.category = category.toLowerCase();
      payload.difficulty = difficulty.toLowerCase();
      payload.marks = CorrectAnswers.length
      payload.total = parseInt(limit)
      addUserScoreToDB(payload);
      setStatus(STATUS.STOPPED);
      setFormDisplay('displayNone');
      setAfterExamDisplay('displayBlock');
      setTimerAlert('');
    }
        return (
            <div>
              <div className={`Container ${examRulesDisplay} startExamSection`}>
                  <div>
                    <h2> Exam Rules</h2>
                    <p>
                      1.Exam total time limit is {totalQuestion} minutes.
                    </p>
                    <p>
                      2.Exam will be automatically submit after time limit ends.
                    </p>
                    <p>
                      3.Good Luck 
                    </p>
                  </div>
                  <div className='startExamButtonSection'>
                    <button className='startExamButton' onClick={handleStart} type="button">
                      Start the test
                    </button>
                  </div>
                  {/* <button onClick={handleStop} type="button">
                    Stop
                  </button>
                  <button onClick={handleReset} type="button">
                    Reset
                  </button> */}
                  {/* <div style={{padding: 20}}>
                    {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                    {twoDigits(secondsToDisplay)}
                  </div>
                  <div>Status: {status}</div> */}
                </div>
              <form className={`${formDisplay}`} onSubmit={submitTest}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} className='examTimerSection'>
                              <div style={{padding: 20}}>
                              <span>Time remain: </span><span className='examTimer'>{twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                                {twoDigits(secondsToDisplay)}</span>
                              </div>
                              <div>
                                  <p>{timerAlert}</p>
                              </div>
                        </Grid>
                      </Grid>
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
                  <Button variant="contained" color="primary" type='submit' onClick={submitTest} disabled={disable} > Submit Test </Button>
                <br/>
                </FormControl>
              </form>
              <div className={`${afterExamDisplay} submittedExamSection`}>
                {/* <p> {totalCorrectAnswer}</p>
                <p> {totalCorrectAnswerPercentage}</p>
                <p>{totalAnsweredQuestion}</p> */}
                  <h4> Your text has been submitted </h4>
                  <p> Please visit Dashboard <Link className="" to='/dashboard#Result'>Exam Result Details</Link> section for text result</p>
              </div>
            </div>
          )
    }

  export default QuestionCard;

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0')
