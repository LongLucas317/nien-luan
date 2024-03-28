import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";

import vpn from "~/assets/images/product/Voi_phun_nuoc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CartItem() {
  return (
    <div className={cx("cart__product")}>
      <div className={cx("product__content")}>
        <div className={cx("product__image")}>
          <img src={vpn} alt="" />
        </div>
        <div className={cx("product__infor")}>
          <h2 className={cx("product__name")}>Hạnh Nhân Nguyên Vỏ Noberasco</h2>
          <p className={cx("product__price")}>89.000&nbsp;₫</p>
          <div className={cx("product__quatity")}>
            <p className={cx("quatity__text")}>Số lượng:</p>
            <input type="button" value="-" className={cx("minus__btn")} />
            <input
              type="number"
              value="1"
              className={cx("quatity__number")}
              min="1"
              max=""
              step="1"
            ></input>
            <input type="button" value="+" className={cx("plus__btn")} />
          </div>
        </div>
        <div className={cx("product__remove")}>
          <FontAwesomeIcon className={cx("remove__icon")} icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
