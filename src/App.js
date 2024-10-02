// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirect root path to /mainchat */}
                <Route path="/" element={<Navigate to="/mainchat" replace />} />
                
                {/* Single Chat Route */}
                <Route path="/mainchat" element={<Chatbot />} />

                {/* Redirect any unknown routes to /mainchat */}
                <Route path="*" element={<Navigate to="/mainchat" replace />} />
            </Routes>
        </Router>
    );
}

export default App; 