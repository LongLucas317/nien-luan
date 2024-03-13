import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("infor__section")}>
        <h2 className={cx("infor__header")}>Thông tin liên hệ</h2>

        <p className={cx("infor__address")}>
          <i className={cx("location__icon bx bx-current-location")}></i>
          Đại học Cần Thơ, Thành phố Cần Thơ
        </p>
        <p className={cx("infor__phone")}>
          <i className={cx("phone__icon bx bxs-phone")}></i>
          Số điện thoại:
          <a href="tel: +0123456789">0123456789</a>
        </p>
        <p className={cx("infor__email")}>
          <i className={cx("email__icon bx bxl-gmail")}></i>
          Email:
          <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
        </p>
      </div>

      <div className={cx("social__section")}>
        <h2 className={cx("social__header")}>Liên hệ trực tuyến</h2>

        <a href="#" className={cx("facebook")}>
          <i className={cx("facebook__icon bx bxl-facebook")}></i>
        </a>
        <a href="#" className={cx("youtube")}>
          <i className={cx("youtube__icon bx bxl-youtube")}></i>
        </a>
        <a href="#" className={cx("instagram")}>
          <i className={cx("instagram__icon bx bxl-instagram")}></i>
        </a>
        <a href="#" className={cx("twitter")}>
          <i className={cx("twitter__icon bx bxl-twitter")}></i>
        </a>
      </div>

      <div className={cx("feedback__section")}>
        <form action="" className={cx("form__feedback")}>
          <div className={cx("feedback")}>
            <h2 className={cx("feedback__header")}>Góp ý hoặc Khiếu nại</h2>

            <input
              type="text"
              className={cx("feedback__input")}
              required
              placeholder="Họ và Tên"
            />
            <input
              type="email"
              className={cx("feedback__input")}
              required
              placeholder="Email"
            />
            <input
              type="text"
              className={cx("feedback__input")}
              required
              placeholder="Góp ý"
            />
            <button className={cx("feedback__submit")}>Gửi</button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
