import type { NextPage } from "next";
import Header from "../components/header";
import TopNav from "../components/top-nav";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import DataAggregator from "../components/data-aggregator";
import SearchByFoodThisIsALong from "../components/search-by-food-this-is-a-long";
import Features from "../components/features";
import AppDownload from "../components/app-download";
import WhileLoop from "../components/while-loop";
import CTA from "../components/c-t-a";
import Footer from "../components/footer";
import styles from "./index.module.css";

const CITestFood: NextPage = () => {
  return (
    <div className={styles.ciTestFood}>
      <section className={styles.branchCondition}>
        <div className={styles.topNavHeader}>
          <div className={styles.topNavHeaderChild} />
          <div className={styles.topNavHeaderItem} />
          <div className={styles.loopControl}>
            <div className={styles.functionCall} />
            <img
              className={styles.variableAssignerIcon}
              alt=""
              src="/variable-assigner@2x.png"
            />
          </div>
          <Header />
          <div className={styles.background} />
          <TopNav />
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <section className={styles.ciTestFoodInner}>
        <div className={styles.frameParent}>
          <FrameComponent />
          <DataAggregator />
        </div>
      </section>
      <SearchByFoodThisIsALong />
      <Features />
      <AppDownload />
      <WhileLoop />
      <CTA />
      <Footer />
    </div>
  );
};

export default CITestFood;
