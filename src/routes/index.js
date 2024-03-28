import Home from "~/pages/Home";
import Cart from "~/pages/Cart";
import Checkout from "~/pages/Checkout";
import Product from "~/pages/Product";
import ProductDetail from "~/pages/ProductDetail";
import MyOrder from "~/pages/MyOrder";
import MyOrderDetail from "~/pages/MyOrderDetail";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/:lavelOne/lavelTwo", component: Product },
  { path: "/product/:productId", component: ProductDetail },
  { path: "/checkout", component: Checkout },
  { path: "/account/my-order", component: MyOrder },
  { path: "/account/my-order/:my-orderId", component: MyOrderDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
