import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";

export default function AppRouter () {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Darkpage" element={<Darkpage/>}/>
            </Routes>
        </Router>
    );
}
  