import { useState } from "react";
import "./App.css";
import ExploreProductsPage from "./components/ExploreProductsPage/ExploreProductsPage";
import HomePage from "./components/HomePage/HomePage";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import SearchPage from "./components/SearchPage/SearchPage";
import SignInPage from "./components/SignInPage/SignInPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { Route, Routes } from "react-router-dom";
import {
  GlobalUserContext,
  GlobalUserContextType,
  GlobalUserType,
} from "./context/GlobalUserContext";

function App() {
  const [globalUser, setGlobalUser] = useState<GlobalUserType | null>({
    username: null,
    profilePicture: null,
    cart: [],
  });

  const userContextValue: GlobalUserContextType = {
    globalUser,
    setGlobalUser,
  };

  return (
    <>
      <GlobalUserContext.Provider value={userContextValue}>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/explore-products" element={<ExploreProductsPage />} />
          <Route path="/product-overview/:productId" element={<ProductOverview />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </GlobalUserContext.Provider>
    </>
  );
}

export default App;
