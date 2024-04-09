import type { NextPage } from "next";
import FlashDealCard from "./flash-deal-card";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <section className={styles.flashDealsWrapper}>
      <div className={styles.flashDeals}>
        <FlashDealCard
          image="/image-1@2x.png"
          number="15"
          daysRemaining="6 Days Remaining"
        />
        <FlashDealCard
          image="/image-2@2x.png"
          number="10"
          daysRemaining="6 Days Remaining"
        />
        <FlashDealCard
          image="/image-3@2x.png"
          number="25"
          daysRemaining="7 Days Remaining"
        />
        <FlashDealCard
          image="/image-4@2x.png"
          number="20"
          daysRemaining="8 Days Remaining"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
