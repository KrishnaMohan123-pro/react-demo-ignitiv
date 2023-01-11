import React from 'react'
import './index.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function AddressAndContact() {
  return (
    <div className='addressAndContact'>
        <h3 className='sectionHeading'>Contact Us</h3>
        <address className='addressSection'>
        <LocationOnIcon /><span className='paddingleft10'>Swati Park, Veerbhadra Nagar, Baner, Pune, Maharashtra 411045</span>
        </address>
        <div className='contactSection'>
          <a className='phoneNumber' href="tel:+919765400773"><PhoneIcon /> <span className='paddingleft10'>+91 9765400773</span></a>
        <a className='emailId' href="mailto:india@ignitiv.com"><MailOutlineIcon /> <span className='paddingleft10'>india@ignitiv.com</span></a>
        </div>
    </div>
  )
}
