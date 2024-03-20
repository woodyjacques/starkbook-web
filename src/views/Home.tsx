import CardsBook from "../components/CardsBook";
import Footer from "../components/Footer";
import { Section } from "../components/Section";
import Header from "../components/header";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow">
        <Header />
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
