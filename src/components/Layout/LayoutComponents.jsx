import Header from "../Header/Header";
import Footer from "../Footer/Footer";


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
