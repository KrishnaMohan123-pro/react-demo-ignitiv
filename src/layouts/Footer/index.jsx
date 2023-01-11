import React from 'react'
import AddressAndContact from '../../components/FooterComponents/AddressSection'
import CopyrightLinks from '../../components/FooterComponents/UtilityLinks/CopyRightAndBottomLinks'
import './index.css'
import Grid from '@material-ui/core/Grid';
import About from '../../components/FooterComponents/About';
import QuickLinks from '../../components/FooterComponents/UtilityLinks/QuickLinks';

export default function Footer() {
    return (
        <div className='footerSection'>
             <div className='footerTopSection'>
                <Grid container spacing={3}>
                    <Grid item xs={3} ><About /></Grid>
                    <Grid item xs={3} ><QuickLinks /></Grid>
                    <Grid item xs={3} ></Grid>
                    <Grid item xs={3} ><AddressAndContact /></Grid>
                </Grid>
             </div>
            <CopyrightLinks />
        </div>
        
    )
}