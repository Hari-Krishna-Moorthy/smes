import Navbar from "src/components/ui/navbar/navbar1";
import Aboutus from "src/components/ui/aboutus/aboutus";
import OurProduct from "src/components/ui/ourproduct/ourproduct"

export default function Home() {
  return (
    <main className="light">
      <Navbar/>
      <OurProduct/>
      <Aboutus/>
      

    </main>
  );
}
