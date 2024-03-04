import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { About } from "./pages/about";
import { Navbar } from "./components/navBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Base } from "./pages/base";
import { Switches } from "./pages/switches";
import { Keycaps } from "./pages/keycaps";
import Cover from "./pages/cover";

// className = mb-4 (margining)
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/base" element={<Base />} />
          <Route path="/switches" element={<Switches />} />
          <Route path="/keycaps" element={<Keycaps />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}
export default App;
