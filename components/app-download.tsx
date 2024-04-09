import type { NextPage } from "next";
import styles from "./app-download.module.css";

const AppDownload: NextPage = () => {
  return (
    <section className={styles.appDownload}>
      <div className={styles.background} />
      <div className={styles.wrapperImage}>
        <img className={styles.imageIcon} alt="" src="/image-13@2x.png" />
      </div>
      <div className={styles.loopControl}>
        <div className={styles.comparisonOperator}>
          <div className={styles.arithmeticFunction}>
            <h1 className={styles.title}>Install the app</h1>
            <div className={styles.body}>
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </div>
          </div>
          <div className={styles.ifStatement}>
            <div className={styles.wrapperGooglePlayDownload}>
              <img
                className={styles.googlePlayDownload}
                loading="lazy"
                alt=""
                src="/google-play-download@2x.png"
              />
            </div>
            <div className={styles.wrapperAppStoreDownloadBut}>
              <img
                className={styles.appStoreDownloadButton}
                loading="lazy"
                alt=""
                src="/app-store-download-button.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
