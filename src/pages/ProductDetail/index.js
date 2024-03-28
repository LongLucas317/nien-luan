import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import vpn from "~/assets/images/product/Voi_phun_nuoc.png";
import vpns from "~/assets/images/product/kit_voi_tuoi.jpg";
import CardProduct from "~/components/CardProduct";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function ProductDetail() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="product__infor">
      <div className={cx("productDetail__section")}>
        <div className={cx("images__section")}>
          <img src={vpn} className={cx("image__center")} alt="Kéo tỉa cành" />
          <div className={cx("sub__image")}>
            <img src={vpns} className={cx("image__small")} alt="Kéo tỉa cành" />
            <img src={vpns} className={cx("image__small")} alt="Kéo tỉa cành" />
            <img src={vpns} className={cx("image__small")} alt="Kéo tỉa cành" />
            <img src={vpns} className={cx("image__small")} alt="Kéo tỉa cành" />
          </div>
        </div>

        <div className={cx("product__detail")}>
          <h2 className={cx("product__name")}>Kéo tỉa cành</h2>
          <del className={cx("product__price")}>300.000 VND</del>
          <p className={cx("product__sale__price")}>100.000 VND</p>
          <p className={cx("product__description")}>Tỉa cành tốt</p>
          <span className={cx("product__quatity")}>Còn 1 sản phẩm</span>
          <div className={cx("add__to_cart")}>
            {/* Số lượng sp */}
            <button onClick={handleAddToCart} className={cx("cart__btn")}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      <div className={cx("comment__section")}>
        <h3 className={cx("comment__header")}>Khách hàng đánh giá</h3>
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
