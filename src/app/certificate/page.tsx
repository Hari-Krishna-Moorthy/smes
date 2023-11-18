import React from "react";
import Image from "next/image";

import Footer from "../../components/ui/footer/footer";
import Navbar from "../../components/ui/navbar/navbar1";

import { styles } from "./styles";
import { certificateList } from "./utils";

export default function Certificate() {
  return (
    <div className="relative">
      <div className="h-20">
        <Navbar activePage={"Certificate"} />
      </div>
      <div className={styles.certificateContainer}>
        <h2 className={styles.headerText}>Certificates</h2>
        <div className={styles.cardsLayout}>
          {certificateList.map((item, index) => (
            <div key={index} className={styles.cardContainer}>
              <div className={styles.card}>
                <Image
                  src={item.image}
                  alt=""
                  className={styles.image}
                  width={1000}
                  height={1000}
                />
                <a className={styles.link}>{item.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
