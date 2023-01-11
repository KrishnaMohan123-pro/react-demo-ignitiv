import React from "react";
// import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Card, Link, Typography, CardHeader, CardActionArea} from "@material-ui/core/";
import Pulse from 'react-reveal/Pulse';
import './index.css';

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,

}
}));

export default function Home() {
const classes = useStyles();
const data = {
name: [
{ stream: 'Xstore Developer', subheading: 'Full Time | Pune', link: 'https://www.ignitiv.com/jobs/xstore-developer/' },
{ stream: 'QA Analyst', subheading: 'Full Time | Pune', link: 'https://www.ignitiv.com/jobs/qa-analyst/' },
{ stream: 'Software Developer (Front-End)', subheading: 'Full Time | Pune', link:
'https://www.ignitiv.com/jobs/software-developer-front-end-2/' },
{ stream: 'Senior Developer (Front-End)', subheading: 'Full Time | Pune', link:
'https://www.ignitiv.com/jobs/senior-developer-front-end/'},
{ stream: 'Sr. Developer / Tech Lead – eComm – Full Stack', subheading: 'Full Time | Pune', link:
'https://www.ignitiv.com/jobs/software-developer-front-end/'},
{ stream: 'Back-End Sr. Developer (Analytics)', subheading: 'Full Time | Pune', link:
'https://www.ignitiv.com/jobs/back-end-sr-developer-analytics-2/'},
{ stream: 'Sr. Developer (Back-End) / Tech Lead', subheading: 'Full Time | Pune', link:
'https://www.ignitiv.com/jobs/sr-developer-back-end-tech-lead/'}
],
id: [1]
};
return (
<div className='main'>

    <Typography variant="h5" component="h1" gutterBottom>
        Ignitiv Interview Test
    </Typography>
    <Typography variant="h6" component="h2" gutterBottom>
        About Ignitiv
    </Typography>
    <Typography variant="body1" gutterBottom>
        Ignitiv is a products and consulting MNC with development centers in the US, Canada and India. We deliver
        solutions that help global brands harness emerging disruptive technologies to enrich their customers’ experience
        in ways not imagined before.
    </Typography>
    <Typography variant="body1" gutterBottom>
        At Ignitiv, we are always pushing our boundaries. In doing so, we discover new capabilities and develop a
        distinct point of view about the challenges and opportunities affecting our customers. Towards that goal, we are
        always looking for people to join our team who are independent thinkers and have the drive to understand and
        solve business problems of our clients in unique and dramatically better ways.
        We are currently geared up for exceptional growth and onboarding leaders in our team. If you believe in your
        technical and learning capabilities, we may have a suitable opportunity that will help you uncover the secret
        path of expedited career growth!
    </Typography>
    <Typography variant="body1" gutterBottom>
        Ignitiv provide a mock interview platform for fresher/experinced technical questions including a wide variety of
        topics like:
    </Typography>
    <Typography variant="h6" component="h4" gutterBottom>
        We are hiring for:
    </Typography>
    <div className={classes.root}>
        {data.id.map((elem) => (
        <Grid container spacing={2} direction="row" alignItems="flex-start">
            {data.name.map((elem) => (

            <Grid item xs={6} key={data.name.indexOf(elem)}>
                <Pulse>
                    <Link underline='none' href={`${elem.link}`}>
                    <Card style={{backgroundColor: "#b9eeff"}}>
                        <CardActionArea>
                            <CardHeader title={`${elem.stream}`} subheader={`${elem.subheading}`} />
                        </CardActionArea>
                    </Card>
                    </Link>
                </Pulse>
            </Grid>

            ))}
        </Grid>
        ))}
    </div>
</div>
);
}