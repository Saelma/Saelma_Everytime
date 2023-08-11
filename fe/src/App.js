import FreeBoard from "./Web/freeBoard";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/board/view" element={<FreeBoard />} />
            </Routes>
        </Router>
    );
}

export default App;