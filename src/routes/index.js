import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Cart from "~/pages/Cart";
import ProductDetail from "~/pages/ProductDetail";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/product-detail", component: ProductDetail },
  { path: "/cart", component: Cart, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
