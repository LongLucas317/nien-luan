import classNames from "classnames/bind";
import styles from "./Cart.module.scss";

import emptyCart from "~/assets/images/cartEmpty/empty_cart.jpg";
import CartItem from "~/components/CartItem";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div className={cx("cart__section")}>
      <h1 className={cx("cart__header")}>Giỏ Hàng</h1>

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
            <button onClick={handleCheckout}>Thanh Toán</button>
          </div>
        </div>
      </div>

      {/* <div className={cx("cart__empty")}>
        <img className={cx("cart__image")} src={emptyCart} alt="Empty Cart" />
        <p className={cx("cart__des")}>Chưa có sản phẩm nào trong giỏ hàng</p>
        <a href="#" className={cx("return__home")}>
          Tiếp tục mua hàng
        </a>
      </div> */}
    </div>
  );
}

export default Cart;
