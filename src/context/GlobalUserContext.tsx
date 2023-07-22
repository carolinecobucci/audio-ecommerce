import { createContext, Dispatch, SetStateAction } from "react";
import { ProductType } from "../components/CarouselAllProducts/CarouselAllProducts";

interface GlobalUserType {
  username: string | null;
  profilePicture: string | null;
  cart: ProductType[];
}

interface GlobalUserContextType {
  globalUser: GlobalUserType | null;
  setGlobalUser: Dispatch<SetStateAction<GlobalUserType | null>>;
}

const initialUser: GlobalUserType = {
  username: null,
  profilePicture: null,
  cart: [],
};

const GlobalUserContext = createContext<GlobalUserContextType>({
  globalUser: initialUser,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setGlobalUser: () => {},
});

// const GlobalUserContext = createContext<GlobalUserContextType | null>(null);

export { GlobalUserContext };
export type { GlobalUserType, GlobalUserContextType };
