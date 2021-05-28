import React from 'react'
import { RiArrowDropUpLine } from "react-icons/ri";
import Styles from './FAQ.module.css'
const FAQ = () => {
    const [arrow1, setArrow1] = React.useState("downArrow")
    const [arrow2, setArrow2] = React.useState("downArrow")
    const [arrow3, setArrow3] = React.useState("downArrow")
    const [arrow4, setArrow4] = React.useState("downArrow")
    const [arrow5, setArrow5] = React.useState("downArrow")
    const [arrow6, setArrow6] = React.useState("downArrow")
    const [arrow7, setArrow7] = React.useState("downArrow")
    const [arrow8, setArrow8] = React.useState("downArrow")
    const [arrow9, setArrow9] = React.useState("downArrow")
    const [arrow10, setArrow10] = React.useState("downArrow")
    const [arrow11, setArrow11] = React.useState("downArrow")
    const [arrow12, setArrow12] = React.useState("downArrow")

    const handleArrow1 = () => {
        if (arrow1 === "downArrow") {
            setArrow1("upArrow")
        }
        else {
            setArrow1("downArrow")
        }
        if (arrow1 === "upArrow") {
            setArrow1("downArrow")
        }
        else {
            setArrow1("upArrow")
        }
    }
    const handleArrow2 = () => {
        if (arrow2 === "downArrow") {
            setArrow2("upArrow")
        }
        else {
            setArrow2("downArrow")
        }
        if (arrow2 === "upArrow") {
            setArrow2("downArrow")
        }
        else {
            setArrow2("upArrow")
        }
    }
    const handleArrow3 = () => {
        if (arrow3 === "downArrow") {
            setArrow3("upArrow")
        }
        else {
            setArrow3("downArrow")
        }
        if (arrow3 === "upArrow") {
            setArrow3("downArrow")
        }
        else {
            setArrow3("upArrow")
        }
    }
    const handleArrow4 = () => {
        if (arrow4 === "downArrow") {
            setArrow4("upArrow")
        }
        else {
            setArrow4("downArrow")
        }
        if (arrow4 === "upArrow") {
            setArrow4("downArrow")
        }
        else {
            setArrow4("upArrow")
        }
    }
    const handleArrow5 = () => {
        if (arrow5 === "downArrow") {
            setArrow5("upArrow")
        }
        else {
            setArrow5("downArrow")
        }
        if (arrow5 === "upArrow") {
            setArrow5("downArrow")
        }
        else {
            setArrow5("upArrow")
        }
    }
    const handleArrow6 = () => {
        if (arrow6 === "downArrow") {
            setArrow6("upArrow")
        }
        else {
            setArrow6("downArrow")
        }
        if (arrow6 === "upArrow") {
            setArrow6("downArrow")
        }
        else {
            setArrow6("upArrow")
        }
    }
    const handleArrow7 = () => {
        if (arrow5 === "downArrow") {
            setArrow7("upArrow")
        }
        else {
            setArrow7("downArrow")
        }
        if (arrow7 === "upArrow") {
            setArrow7("downArrow")
        }
        else {
            setArrow7("upArrow")
        }
    }
    const handleArrow8 = () => {
        if (arrow8 === "downArrow") {
            setArrow8("upArrow")
        }
        else {
            setArrow8("downArrow")
        }
        if (arrow8 === "upArrow") {
            setArrow8("downArrow")
        }
        else {
            setArrow8("upArrow")
        }
    }
    const handleArrow9 = () => {
        if (arrow9 === "downArrow") {
            setArrow9("upArrow")
        }
        else {
            setArrow9("downArrow")
        }
        if (arrow9 === "upArrow") {
            setArrow9("downArrow")
        }
        else {
            setArrow9("upArrow")
        }
    }
    const handleArrow10 = () => {
        if (arrow10 === "downArrow") {
            setArrow10("upArrow")
        }
        else {
            setArrow10("downArrow")
        }
        if (arrow10 === "upArrow") {
            setArrow10("downArrow")
        }
        else {
            setArrow10("upArrow")
        }
    }
    const handleArrow11 = () => {
        if (arrow11 === "downArrow") {
            setArrow11("upArrow")
        }
        else {
            setArrow11("downArrow")
        }
        if (arrow11 === "upArrow") {
            setArrow11("downArrow")
        }
        else {
            setArrow11("upArrow")
        }
    }
    const handleArrow12 = () => {
        if (arrow12 === "downArrow") {
            setArrow12("upArrow")
        }
        else {
            setArrow12("downArrow")
        }
        if (arrow12 === "upArrow") {
            setArrow12("downArrow")
        }
        else {
            setArrow12("upArrow")
        }
    }


    return (
        <div>
            <div className={Styles.faqDivContainer}>
                <div className={Styles.bookInEasySteps_heading}>FAQs</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            What is redBus Hire?
                            </div>
                        {arrow1 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow1} />}
                        {arrow1 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow1} />}

                    </div>
                    {arrow1 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>redBus Hire helps you rent a vehicle from the best operators in your city.</div>}
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            How does it work?
                            </div>
                        {arrow2 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow2} />}
                        {arrow2 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow2} />}
                    </div>
                    {arrow2 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>We ask you a few simple questions regarding your trip. We work with the best operators in your city to get you detailed quotations, so that you get the best deal.</div>}
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            Which cities are you operational in?
                            </div>
                        {arrow3 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow3} />}
                        {arrow3 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow3} />}
                    </div>
                    {arrow3 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>We are currently operational in Bangalore, Mumbai, Pune, Chennai, Hyderabad, Delhi, Ahmedabad, Madurai, Mysore, Visakhapatnam, Surat, Vadodara, Vijayawada, Coimbatore, Goa, Pondicherry, Erode, Ooty, Udaipur, Jaipur, Guwahati, Trichy and Kolkata.</div>}
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            What happens if the vehicle breaks down?
                            </div>
                        {arrow4 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow4} />}
                        {arrow4 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow4} />}
                    </div>
                    {arrow4 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>Since we work with the best operators, the vehicles are usually reliable. In case of a breakdown, it is the operator's responsibility to replace the vehicle during the journey.</div>}
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            How are the Kilometers calculated?
                            </div>
                        {arrow5 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow5} />}
                        {arrow5 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow5} />}
                    </div>
                    {arrow5 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>The 'Kilometers' are calculated basis the return trip distance between the boarding point and the destination. Any additional distance covered within the city between the Garage and the pickup point is also included in it. </div>
                    }
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            What are the payment terms?
                            </div>
                        {arrow6 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow6} />}
                        {arrow6 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow6} />}
                    </div>
                    {arrow6 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>You can confirm your reservation by paying a small booking fee, typically equal to 25% of the base fare. The balance can be paid directly to us through online modes till two days before the start of the journey or to the operator in cash at the time of boarding.</div>
                    }
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            What if I need to cancel my trip?
                            </div>
                        {arrow7 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow7} />}
                        {arrow7 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow7} />}
                    </div>
                    {arrow7 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>What if I need to cancel my trip?
                            Cancellation policy is specific to each operator and is listed against the quotes on the quotations page.</div>
                    }
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            How are toll & taxes calculated?
                            </div>
                        {arrow8 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow8} />}
                        {arrow8 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow8} />}
                    </div>
                    {arrow8 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>Tolls and Interstate taxes are best estimates only. If these amounts are included in the fare, you'll be charged/reimbursed for any difference between the actuals and estimations, as applicable.</div>
                    }
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            What are the benefits of booking or renting a vehicle with redBus?
                            </div>
                        {arrow9 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow9} />}
                        {arrow9 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow9} />}
                    </div>
                    {arrow9 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>redBus is among the leading online booking services and for a good reason. It provides its customers with a plethora of options to choose from when it comes to operators, bus types, amenities, etc. and collaborates with the top travel agencies in the country. Travellers can choose between a bus with air conditioning and a non-air conditioned bus. The buses offer comfortable seating which boosts passenger age inclusivity and may also contain amenities like a mini-refrigerator or icebox.</div>
                    }
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            What are the COVID-19 measures being taken with redBus?
                            </div>
                        {arrow10 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow10} />}
                        {arrow10 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow10} />}
                    </div>
                    {arrow10 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>redBus, in light of the recent rapid spread of COVID-19, has introduced a new move which they call Safety+. Under Safety+, all buses are required to adhere to certain strict rules and guidelines. Some of these include regular and strict temperature checks along with advisories, making the use of masks mandatory for all employees as well as passengers, and sanitisers must be provided before boarding and present on all buses at all times.</div>
                    }
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            How long is redBus Bus Hire customer care available?
                            </div>
                        {arrow11 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow11} />}
                        {arrow11 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow11} />}
                    </div>
                    {arrow11 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>redBus customer care is available at all hours, that is, 24/7. The customer care staff are friendly and can be asked about any redBus bus hire questions without hesitation.</div>
                    }
                    <div className={Styles.faqsEachDiv}>
                        <div className={Styles.faqDivText}>
                            Will there be blankets and linens provided in a complementary fashion aboard the Vehicle with redBus?
                            </div>
                        {arrow12 === "downArrow" && <img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-arrow-down-color.svg" alt="" onClick={handleArrow12} />}
                        {arrow12 === "upArrow" && <RiArrowDropUpLine style={{ fontSize: "25px" }} onClick={handleArrow12} />}
                    </div>
                    {arrow12 === "upArrow" &&
                        <div className={Styles.faqsEachAnswerDiv}>For the time being, due to the current situation created by the pandemic, redBus will not be allowing the provision of blankets and various other cover-ups. This measure falls under the Safety+ guidelines.</div>
                    }

                </div>
            </div>
        </div>
    )
}

export default FAQ
