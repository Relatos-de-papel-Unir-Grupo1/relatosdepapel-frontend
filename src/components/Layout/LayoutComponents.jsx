import Header from "../Header/Header";
import Footer from "../footer/Footer";
import HomePage from "../../views/HomePage/HomePage";


export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
