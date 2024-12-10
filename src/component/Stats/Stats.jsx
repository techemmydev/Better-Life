import React from "react";
import styles from "../Stats/Stats.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  const stats = [
    { icon: faUser, number: "200+", text: "Users" },
    { icon: faMapMarkerAlt, number: "30+", text: "Locations" },
    { icon: faServer, number: "50+", text: "Servers" },
  ];

  return (
    <div className={styles.statsContainer}>
      <div className={styles.boder}>
        {stats.map((stat, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={stat.icon} className={styles.icon} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.text}>{stat.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
