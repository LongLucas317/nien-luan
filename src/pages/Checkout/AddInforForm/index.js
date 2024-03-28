import classNames from "classnames/bind";
import styles from "./AddInforForm.module.scss";

import AddressItem from "~/components/AddressItem";

const cx = classNames.bind(styles);

function AddInforForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      fullName: data.get("fullName"),
      phoneNumber: data.get("phoneNumber"),
      addressDetail: data.get("addressDetail"),
      ward: data.get("ward"),
      district: data.get("district"),
      city: data.get("city"),
    };
    console.log("address", address);
  };

  return (
    <div className={cx("form__section")}>
      <div className={cx("addess__saved")}>
        <div className={cx("address__card")}>
          <AddressItem />
        </div>
        <button className={cx("choose__address")}>Chọn</button>
      </div>

      <div className={cx("form__infor")}>
        <div className={cx("form__wrapper")}>
          <form className={cx("add__address")} onSubmit={handleSubmit}>
            <div className={cx("infor__section")}>
              <div className={cx("name__section")}>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Họ và Tên"
                />
              </div>

              <div className={cx("phone__section")}>
                <input
                  type="text"
                  name="phoneNumber"
                  required
                  placeholder="Số điện thoại"
                />
              </div>
            </div>

            <div className={cx("address__section")}>
              <div className={cx("ward__section")}>
                <input
                  type="text"
                  name="ward"
                  required
                  placeholder="Khóm/Phường"
                />
              </div>

              <div className={cx("district__section")}>
                <input
                  type="text"
                  name="district"
                  required
                  placeholder="Quận/Huyện"
                />
              </div>

              <div className={cx("city__section")}>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Thành phố"
                />
              </div>
            </div>

            <div className={cx("address__detail")}>
              <div className={cx("addressDetail__section")}>
                <textarea
                  rows="6"
                  cols="20"
                  name="addressDetail"
                  placeholder="Địa chỉ"
                ></textarea>
              </div>
            </div>

            <button type="submit" className={cx("add__btn")}>
              Đặt hàng
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddInforForm;
