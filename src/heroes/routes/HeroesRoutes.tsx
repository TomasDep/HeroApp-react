import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "../../shared";
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </main>
    </>
  );
};
