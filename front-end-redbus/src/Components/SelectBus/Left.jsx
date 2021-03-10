import React from "react";
import styles from "./Left.module.css";

const Left = () => {
  return (
    <div className={styles.Left}>
      {/* 1. Basic Filters */}
      <div className={styles.Left_filters}>
        <p>FILTERS</p>
        <ul>
          <li>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Live Tracking (32)
          </li>

          <li>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Reschedulable (28)
          </li>
        </ul>
      </div>
      {/* 2. Departure Filters */}
      <div className={styles.Left_filters}>
        <p>DEPARTURE TIME</p>
        <ul>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
        </ul>
      </div>
      {/* 3. Bus Types Filters */}
      <div className={styles.Left_filters}>
        <p>BUS TYPES</p>
        <ul>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>SEATER (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>SLEEPER (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>AC (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>NONAC (0)</p>
          </li>
        </ul>
      </div>
      {/* 4. Arrival Time Filters */}

      <div className={styles.Left_filters}>
        <p>ARRIVAL TIME</p>
        <ul>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
          <li>
            <input type="checkbox" />
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Before 6 am (0)</p>
          </li>
        </ul>
      </div>
      {/* 5. Boarding Point Filters */}
      <div className={styles.Left_filters__search}>
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" />
      </div>
      {/* 6. Dropping Point Filters */}
      {/* 7. Operator */}
      {/* 8. Amenities */}
    </div>
  );
};

export default Left;
