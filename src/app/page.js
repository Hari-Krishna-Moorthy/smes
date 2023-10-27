import Footer from "src/components/ui/footer/footer";
import Navbar from "src/components/ui/navbar/navbar1";
import Home from "./home";

export default function Site() {
  return (
    <main className="light">
      <div className="h-20">
        {/* Navbar  */}
          <Navbar activePage={"Home"} />
      </div>
      <Home />

      
      <Footer />
    </main>
  );
}
