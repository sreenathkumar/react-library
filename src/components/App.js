import { Outlet, RouterProvider } from "react-router-dom";

import { router } from "../router";
import Footer from "./footer";
import Header from "./header";

export function Root() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="search-result" element={<SearchResult />} />
        <Route path="/:title/ID=:id" element={<SingleBook />} />

        <Route path="/blog" element={<Blog />} />
      </Routes> */}
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
