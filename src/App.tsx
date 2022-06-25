import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Container>
  );
};
