import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Coffee, { loader as coffeeLoader } from "./pages/Coffee";
import Diy, { loader as loaderDiy } from "./pages/Diy";
import FreshBakes, { loader as foodLoader } from "./pages/FreshBakes";
import ProductDetials, {
  loader as productDetailLoader,
} from "./pages/ProductsDetails";
import AllProducts, { loader as allProductsLoader } from "./pages/AllProducts";
import DiyDetails, { loader as diyDetailLoader } from "./pages/DiyDetails";
import FreshBakesDetails, {
  loader as freshBakesDetailLoader,
} from "./pages/FreshBakesDetails";
import CoffeeDetails, {
  loader as coffeeDetailLoader,
} from "./pages/CoffeeDetails";

import "./server";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      <Route path="coffee" element={<Coffee />} loader={coffeeLoader} />
      <Route
        path="coffee/:id"
        element={<CoffeeDetails />}
        loader={coffeeDetailLoader}
      />
      <Route path="diy" element={<Diy />} loader={loaderDiy} />
      <Route path="diy/:id" element={<DiyDetails />} loader={diyDetailLoader} />
      <Route path="fresh-bakes" element={<FreshBakes />} loader={foodLoader} />
      <Route
        path="fresh-bakes/:id"
        element={<FreshBakesDetails />}
        loader={freshBakesDetailLoader}
      />
      <Route
        path="/products"
        element={<AllProducts />}
        loader={allProductsLoader}
      />
      <Route
        path="products/:id"
        element={<ProductDetials />}
        loader={productDetailLoader}
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
