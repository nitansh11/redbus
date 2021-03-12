import React from 'react'
import BusHireForm from './Bus hire Form/BusHireForm'
import Styles from './BusHire.module.css'
import TripTypeContainer from './Trip Type Container/TripTypeContainer'
import { FaCheckCircle} from "react-icons/fa";
import FAQ from './FAQ Section/FAQ';
import SubFooter from './Sub Footer Section/SubFooter';


const BusHire = () => {
    const [active , setActive] = React.useState("Type of trip")
   
    const handleClick = () => {
        if(active === "Type of trip"){
            setActive("Bus Hire Form")
        }
        else{
            setActive("Type of trip")
        }
        if(active === "Bus Hire Form"){
            setActive("Type of trip")
        }
        else{
            setActive("Bus Hire Form")
        }
    }
    
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
                        <div style = {{display : "flex",justifyContent : "flex-start"}}>
                            <div><img src = "https://www.redbus.in/bushire/static/mwebv2/home/logo-safety-plus.svg" alt = ""/></div>
                            <div style = {{display : "flex" , flexDirection : "column",marginLeft : "20px"}}>
                            <p style = {{fontSize : "14px" , color : "#3e3e52"}}>Introducing</p>
                            <h3 style = {{fontWeight : "700" , fontSize : "30px" , color : "#3e3e52"}}>Safety+</h3>
                            </div>
                        </div>
                        <img src = "https://www.redbus.in/bushire/static/mwebv2/home/thermal.svg" alt = ""/>
                    </div>
                </div>
                <div className = {Styles.whyBookWithBushire_thirdFeature}>
                    <div style = {{display : "flex" , justifyContent : "flex-start", alignItems : "center"}}>
                        <FaCheckCircle style = {{color : "green" , fontSize : "20px"}}/>
                        <h3 style = {{fontWeight : "700" , fontSize : "24px" , color : "#3e3e52", marginLeft : "10px"}}>Bus Hire Stats</h3>
                    </div>
                    <div style = {{display : "flex" , justifyContent : "space-between",width : "350px",marginTop : "20px"}}>
                        
                    <div style = {{display : "flex" , flexDirection : "column" , height : "200px"}}>
                        <div style = {{fontWeight : "700" , fontSize : "24px" , color : "#1347a0"}}>60,000+</div>
                        <div>Trips Done</div>
                    </div>
                    <div style = {{display : "flex" , flexDirection : "column" , height : "200px"}}>
                        <div style = {{fontWeight : "700" , fontSize : "24px" , color : "#1347a0"}}>4,000+</div>
                        <div>Vehicles</div>
                    </div>
                    <div style = {{display : "flex" , flexDirection : "column" , height : "200px"}}>
                        <div style = {{fontWeight : "700" , fontSize : "24px" , color : "#1347a0"}}>500+</div>
                        <div>Operators</div>
                    </div>
                </div>
                </div>
               </div>
               {/* Bus hire operates in */}
               <div className = {Styles.whyBookWithBushire}>
                    <div className = {Styles.bookInEasySteps_heading}>Bus Hire Operates in</div>
                    <div><img style = {{marginTop : "30px" , height : "300px"}} src = "https://www.redbus.in/bushire/static/mwebv2/home/city-list.svg" alt = "" /></div>
               </div>
                {/* FAQs */}
                <FAQ/>
                {/* subFooter */}
                <SubFooter/>
                {/* tripTypeContainer */}
                {active === "Type of trip" && <TripTypeContainer handleClick = {handleClick} active = {active}/>}
                {/* busHireForm */}
                {active === "Bus Hire Form" && <BusHireForm handleClick = {handleClick}/>}
                
            </div>
        </div>
    )
}

export default BusHire
// https://www.redbus.in/bushire/static/webv2/home/group-4.svg
