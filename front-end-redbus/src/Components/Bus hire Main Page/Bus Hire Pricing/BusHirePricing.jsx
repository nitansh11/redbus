
import React from 'react'
import Styles from './BusHirePricing.module.css'

const BusHirePricing = () => {
    return (
        <div>
            <div className={Styles.pricingBushire}>
                <div className={Styles.pricing_heading}>Pricing</div>
                <div className={Styles.pricing_paraSection}>
                    By booking your vehicle via redBus, you knock out middlemen charges, and charges associated with bookings made in advance. redBus also provides packages for tourists in cities where the service is available.Charges for vehicles depend on the city in which they are hired. Starting base prices are mentioned below:
                </div>
                <div className={Styles.pricing_tableSection}>
                    <table className={Styles.tableSection}>
                        <tr>
                            <th></th>
                            <th>12 Seater AC</th>
                            <th>25 Seater AC</th>
                            <th>40 Seater AC</th>
                            <th>49 Seater AC</th>
                        </tr>
                        <tr>
                            <th>Price Per Km</th>
                            <td>₹ 16 / km</td>
                            <td>₹ 25 / km</td>
                            <td>₹ 40 / km</td>
                            <td>₹ 45 / km</td>
                        </tr>
                        <tr>
                            <th>Minimum Km</th>
                            <td>250 km</td>
                            <td>300 km</td>
                            <td>300 km</td>
                            <td>300 km</td>
                        </tr>
                        <tr>
                            <th>Driver Charges</th>
                            <td>₹ 300 / day</td>
                            <td>₹ 400 / day</td>
                            <td>₹ 500 / day</td>
                            <td>₹ 450 / day</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BusHirePricing
