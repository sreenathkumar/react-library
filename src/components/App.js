import { Outlet, RouterProvider } from "react-router-dom";

import { router } from "../router";
import Footer from "./footer";
import Header from "./header";
import { SearchProvider } from "../contexts/searchContext";

export function Root() {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
      <Footer />
    </SearchProvider>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
