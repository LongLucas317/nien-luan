import classNames from "classnames/bind";
import styles from "./MyOrder.module.scss";

import vpn from "~/assets/images/product/Voi_phun_nuoc.png";

const cx = classNames.bind(styles);

function MyOrder() {
  return (
    <div className={cx("myOrder__section")}>
      <h2 className={cx("myOrder__header")}>Đơn hàng của tôi</h2>

      <div className={cx("myOrder__content")}>
        <div className={cx("myOrder__status")}>
          <h2 className={cx("status__header")}>Trạng thái:</h2>

          <div className={cx("ship__section")}>
            <p className={cx("ship__status")}>
              <strong>Giao hàng: </strong>
              Chưa giao hàng
            </p>
          </div>

          <div className={cx("pay__section")}>
            <p className={cx("pay__status")}>
              <strong>Thanh toán: </strong>
              Đã thanh toán
            </p>
          </div>
        </div>

        <div className={cx("myOrder__detail")}>
          <div className={cx("myOrder__image")}>
            <img src={vpn} alt="" />
          </div>

          <div className={cx("order__detail")}>
            <h2 className={cx("orderDetail__header")}>Vòi phun nước</h2>
            <p className={cx("orderDetail__price")}>89.000₫</p>
            <p className={cx("orderDetail__quatity")}>
              <strong>Số lượng:</strong> 1
            </p>
          </div>
        </div>

        <div className={cx("myOrder__action")}>
          <div className={cx("myOrder__price")}>
            <h2 className={cx("myOrder__priceHeader")}>Tổng tiền: </h2>
            <p className={cx("myOrder__totalPrice")}>89.000₫</p>
          </div>

          <div className={cx("action__btn")}>
            <button className={cx("cancel__btn")}>Hủy đơn hàng</button>
            <button className={cx("detail__btn")}>Chi tiết đơn hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
