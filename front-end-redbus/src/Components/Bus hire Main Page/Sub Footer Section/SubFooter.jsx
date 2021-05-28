
import React from 'react'
import Styles from './Subfooter.module.css'

const SubFooter = () => {
    return (
        <div>
            <div className={Styles.subFootercontainer}>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Bus Hire Cities</h4>
                    <p>Bus Hire in Ahmedabad</p>
                    <p>Bus Hire in Mumbai</p>
                    <p>Bus Hire in Bnaglore</p>
                    <p>Bus Hire in Chennai</p>
                </div>
                <div className={Styles.subFootercontainer_alternateSection}>
                    <p>Bus Hire in Pune</p>
                    <p>Bus Hire in Hyderabad</p>
                    <p>Bus Hire in Delhi</p>
                    <p>Bus Hire in Delhi</p>
                </div>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Tempo travellers in other cities</h4>
                    <p>Tempo travellers in Banglore</p>
                    <p>Tempo travellers in Ahmedabad</p>
                    <p>Tempo travellers in Coimbatore</p>
                    <p>Tempo travellers in Vadodara</p>
                    <p>Tempo travellers in Kolkata</p>
                </div>
                <div className={Styles.subFootercontainer_alternateSection}>
                    <p>Tempo travellers in Delhi</p>
                    <p>Tempo travellers in Pune</p>
                    <p>Tempo travellers in Mumbai</p>
                    <p>Tempo travellers in Hydearabd</p>
                    <p>Tempo travellers in Chennai</p>
                </div>
            </div>
        </div>
    )
}

export default SubFooter
