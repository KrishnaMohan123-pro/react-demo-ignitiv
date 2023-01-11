import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import LoginForm from '../LoginForm';

import isLoggedIn from '../../utility/userLoginStatus';
import { logout } from '../../services/firebase';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[10],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center',
    },
  }));
  
  export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    function handleLogout() {
      logout();
    }

    if(isLoggedIn) {
      return <div>
        <Button type='button' color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    }

    return (
        <div>
            <Button type="button" color="primary" onClick={handleOpen}>
                {props.buttonText}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <LoginForm openModal={setOpen} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );

  }      