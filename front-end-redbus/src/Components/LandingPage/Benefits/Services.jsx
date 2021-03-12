import React from "react";
import styles from "./Services.module.css";
import { v4 as uuidv4 } from "uuid";
const data = [
  {
    img: "https://s3.rdbuz.com/Images/safety/srp/safety.svg",
    title: "SAFETY+",
    desc:
      "With Safety+ we have brought in a set of measures like Sanitized buses, mandatory masks etc. to ensure you travel safely.",
  },
  {
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F190%2F190119.png&f=1&nofb=1",
    title: "SUPERIOR CUSTOMER SERVICE",
    desc:
      "We put our experience and relationships to good use and are available to solve your travel issues. ",
  },
  {
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F127141%2Fisolated%2Fpreview%2Fc5a45f450c5a779db2fb3f6dc8bb617a-best-price-sale-tag-by-vexels.png&f=1&nofb=1",
    title: "LOWEST PRICES",
    desc:
      "We always give you the lowest price with the best partner offers. And be Poceket friendly for your upcoming trips",
  },
  {
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fcelebration-flat%2F64%2Fopen-box-surprise-boxing-day-gift-512.png&f=1&nofb=1",
    title: "UNMATCHED BENEFITS",
    desc:
      "We take care of your travel beyond ticketing by providing you with innovative and unique benefits.",
  },
];

const Services = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgBox}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagpartseducation.com%2Fwp-content%2Fuploads%2F2016%2F02%2Four-promise_icon.png&f=1&nofb=1"
          alt=""
        />
      </div>
      <h1>We promise to deliver</h1>
      <div className={styles.flexContainer}>
        {data.map((item) => {
          return (
            <div key={uuidv4()} className={styles.flexItems}>
              <div className={styles.itemimg}>
                <img src={item.img} alt="item" />
              </div>

              <p>{item.title}</p>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
