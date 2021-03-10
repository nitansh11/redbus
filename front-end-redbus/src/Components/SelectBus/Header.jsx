import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  let source = `Bangalore (Bengaluru)`;
  let destination = `Mumbai`;
  let date = `10 Mar (Wed)`;

  let path2 = `${source} -> ${destination} < ${date}>`;
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderOne}>
        <p>
          Home &gt; Bus Tickets &gt; {source} Bus &gt; {source} To {destination}{" "}
          Bus
        </p>
        <p style={{ fontWeight: "bold" }}>Fare Starts from INR 800</p>
      </div>

      <div className={styles.HeaderTwo}>
        <h3>
          {source} to {destination} &lt; {date} &gt;
        </h3>
        <button>Modify</button>
      </div>
    </div>
  );
};

export default Header;
