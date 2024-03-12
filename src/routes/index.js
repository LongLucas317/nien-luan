import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Cart from "~/pages/Cart";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/cart", component: Cart, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
