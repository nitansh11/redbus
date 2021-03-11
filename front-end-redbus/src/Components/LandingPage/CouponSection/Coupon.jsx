import React from "react";
import styles from "./Coupon.module.css";

const Coupon = () => {
  return (
    <div className={styles.couponContainer}>
      <div className={styles.flex}>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img
              src="https://st.redbus.in/Images/INDOFFER/safetyplus/274_147.png"
              alt="coupon-1"
            />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img
              src="https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png"
              alt="coupon-1"
            />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img
              src="https://st.redbus.in/Images/APSRTC/new/APSRTC_1.png"
              alt="coupon-1"
            />
          </span>
          <span>Use code FIRST</span>
        </div>
      </div>
      {/* Floating Container */}
      <div className={styles.float}>
        <div className={styles.imgBox}>
          <img
            src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
            alt="shield"
          />
        </div>
        <div className={styles.writingBox}>
          <h4>Introducing Safety+ Program</h4>
          <p>A unique certification program that ensures safety in all buses</p>
        </div>
        <div className={styles.buttonBox}>
          <div style={{ height: "50px" }}></div>
          <button>know More</button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
