import CircularProgress from '@material-ui/core/CircularProgress';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import isLoggedIn from "../../utility/userLoginStatus";

import './index.css';

 function ResultData(props) {
  const Results = props.data.data;
    if(isLoggedIn){
      if(props.data.isLoading ) {
          return <div>Loading</div>
      }
      return (
        <div className='result-Section'>
          <Grid container spacing={3}>
            {Results.map((item, index)=>
            {
              if(item.category){
                const percentage = ((100*item.marks)/item.total).toFixed(2);
                return(
                  <Grid item xs={6} key={index}>
                   <Card className="Container" variant="outlined">
                     <CardContent className='resultCardContent'>
                       <Grid className='resultCardGrid' container spacing={3}>
                             <Grid className='resultCardCategory' item xs={12}>
                               <Typography className='resultCardCategoryHeading' variant="caption" component="p">
                                       <strong>Category :</strong><span> {item.category}</span>
                               </Typography>
                             </Grid>
                             <Grid className='resultCardDetails' item xs={7}>
                               <Typography variant="caption" component="p">
                                 <span>Difficulty: </span><span> {item.difficulty}</span>
                               </Typography>
                               <Typography variant="caption" component="p">
                                  <span>Marks Obtain: </span><span> {item.marks}</span>
                               </Typography>
                               <Typography variant="caption" component="p">
                                   <span>Total Marks: </span><span> {item.total}</span>
                               </Typography>
                            </Grid>
                            <Grid className='resultCardPercentageSection' item xs={5}>
                                 <CircularProgress variant="determinate" value={parseFloat(percentage, 10)} />
                                 <p className='resultPercentage'> Percentage : {parseFloat(percentage, 10)}%</p>
                             </Grid>
                       </Grid>
                     </CardContent>
                   </Card>
               </Grid>
                )
              }
            }
            )}
          </Grid>
        </div>
      )
  }
  else{
      return <h1>Please Login To check Details</h1>
  }
}


export default ResultData;
