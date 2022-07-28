import Connect from "./component/Connect";
import Post from "./component/Post";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
