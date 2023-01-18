
import isLoggedIn from "../../utility/userLoginStatus";
import {Card, CardContent, Typography} from '@material-ui/core';
import './index.css';

export default function UserData(props) {
    const userData = props.userDetails.data;
    if(isLoggedIn){
        if(props.userDetails.isLoading) {
            return <div>Loading</div>
        }
        return (
            <>
            {userData.map((item, index)=>
                {
                    if(item.email){
                        return(
                            <Card className='UserDetails' key={item.id}>
                                <CardContent>
                                    <Typography component="h1" className='userDetailsHeading' color="textSecondary" gutterBottom>
                                        User Data
                                    </Typography>
                                    <Typography component="p">
                                        <strong>First Name: </strong> {item.fname}
                                    </Typography>
                                    <Typography component="p">
                                        <strong>Last Name: </strong> {item.lname}
                                    </Typography>
                                    <Typography component="p">
                                            <strong>email: </strong>  {item.email}
                                    </Typography>
                                    <Typography component="p">
                                        <strong>Phone No: </strong>{item.phone}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    }
                }
                )}
            </>
        )
    }
    else{
        return <h1>Please Login To check User Details</h1>
    }
}

