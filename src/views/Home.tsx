import CardsBook from "../components/CardsBook";
import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";
import HeaderSesion from "../components/headerSesion"

export interface UserData {
  name: string;
  email: string;
}

function Home() {

  const urlParams = new URLSearchParams(window.location.search);

  const token = urlParams.get("token");
  const name = urlParams.get("name");
  const email = urlParams.get("email");

  if (token) {
    localStorage.setItem("ACCESS_TOKEN", token);
  }

  if (email !== null || name !== null) {
    const sessionData: UserData = {
      name: name || '',
      email: email || '',
    };

    localStorage.setItem(
      "USER_SESSION",
      JSON.stringify(sessionData)
    );
  }

  const tokens = localStorage.getItem("ACCESS_TOKEN");

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
      {tokens ? <HeaderSesion /> : <Header />}
        <Section
          tittle="StarkBook"
          description="Explora nuestro catálogo de libros cuidadosamente seleccionados para encontrar la mezcla perfecta de calidad."
        />
      </div>
      <CardsBook />
      <Footer />
    </div>
  );
}

export default Home;
