import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";


export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
