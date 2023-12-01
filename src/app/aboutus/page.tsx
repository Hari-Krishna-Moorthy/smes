import Aboutus from "../../components/ui/aboutus/aboutus";
import Footer from "../../components/ui/footer/footer";
import Navbar from "../../components/ui/navbar/navbar1";

export default function Certificate() {
  return (
    <div className="relative">
      <div className="h-20">
        <Navbar activePage={"About Us"} />
      </div>
      <Aboutus />

      <Footer />
    </div>
  );
}
