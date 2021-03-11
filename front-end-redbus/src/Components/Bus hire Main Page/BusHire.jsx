import React from 'react'
import BusHireForm from './Bus hire Form/BusHireForm'
import Styles from './BusHire.module.css'
import TripTypeContainer from './Trip Type Container/TripTypeContainer'

const BusHire = () => {
    const [active , setActive] = React.useState("Type of trip")
    return (
        <div>
            <div className = {Styles.baneer}>
                <div>
                    <img className = {Styles.imageBanner} src = "https://www.redbus.in/bushire/static/webv2/home/group-3%20(4).svg" alt = "banner" width = "100%"/>
                    <div className = {Styles.bannerElementDiv}>
                        <div className = {Styles.bannerBusHireText}>Bus Hire</div>
                        <div className = {Styles.bannerBusHireSubText}>Rent vehicles with a driver from the best operators</div>
                        
                    </div>
                </div>
                <div className = {Styles.bookInEasyStepsdiv}>
                    <div className = {Styles.bookInEasySteps_heading}>Book in 3 easy steps</div>
                    <div className = {Styles.bookInEaschStep}>
                        <div>
                            <img src = "https://www.redbus.in/bushire/static/mwebv2/home/1%20(1).svg" alt ="1"/>
                        </div>
                        <div style = {{display : "flex" , flexDirection : "column" , alignContent : "center"}}>
                            <div className = {Styles.bookInEaschStepText}>Choose the</div>
                            <div className = {Styles.bookInEaschStepText} style = {{fontWeight : "800"}}>Journey </div>
                            <div className = {Styles.bookInEaschStepText}style = {{fontWeight : "800"}}>Type</div>
                        </div>
                        <div>
                            <img src = "https://www.redbus.in/bushire/static/webv2/home/Group.png" alt ="" width = "202px" height= "144px"/>
                        </div>
                    </div>
                    <div className = {Styles.bookInEaschStep}>
                        <div>
                            <img src = "https://www.redbus.in/bushire/static/mwebv2/home/2%20(2).svg" alt ="1"/>
                        </div>
                        <div style = {{display : "flex" , flexDirection : "column" , alignContent : "center"}}>
                            <div className = {Styles.bookInEaschStepText}>Tell us</div>
                            <div className = {Styles.bookInEaschStepText}>about your </div>
                            <div className = {Styles.bookInEaschStepText}style = {{fontWeight : "800"}}>Travel Plans.</div>
                        </div>
                        <div>
                            <img src = "https://www.redbus.in/bushire/static/webv2/home/2%20(5).svg" alt ="" width = "202px" height= "144px"/>
                        </div>
                    </div>
                    <div className = {Styles.bookInEaschStep}>
                        <div>
                            <img src = "https://www.redbus.in/bushire/static/mwebv2/home/3.svg" alt ="1"/>
                        </div>
                        <div style = {{display : "flex" , flexDirection : "column" , alignContent : "center"}}>
                            <div className = {Styles.bookInEaschStepText}style = {{fontWeight : "800"}}>Pick the vehicle</div>
                            <div className = {Styles.bookInEaschStepText} >you like and </div>
                            <div className = {Styles.bookInEaschStepText}>go places.</div>
                        </div>
                        <div>
                            <img src = "https://www.redbus.in/bushire/static/webv2/home/3%20(1).svg" alt ="" width = "202px" height= "144px"/>
                        </div>
                    </div>
                </div>
                <div className = {Styles.withBusHireYouCanGet}>
                    <div className = {Styles.bookInEasySteps_heading}>With Bus Hire you get</div>
                    <div style = {{display : "flex" , flexWrap : "wrap",width :" 50%"}}>
                        <div className = {Styles.BusHireFeatures}>
                            <div className = {Styles.BusHireEachFeature}>
                                <img src = "https://www.redbus.in/bushire/static/mwebv2/home/great-price.svg" alt = "" height = "100px"/>
                                <div style = {{marginTop : "20px"}}>
                                    <div className = {Styles.BusHireEachFeatureText}>Great price and</div>
                                    <div className = {Styles.BusHireEachFeatureText}>Great value</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className = {Styles.BusHireFeatures}>
                            <div className = {Styles.BusHireEachFeature}>
                                <img src = "https://www.redbus.in/bushire/static/mwebv2/home/safe-vehicles.svg" alt = "" height = "100px"/>
                                <div style = {{marginTop : "20px"}}>
                                    <div className = {Styles.BusHireEachFeatureText}>Safe and Hygenic</div>
                                    <div className = {Styles.BusHireEachFeatureText}> Vehicles</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className = {Styles.BusHireFeatures}>
                            <div className = {Styles.BusHireEachFeature}>
                                <img src = "https://www.redbus.in/bushire/static/mwebv2/home/live-tracking.svg?v=1" alt = "" height = "100px"/>
                                <div style = {{marginTop : "20px"}}>
                                    <div className = {Styles.BusHireEachFeatureText}>Live Track your</div>
                                    <div className = {Styles.BusHireEachFeatureText}> Journey</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className = {Styles.BusHireFeatures}>
                            <div className = {Styles.BusHireEachFeature}>
                                <img src = "https://www.redbus.in/bushire/static/mwebv2/home/customer-support.svg" alt = "" height = "100px"/>
                                <div style = {{marginTop : "20px"}}>
                                    <div className = {Styles.BusHireEachFeatureText}>Best Customer</div>
                                    <div className = {Styles.BusHireEachFeatureText}> Support</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className = {Styles.BusHireFeatures}>
                            <div className = {Styles.BusHireEachFeature}>
                                <img src = "https://www.redbus.in/bushire/static/mwebv2/home/verified-drivers.svg" alt = "" height = "100px"/>
                                <div style = {{marginTop : "20px"}}>
                                    <div className = {Styles.BusHireEachFeatureText}>Verified Drivers and</div>
                                    <div className = {Styles.BusHireEachFeatureText}> Vehicles</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* r-commute */}
                <div className = {Styles.rcommutediv}>
                    <div className = {Styles.rcommuteText}>rCommute</div>
                    <div className = {Styles.rcommuteText_para}>If you are looking for employee commute <br/>solution, click know more.</div>
                    <div className = {Styles.knowMoreText}>KNOW MORE</div>
                </div>
                {/* vehicle type */}
                <div className = {Styles.VehicleYouCanGet}>
                <div className = {Styles.bookInEasySteps_heading}>Vehicle Types</div>
                    <div className = {Styles.vehicleTypeImage} >
                        <img  src="https://www.redbus.in/bushire/static/webv2/home/group%20(10).svg" alt="Buses and Mini Buses"></img>
                        <div className = {Styles.vehicleText}>
                            <h3>Buses and Mini Buses</h3>
                            <p>Ideal for more than <br/>18 people</p>
                        </div>
                    </div>
                    <div className = {Styles.vehicleTypeImage} >
                        <img  src="https://www.redbus.in/bushire/static/webv2/home/group%20(11).svg" alt="Buses and Mini Buses"></img>
                        <div className = {Styles.vehicleText}>
                            <h3>Tempo and Travellers</h3>
                            <p>Ideal for<br/>10-16 people</p>
                        </div>
                    </div>
                    <div className = {Styles.vehicleTypeImage} >
                        <img  src="https://www.redbus.in/bushire/static/webv2/home/group%20(12).svg" alt="Buses and Mini Buses"></img>
                        <div className = {Styles.vehicleText}>
                            <h3>Sedans and SUVs</h3>
                            <p>Ideal for <br/>4-7 people</p>
                        </div>
                    </div>
                
                </div>
               {/* { why book with bus hire} */}
               <div className = {Styles.whyBookWithBushire}>
                <div className = {Styles.bookInEasySteps_heading}>Why book with Bus Hire</div>
                <div className = {Styles.whyBookWithBushire_firstFeature}>
                    <div className = {Styles.whyBookWithBushire_insideFeature}>
                        <div className = {Styles.whyBookWithBushire_insideFeature_text}>
                            <h3>Plan the perfect</h3>
                            <h3>group trip.</h3>
                            <p>Choose from</p>
                            <div style = {{display : "flex" , justifyContent : "space-between",width : "250px"}}>
                                <h3>Outstation</h3>
                                <h3>Local</h3>
                                <h3>Airport</h3>
                            </div>
                        </div>
                        
                        <img src = "https://www.redbus.in/bushire/static/mwebv2/home/group-89.svg" alt = ""/>
                    </div>
                </div>
                <div className = {Styles.whyBookWithBushire_secondFeature}>
                <div className = {Styles.whyBookWithBushire_insideFeature}>
                        <div className = {Styles.whyBookWithBushire_insideFeature_text}>
                            <h3>Plan the perfect</h3>
                            <h3>group trip.</h3>
                            <p>Choose from</p>
                            <div style = {{display : "flex" , justifyContent : "space-between",width : "250px"}}>
                                <h3>Outstation</h3>
                                <h3>Local</h3>
                                <h3>Airport</h3>
                            </div>
                        </div>
                        
                        <img src = "https://www.redbus.in/bushire/static/mwebv2/home/thermal.svg" alt = ""/>
                    </div>
                </div>
                <div className = {Styles.whyBookWithBushire_thirdFeature}></div>
               </div>
               <div></div>
                {/* tripTypeContainer */}
                {active === "Type of trip" && <TripTypeContainer/>}
                {active === "Bus Hire Form" && <BusHireForm/>}
                
            </div>
        </div>
    )
}

export default BusHire
// https://www.redbus.in/bushire/static/webv2/home/group-4.svg
