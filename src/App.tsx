import "./App.css";
import ExploreProductsPage from "./components/ExploreProductsPage/ExploreProductsPage";
// import Filter from "./components/Filter/Filter";
import HomePage from "./components/HomePage/HomePage";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import SearchPage from "./components/SearchPage/SearchPage";
import SignInPage from "./components/SignInPage/SignInPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/explore-products" element={<ExploreProductsPage />} />
        <Route path="/product-overview" element={<ProductOverview />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
      {/* <Filter /> */}

      <ul>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/search">Search Page</Link>
        </li>
        <li>
          <Link to="/explore-products">Explore Products</Link>
        </li>
        <li>
          <Link to="/product-overview">Product Overview</Link>
        </li>
        <li>
          <Link to="/shopping-cart">Shopping Cart</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
