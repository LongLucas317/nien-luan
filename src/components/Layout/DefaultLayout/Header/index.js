import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const searchInput = document.querySelector(".search__input");
const inputIcon = document.querySelector(".input__icon");

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("logo__section")}>
        <img src={images.logo} alt="Logo" className={cx("logo")} />
      </div>

      <div className={cx("category__section")}>
        <ul className={cx("nav__list")}>
          <li>
            <a href="#">Trang chủ</a>
          </li>

          <li>
            <a href="#">Danh Mục</a>
          </li>

          <li>
            <a href="#">Giới thiệu</a>
          </li>

          <li>
            <a href="#">Liên hệ </a>
          </li>
        </ul>
      </div>

      <div className={cx("search__section")}>
        <input
          type="text"
          className={cx("search__input")}
          placeholder="Search"
        />
        <div className={cx("input__icon")}>
          <i className={cx("search__icon bx bx-search")}></i>
        </div>
      </div>

      <div className={cx("action__section")}>
        <div className={cx("cart__section")}>
          <i className={cx("cart__icon bx bx-cart")}></i>
          <p className={cx("cart__text")}>Giỏ hàng</p>
        </div>

        <div className={cx("sign__in")}>
          <i className={cx("user__icon bx bx-user")}></i>
          <p className={cx("sign__text")}>Đăng nhập</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
