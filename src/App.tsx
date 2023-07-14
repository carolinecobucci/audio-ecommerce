import "./App.css";
import ExploreProductsPage from "./components/ExploreProductsPage/ExploreProductsPage";
import Filter from "./components/Filter/Filter";
import HomePage from "./components/HomePage/HomePage";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import SearchPage from "./components/SearchPage/SearchPage";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <SignInPage />
      <SignUpPage />
      <HomePage />
      <SearchPage />
      <ExploreProductsPage />
      <Filter />
      <ProductOverview />
      <ShoppingCart />
    </>
  );
}

export default App;
