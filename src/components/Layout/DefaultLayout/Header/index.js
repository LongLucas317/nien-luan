import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("nav__section")}>
        <div className={cx("logo__section")}>
          <img src={images.logo} alt="Logo" className={cx("logo")} />
        </div>

        <div className={cx("category__section")}>
          <ul className={cx("nav__list")}>
            <li>
              <a href="#">Trang chủ</a>
            </li>

            <li>
              <a href="#">
                Danh Mục
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
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
            <FontAwesomeIcon
              className={cx("seach__icon")}
              icon={faMagnifyingGlass}
            />
          </div>
        </div>

        <div className={cx("action__section")}>
          <div className={cx("cart__section")}>
            <FontAwesomeIcon
              className={cx("cart__icon")}
              icon={faCartShopping}
            />
            <p className={cx("cart__text")}>Giỏ hàng</p>
          </div>

          <div className={cx("sign__in")}>
            <FontAwesomeIcon className={cx("user__icon")} icon={faUser} />
            <p className={cx("sign__text")}>Đăng nhập</p>
          </div>
        </div>
      </div>

      <div className={cx("subnav__section")}>
        <ul className={cx("sub__nav")}>
          <li>
            <a href="#">Dụng cụ cắt tỉa</a>
          </li>
          <li>
            <a href="#">Dụng cụ xử lý nền</a>
          </li>
          <li>
            <a href="#">Dụng cụ làm sạch</a>
          </li>
          <li>
            <a href="#">Dụng cụ xử lý nước</a>
          </li>
          <li>
            <a href="#">Dụng cụ hỗ trợ</a>
          </li>
          <li>
            <a href="#">Phụ kiện trang trí</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
