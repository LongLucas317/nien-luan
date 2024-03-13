import classNames from "classnames/bind";
import styles from "./CardProduct.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);

function CardProduct() {
  return (
    <div className={cx("product__detail")}>
      <div className={cx("image__section")}>
        <img
          src={images.product}
          alt="Kéo tỉa cành"
          className={cx("product__img")}
        />
      </div>
      <div className={cx("product__description")}>
        <h3 className={cx("product__name")}>Kéo tỉa cành</h3>
        <del className={cx("product__price")}>300.000 VND</del>
        <p className={cx("product__sale__price")}>100.000 VND</p>
        <button className={cx("product__order")}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}

export default CardProduct;
