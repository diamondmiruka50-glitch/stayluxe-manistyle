import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Gallery />
      <BookingForm />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;