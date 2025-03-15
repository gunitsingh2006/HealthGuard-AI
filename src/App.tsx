import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AiChatbot from './components/AiChatbot';
import VoiceAssistant from './components/VoiceAssistant';
import VideoConsultation from './components/VideoConsultation';
import HealthAlerts from './components/HealthAlerts';
import EmergencyGuide from './components/EmergencyGuide';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chatbot" element={<AiChatbot />} />
              <Route path="/voice" element={<VoiceAssistant />} />
              <Route path="/video" element={<VideoConsultation />} />
              <Route path="/alerts" element={<HealthAlerts />} />
              <Route path="/emergency" element={<EmergencyGuide />} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App