
import isLoggedIn from "../../utility/userLoginStatus";
import {useState, useEffect} from 'react'
import { getUserFromDB } from '../../services/firebase';

import {Card, CardActions, CardContent, Typography, Button} from '@material-ui/core';
import './index.css'
export default function UserData() {
    const [userData, setUserData] = useState({isLoading: true});
    const isUserLoggedInCookie = document.cookie
                            .split('; ')
                            .filter(c => c.includes('isUserLoggedIn'));
    const isUserLoggedInID = isUserLoggedInCookie.length > 0 ? isUserLoggedInCookie[0].split('|')[1] : '';
     const id= isUserLoggedInID;
    useEffect(() => {
        // console.log("id", id);
        getUserFromDB(id)
        .then(res => {
             setUserData({userData: res._document.data.value.mapValue.fields, isLoading: false});
        })
    }, [id]);
    console.log("userData", userData);
    if(isLoggedIn){
        if(userData.isLoading) {
            return <div>Loading</div>
        }
        return (

            <Card className='UserDetails'>
                <CardContent>
                    <Typography component="h1" className='userDetailsHeading' color="textSecondary" gutterBottom>
                        User Data
                    </Typography>
                    <Typography component="p">
                        <strong>First Name: </strong> {userData.userData.fname.stringValue}
                    </Typography>
                    <Typography component="p">
                        <strong>Last Name: </strong> {userData.userData.lname.stringValue}
                    </Typography>
                    <Typography component="p">
                           <strong>email: </strong>  {userData.userData.email.stringValue}
                    </Typography>
                    <Typography component="p">
                        <strong>Phone No: </strong>{userData.userData.phone.stringValue}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        )
    }
    else{
        return <h1>Please Login To check User Details</h1>
    }
}

