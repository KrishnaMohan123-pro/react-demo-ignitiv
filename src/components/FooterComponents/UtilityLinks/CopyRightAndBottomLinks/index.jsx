import React from 'react'
import './index.css'
import CopyrightIcon from '@material-ui/icons/Copyright';
function CopyrightLinks(props) {
  return (
    <div className='copyrightSection'>
        <p className='copyrightText'><CopyrightIcon ></CopyrightIcon> <span className='copyrightTextSection'>Copyright 2023 | All Rights Reserved</span></p>
        {/* <a href='#'>Terms and services</a> */}
    </div>
  )
}

export default CopyrightLinks
