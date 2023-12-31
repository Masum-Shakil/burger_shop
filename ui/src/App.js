import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Category from "./components/categoryList/Category";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/detailsPage/DetailsPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/details" element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Hero />
      <Category />
      <Footer />
    </>
  );
}

export default App;
