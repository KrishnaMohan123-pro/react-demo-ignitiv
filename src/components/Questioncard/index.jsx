import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
 import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import './index.css';
import AnswerCard from '../AnswerCard';

function QuestionCard(props) {
      // console.log(props.data)
    const Data = props.data;
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>
    // const submitTest=()=>{
    //   console.log("test submit");
    // }
    const submitQuestionCard=()=>{
      console.log("answer submit");
    }
        return (
            <div>
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
                                    <AnswerCard item={item}/>
                                </CardActions>
                                <br/>
                                <br/>
                                <Button variant="contained" color="primary" type='submit' onClick={submitQuestionCard}> Submit Answer </Button>
                              </Card>
                          </Grid>
                      ))}
              </Grid>
              <br/>
            {/* <Button variant="contained" color="primary" type='submit' onClick={submitTest}> Submit Test </Button> */}
            </div>
          )
    }

  export default QuestionCard;

