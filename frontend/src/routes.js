import {Home} from "./views/Home/";
import ProductDetails  from "./views/ProductDetails/";
import Store  from "./views/Store/";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Inicio",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/productdetails",
    name: "Detalle de Producto",
    component: ProductDetails,
    layout: "/admin",
  },
  {
    path: "/store",
    name: "Tienda",
    component: Store,
    layout: "/admin",
  },
];

export default dashboardRoutes;
