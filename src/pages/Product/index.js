import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import CardProduct from "~/components/CardProduct";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx("product__section")}>
      <h2 className={cx("product__header")}>Dụng cụ cắt tỉa</h2>

      <div className={cx("product__list")}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
}

export default Product;
