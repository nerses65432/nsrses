import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MacBookAirSix = React.lazy(() => import("pages/MacBookAirSix"));
const MacBookAirSeven = React.lazy(() => import("pages/MacBookAirSeven"));
const MacBookAirFour = React.lazy(() => import("pages/MacBookAirFour"));
const MacBookAirFive = React.lazy(() => import("pages/MacBookAirFive"));
const MacBookAirThree = React.lazy(() => import("pages/MacBookAirThree"));
const MacBookAirEight = React.lazy(() => import("pages/MacBookAirEight"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MacBookAirEight />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/macbookairthree" element={<MacBookAirThree />} />
          <Route path="/macbookairfive" element={<MacBookAirFive />} />
          <Route path="/macbookairfour" element={<MacBookAirFour />} />
          <Route path="/macbookairseven" element={<MacBookAirSeven />} />
          <Route path="/macbookairsix" element={<MacBookAirSix />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
