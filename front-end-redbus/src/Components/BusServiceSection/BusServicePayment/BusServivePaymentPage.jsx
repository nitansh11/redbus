import React from "react";
import Styles from "./BusPayment.module.css";
import { BsArrowRight } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
const Payment = () => {
  const currentCustomer = useSelector(
    (state) => state.authReducer.currentCustomer
  );
  console.log(currentCustomer);
  const currentBus = useSelector((state) => state.busServiceReducer.currentBus);
  return (
    <div>
      {/* <div className = {Styles.payment__main_header}>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJvP7mBtUk_CR85hCOUXbwSgeCe7NL8u0tA&usqp=CAU" alt = "red bus logo" height = "100px"/>
                <MdAccountCircle className = {Styles.icons}/>
            </div> */}
      {/* Header */}
      <div className={Styles.payment__header}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "150px",
          }}
        >
          <div>Banglore</div>
          <BsArrowRight />
          <div>Mumbai</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "250px",
          }}
        >
          <div>Please pay within :</div>
          <MdWatchLater />
          <div>7:43 minutes</div>
        </div>
      </div>
      {/* Full Container */}
      <div className={Styles.payment__fullContainer}>
        {/* left Container */}
        <div className={Styles.payment__fullContainer_leftContainer}>
          <input
            className={
              Styles.payment__fullContainer_rightContainer_inputOfferCOde
            }
            placeholder="ENTER OFFER CODE"
          />
          <div className={Styles.payment__fullContainer_rightContainer_infobar}>
            <div className={Styles.banner_chip}>
              <img
                src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/safe-payments.svg"
                alt="CC"
              />
              <div className={Styles.banner_text}>
                <div>Safe and Secure</div>
                <div>Online Payments</div>
              </div>
            </div>
            <div className={Styles.banner_chip}>
              <img
                src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/transactions.svg"
                alt="Million Transactions"
              />
              <div className={Styles.banner_text}>
                <div>60+ million</div>
                <div>transactions</div>
              </div>
            </div>
            <div className={Styles.banner_chip}>
              <img
                src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/trust.svg"
                alt="Reliable"
              />
              <div className={Styles.banner_text}>
                <div>10+ years of</div>
                <div>Trust</div>
              </div>
            </div>
          </div>
          <div
            className={
              Styles.payment__fullContainer_leftContainer_paymentInstruments
            }
          >
            <div className={Styles.choose_payment_heading}>
              Choose Payment Method
            </div>
            <div
              className={
                Styles.payment__fullContainer_leftContainer_paymentInstrument
              }
            >
              <div
                className={
                  Styles.payment__fullContainer_leftContainer_eachPaymentInstruments
                }
              >
                <input className={Styles.radioButton} type="radio" />
                <div className={Styles.radioButtonText}>Credit Card</div>
                <div className={Styles.paymentIconList}>
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/mobile/v2/visa.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/mobile/v2/mastercard.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/maestro.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className={
                  Styles.payment__fullContainer_leftContainer_eachPaymentInstruments
                }
              >
                <input className={Styles.radioButton} type="radio" />
                <div className={Styles.radioButtonText}>Debit Card</div>
                <div className={Styles.paymentIconList}>
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/mobile/v2/visa.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/mobile/v2/mastercard.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/maestro.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className={
                  Styles.payment__fullContainer_leftContainer_eachPaymentInstruments
                }
              >
                <input className={Styles.radioButton} type="radio" />
                <div className={Styles.radioButtonText}>Wallets</div>
                <img
                  className={Styles.payment_icon_img}
                  src="https://st.redbus.in/paas/images/web/v2/amazonpay.png"
                  alt=""
                />
              </div>
              <div
                className={
                  Styles.payment__fullContainer_leftContainer_eachPaymentInstruments
                }
              >
                <input className={Styles.radioButton} type="radio" />
                <div className={Styles.radioButtonText}>Net Banking</div>
                <div className={Styles.paymentIconList}>
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/axis.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/sbi.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/hdfc.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/icici.png"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/kotak.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={Styles.UpiPaymentText}>
              UPI PAYMENT USING PHONEPAY / GPAY / AMAZONPAY ETC...
            </div>
            <div
              className={
                Styles.payment__fullContainer_leftContainer_paymentInstrument
              }
            >
              <div
                className={
                  Styles.payment__fullContainer_leftContainer_eachPaymentInstruments
                }
              >
                <input className={Styles.radioButton} type="radio" />
                <div className={Styles.radioButtonText}>
                  Pay through QR Code
                </div>
                <div
                  className={
                    Styles.payment__fullContainer_leftContainer_eachPaymentInstruments_new
                  }
                >
                  New
                </div>
                <div className={Styles.paymentIconList}>
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/upi/gpay.svg"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/upi/phonepe.svg"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/upi/amazonpay.svg"
                    alt=""
                  />
                </div>
              </div>
              <div
                className={
                  Styles.payment__fullContainer_leftContainer_eachPaymentInstruments
                }
              >
                <input className={Styles.radioButton} type="radio" />
                <div className={Styles.radioButtonText}>Pay through UPI ID</div>
                <div
                  className={
                    Styles.payment__fullContainer_leftContainer_eachPaymentInstruments_new
                  }
                >
                  New
                </div>
                <div className={Styles.paymentIconList}>
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/upi/gpay.svg"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/upi/phonepe.svg"
                    alt=""
                  />
                  <img
                    className={Styles.payment_icon_img}
                    src="https://st.redbus.in/paas/images/web/v2/upi/amazonpay.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right Container */}
        <div className={Styles.payment__fullContainer_rightContainer}>
          <div
            className={
              Styles.payment__fullContainer_rightContainer_trip_container
            }
          >
            <div className={Styles.travel_operator_info}>
              <div className={Styles.travel_title}>National Travels</div>
              <div className={Styles.travel_specification}>
                Bharat Benz A/C Seeper
              </div>
            </div>
            <div className={Styles.line}></div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "200px",
                }}
              >
                <MdDateRange className={Styles.icons} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={Styles.travel_specification}>Departure</div>
                  <div style={{ display: "flex", width: "150px" }}>
                    <div>12 Mar 2021</div>
                    <div style={{ marginLeft: "10px" }}>5:30 pm</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "10px",
                }}
              >
                <div>Seat</div>
                <div>L7</div>
              </div>
            </div>
            <div className={Styles.line}></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "150px",
                }}
              >
                <VscLocation className={Styles.icons} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={Styles.travel_specification}>
                    Boarding Point
                  </div>
                  <div>{currentBus.source}</div>
                  <div>Anand Rao Circle</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={Styles.travel_specification}>
                  Dropping Point
                </div>
                <div>Mumbai</div>
                <div>Karmot Signal</div>
              </div>
            </div>
            <div className={Styles.passangerInfo}>
              <MdAccountCircle className={Styles.icons} />
              <div className={Styles.passangerName}>Nitansh Rastogi(21,M)</div>
            </div>
          </div>
          <div
            className={
              Styles.payment__fullContainer_rightContainer_fair_container
            }
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={Styles.travel_title}>FARE BREAKUP</div>
              <img
                src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/down.svg"
                width="14"
                height="14"
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div className={Styles.travel_specification}>Onward fare</div>
              <div className={Styles.travel_specification}>1330.35</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div
                className={Styles.travel_specification}
                style={{ fontWeight: "bold" }}
              >
                Total Payable
              </div>
              <div
                className={Styles.travel_specification}
                style={{ fontWeight: "bold" }}
              >
                1330.35
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
              width: "95%",
            }}
          >
            <img
              className={Styles.payment_banner_icon_img}
              src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/master-card-secure-code.png"
              alt=""
            />
            <img
              className={Styles.payment_banner_icon_img}
              src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/verified-by-visa.svg"
              alt=""
            />
            <img
              className={Styles.payment_banner_icon_img}
              src="https://s3.rdbuz.com/Images/webplatform/Common/Payment/verisign-secured.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
