import { BrowserRouter, Route, Routes } from "react-router";
import SongListScreen from "./screens/SongListScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SongListScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
