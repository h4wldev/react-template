import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IndexPage } from "./pages/IndexPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
};
