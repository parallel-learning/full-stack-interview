import { BrowserRouter, Route, Routes } from "react-router";
import SongListScreen from "./screens/SongListScreen";
import PlaylistListScreen from "./screens/PlaylistListScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaylistListScreen />} />
        <Route path="/song" element={<SongListScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
