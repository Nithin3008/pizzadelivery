import { Header } from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import { Loader } from "./Loader";
export const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader></Loader>}
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet></Outlet>
      </main>
      <CartOverview></CartOverview>
    </div>
  );
};
