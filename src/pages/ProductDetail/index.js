import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import images from "~/assets/images";
import CardProduct from "~/components/CardProduct";

const cx = classNames.bind(styles);

function ProductDetail() {
  return (
    <div className="product__infor">
      <div className={cx("productDetail__section")}>
        <div className={cx("images__section")}>
          <img src={images.product} className={cx("image__center")} />
          <div className={cx("sub__image")}>
            <img src={images.product} className={cx("image__small")} />
            <img src={images.product} className={cx("image__small")} />
            <img src={images.product} className={cx("image__small")} />
            <img src={images.product} className={cx("image__small")} />
          </div>
        </div>

        <div className={cx("product__detail")}>
          <h2 className={cx("product__name")}>Kéo tỉa cành</h2>
          <del className={cx("product__price")}>300.000 VND</del>
          <p className={cx("product__sale__price")}>100.000 VND</p>
          <p className={cx("product__description")}>Tỉa cành tốt</p>
          <button className={cx("cart__btn")}>Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div className={cx("same__product")}>
        <h3 className={cx("sameProduct__name")}>Sản phẩm tương tự</h3>
        <div className={cx("sameProduct__infor")}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
