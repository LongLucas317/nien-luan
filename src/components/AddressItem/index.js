import classNames from "classnames/bind";
import styles from "./AddressItem.module.scss";

const cx = classNames.bind(styles);

function AddressItem() {
  return (
    <div className={cx("addressItem__section")}>
      <h3 className={cx("customer__name")}>Hoàng Long</h3>
      <div className={cx("customer__phoneNumber")}>
        <h3 className={cx("phoneNumber__header")}>Số điện thoại:</h3>
        <p className={cx("phoneNumber")}>0123456789</p>
      </div>

      <div className={cx("customer__address")}>
        <h3 className={cx("address__header")}>Địa chỉ:</h3>

        <p className={cx("address__detail")}>
          Trường Đại học Cần Thơ, Thành Phố Cần Thơ
        </p>
        <p className={cx("address")}>
          Phường An Hòa, Quận Ninh Kiều, Thành phố Cần Thơ
        </p>
      </div>
    </div>
  );
}

export default AddressItem;
