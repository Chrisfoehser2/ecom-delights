import { Outlet } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
