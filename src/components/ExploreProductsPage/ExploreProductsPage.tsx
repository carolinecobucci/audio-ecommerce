import { useState, useEffect } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./ExploreProductsPage.module.css";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";
import Filter from "../Filter/Filter";
import Sheet from "react-modal-sheet";
import leftIcon from "/src/assets/chevron-left-icon.svg";
import shoppingCartIcon from "/src/assets/shopping-cart-icon.svg";
import slidersIcon from "/src/assets/sliders-icon.svg";

// unicas categorias existentes no DB sao Headsets e Headphones
// nao batem com o figma!!!!
interface CategoryTypes {
  category: "Headsets" | "Headphones" | "earpads" | "cable" | null;
}
interface SortByTypes {
  sortBy: "popularity" | "newest" | "oldest" | "highprice" | "lowprice" | "review" | null;
}

export type { CategoryTypes, SortByTypes };

const ExploreProductsPage = () => {
  const url = "http://localhost:3000/product";
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [category, setCategory] = useState<CategoryTypes["category"]>(null);
  const [sortBy, setSortBy] = useState<SortByTypes["sortBy"]>(null);

  const filteredByCategory = (
    productsArray: ProductType[],
    category: CategoryTypes["category"]
  ) => {
    const filteredProducts = productsArray.filter((product) => product.category === category);
    return filteredProducts;
  };

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response: AxiosResponse<ProductType[]> = await axios.get(url);
        if (category) {
          setProducts(filteredByCategory(response.data, category));
        } else {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchProducts();
  }, [category]);

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={styles.back} to="/">
          <img src={leftIcon} alt="back" />
        </Link>
        <Link className={styles.cart} to="/shopping-cart">
          <img src={shoppingCartIcon} alt="shopping cart" />
        </Link>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.featureProducts}>Feature Products</p>
        <h2 className={styles.seeAll}>See all products</h2>
      </div>
      <button onClick={() => setOpen(true)} className={styles.filter}>
        <img className={styles.filterImg} src={slidersIcon} alt="filter" />
        <p className={styles.filterText}>Filter</p>
      </button>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Filter setOpen={setOpen} setCategory={setCategory} setSortBy={setSortBy} />
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      <div className={styles.productsBg}>
        <div className={styles.productsGrid}>
          {products?.map((product, i) => (
            <ProductGrid
              key={i}
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              rate={product.rating}
              reviewNumber={product.reviews}
            />
          ))}
        </div>
        {products?.length === 0 && <div>No products found</div>}
      </div>
    </div>
  );
};

export default ExploreProductsPage;
