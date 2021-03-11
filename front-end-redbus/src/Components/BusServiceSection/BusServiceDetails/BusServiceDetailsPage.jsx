import React from "react";
import styles from "./BusServiceDetailsPage.module.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import { useParams } from "react-router-dom";

const BusServiceDetailsPage = () => {
  const [result, setResult] = React.useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/api/busservice/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsLeftContainer}>
        <h3>
          <ArrowBackIcon /> Back to Result
        </h3>
      </div>
      <div className={styles.detailsRightContainer}></div>
    </div>
  );
};

export default BusServiceDetailsPage;
