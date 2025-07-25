import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";


// Customs Loading
import Layout from "./Layout/Layout";
import Loader from "./components/Loader"
import App from "./pages/App";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Workz-portfolio/">
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
