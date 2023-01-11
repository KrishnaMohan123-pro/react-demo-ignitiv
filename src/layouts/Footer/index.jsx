import React from 'react'
import AddressAndContact from '../../components/FooterComponents/AddressSection'
import UtilityLinks from '../../components/FooterComponents/UtilityLinks/CopyRightAndBottomLinks'
import './index.css'


export default function Footer() {
    return (
        <div className='footerSection'>
            <AddressAndContact />
            <UtilityLinks />
        </div>
        
    )
}