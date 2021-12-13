import { Routes } from "react-router";
import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />

          <Route path="/new-meetup" element={<NewMeetupsPage />} />

          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
