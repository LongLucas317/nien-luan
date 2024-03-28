import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import CardProduct from "~/components/CardProduct";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx("product__section")}>
      <h1 className={cx("product__header")}>Dụng cụ cắt tỉa</h1>

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
