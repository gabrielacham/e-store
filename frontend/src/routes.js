import {Home} from "./views/Home/";
import ProductDetails  from "./views/ProductDetails/";

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
];

export default dashboardRoutes;
