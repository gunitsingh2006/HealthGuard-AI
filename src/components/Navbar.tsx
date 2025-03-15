import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Stethoscope, MessageSquare, Phone, Video, Bell, AlertCircle } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    } shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-900" />
            <span className="text-2xl font-bold text-blue-500">HealthGuard AI</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/chatbot" className="flex items-center space-x-1 hover:text-blue-500">
              <MessageSquare className="h-5 w-5" />
              <span>AI Chat</span>
            </Link>
            <Link to="/voice" className="flex items-center space-x-1 hover:text-blue-500">
              <Phone className="h-5 w-5" />
              <span>Voice AI</span>
            </Link>
            <Link to="/video" className="flex items-center space-x-1 hover:text-blue-500">
              <Video className="h-5 w-5" />
              <span>Video AI</span>
            </Link>
            <Link to="/alerts" className="flex items-center space-x-1 hover:text-blue-500">
              <Bell className="h-5 w-5" />
              <span>Health Alerts</span>
            </Link>
            <Link to="/emergency" className="flex items-center space-x-1 hover:text-blue-500">
              <AlertCircle className="h-5 w-5" />
              <span>Emergency</span>
            </Link>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;