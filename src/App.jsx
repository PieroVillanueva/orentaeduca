import Header from "./components/Header";
import Hero from "./components/Hero";
import FormRegistroCita from "./components/FormRegistroCita";
import Servicios from "./components/Servicios";
import Ventajas from "./components/Ventajas";
import Expertos from "./components/Expertos";
import Consultanos from "./components/Consultanos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FormRegistroCita />
        <Servicios />
        <div className="bg-gradiente1">
          <Ventajas />
          <Expertos />
        </div>
        <Consultanos />
      </main>
      <Footer />
    </>
  );
}

export default App;
