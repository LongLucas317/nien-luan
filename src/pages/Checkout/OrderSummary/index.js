import classNames from "classnames/bind";
import styles from "./OrderSummary.module.scss";

import CartItem from "~/components/CartItem";
import AddressItem from "~/components/AddressItem";

const cx = classNames.bind(styles);

function OrderSummary() {
  return (
    <div className={cx("orderSummary__section")}>
      <AddressItem />

      <div className={cx("product__wrapper")}>
        <div className={cx("product__section")}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className={cx("total")}>
          <h2 className={cx("total__header")}>Chi tiết Đơn đặt hàng:</h2>
          <div className={cx("total__section")}>
            <div className={cx("price__section")}>
              <h3 className={cx("price__header")}>
                Giá <span>(1 sản phẩm)</span>:
              </h3>
              <p className="price">89.000₫</p>
            </div>

            <div className={cx("sale__section")}>
              <h3 className={cx("sale__header")}>Giảm giá:</h3>
              <p className="price">89.000₫</p>
            </div>

            <div className={cx("ship__section")}>
              <h3 className={cx("ship__header")}>Phí ship:</h3>
              <p className="price">89.000₫</p>
            </div>
          </div>
          <div className={cx("total__price")}>
            <h3 className={cx("total__header")}>Tổng tiền:</h3>
            <p className="price">89.000₫</p>
          </div>
          <div className={cx("pay__btn")}>
            <button>Thanh Toán</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
