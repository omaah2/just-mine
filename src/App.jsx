import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";

import { useEffect } from "react";
import scroll from "./animation/scroll";

const App = () => {
  // ==== scroll no work sha imma try it later
  useEffect(() => {
    scroll();
  }, []);

  return (
    <main className={`transition-all duration-300`}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default App;

/*Omaah Builds the Web!*/
