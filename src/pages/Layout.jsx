import Header from "../components/Header";
import Footer from "../components/Footer";
import FormRegistroCita from "../components/FormRegistroCita";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <FormRegistroCita />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
