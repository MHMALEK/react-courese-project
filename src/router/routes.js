import ForbiddenPage from "../pages/forbidden";
import MainPage from "../pages/main-page";
import NotFoundPage from "../pages/not-found";
import ProductPage from "../pages/product";
import ProfilePage from "../pages/profile";
import pathes from "./utils/pathes";

const routes = [
  {
    name: "INDEX",
    path: pathes.INDEX,
    component: MainPage,
    exact: true,
    needAuth: false,
    layout: 'authLayout'
  },
  {
    name: "PROFILE",
    path: pathes.PROFILE,
    component: ProfilePage,
    exact: true,
    needAuth: true,
  },
  {
    name: "PRODUCT",
    path: pathes.PRODUCT,
    component: ProductPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "FORBIDDEN",
    path: pathes.FORBIDDEN,
    component: ForbiddenPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "NOT_FOUND",
    path: pathes.NOT_FOUND,
    component: NotFoundPage,
    exact: true,
    needAuth: false,
  },
];

export default routes;
