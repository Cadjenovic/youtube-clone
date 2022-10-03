import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video" element={<VideoPlayer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
