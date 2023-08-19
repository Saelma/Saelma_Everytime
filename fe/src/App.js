import FreeBoard from "./Web/freeBoard";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardView from "./Web/BoardView";


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/board/list" element={<FreeBoard />} />
                <Route path="/board/view/:id" element={<BoardView />} />
            </Routes>
        </Router>
    );
}

export default App;