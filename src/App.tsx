import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage } from "./pages/HomePage";
import { StorePage } from "./pages/StorePage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

export const App = () => {
  return (
    <>
      <Navigation />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </>
  );
};
