import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import slider from "~/assets/images/logo/slider.png";

import CardProduct from "~/components/CardProduct";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("home__section")}>
      <div className={cx("slider__section")}>
        <img src={slider} alt="Slider" />
      </div>

      <div className={cx("outStanding__product")}>
        <h3 className={cx("outStanding__header")}>Sản phẩm nổi bật</h3>

        <div className={cx("product__list")}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
}

export default Home;
