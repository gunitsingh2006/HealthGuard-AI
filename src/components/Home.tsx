import React from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Phone,
  Video,
  Bell,
  AlertCircle,
  Activity,
  ThermometerSun,
} from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
          alt="Healthcare Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
          <div className="p-8 max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              AI-Powered Healthcare for Rural Communities
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Advanced healthcare solutions powered by AI, making quality
              healthcare accessible to everyone.
            </p>
            <Link
              to="/chatbot"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Start Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
        <Link to="/chatbot">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold">AI Doctor Chat</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              24/7 access to AI-powered medical consultations in multiple
              languages.
            </p>
          </div>
        </Link>

        <Link to="/voice">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Voice Assistant</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Voice-based health assistant that understands local dialects.
            </p>
          </div>
        </Link>

        <Link to="/video">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Video className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Video Consultation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Real-time video consultations with AI-assisted diagnosis.
            </p>{" "}
          </div>
        </Link>

        <Link to="/alerts">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold">IoT Integration</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Real-time health monitoring through IoT wearables devices.
            </p>
          </div>
        </Link>

        <Link to="/alerts">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <ThermometerSun className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold">
                Environmental Monitoring
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Track AQI, weather conditions, and health risks in your area.
            </p>
          </div>
        </Link>

        <Link to="/emergency">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Emergency Guide</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Step-by-step emergency response guides instant support.
            </p>{" "}
          </div>
        </Link>
      </div>
<hr />
      <div className="realtive inset-0 bg-gradient-to-r from-blue-800/900 to-transparent flex items-center">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb- 4">About Us</h1>
          <p className="text-black/90  text-lg dark:text-white mb-6">
            At Health Guard AI, we believe that quality healthcare should be
            accessible to anyone and everyone. People living in rural areas
            often face significant challenges in accessing medical services,
            leading to delayed diagnoses and inadequate treatment. Our mission
            is to bridge this gap through AI-driven solutions and smart
            healthcare innovations. We are a passionate group of innovators,
            engineers, and healthcare enthusiasts dedicated to transforming
            rural healthcare with technology. Our team brings together expertise
            in artificial intelligence, IoT, healthcare, and social impact to
            develop scalable and accessible solutions for underserved
            communities.
          </p>
          <h1 className="text-2xl font-bold text-black dark:text-white mb- 4">
            AI DOCTOR CHAT :
          </h1>
          <p className="text-black/90  text-lg dark:text-white mb-6">
            Provides instant medical guidance text. It helps users identify
            symptoms, get quick basic treatment advice, and find nearby
            healthcare services. Designed for low-literacy users, it supports
            multiple languages and voice responses. Get 24/7 reliable health
            assistance—anytime, anywhere! 🚀{" "}
          </p>
          <h1 className="text-2xl font-bold text-black dark:text-white mb- 4">
          VOICE ASSISTANT : 
          </h1>
          <p className="text-black/90  text-lg dark:text-white mb-6">
          Makes healthcare accessible for low-literacy users by providing medical advice through natural voice interactions. It helps users understand symptoms, get medicine reminders, and receive health tips in their local language. No typing needed—just speak and get instant guidance! 🎙️
          </p>
          <h1 className="text-2xl font-bold text-black dark:text-white mb- 4">
          VIDEO CONSULTATION : 

          </h1>
          <p className="text-black/90  text-lg dark:text-white mb-6">
          Our platform connects rural patients with certified doctors, providing expert medical advice without the need for travel. Get diagnoses, prescriptions, and health guidance from the comfort of your home—all with just a few taps! 📹
          </p>
          <h1 className="text-2xl font-bold text-black dark:text-white mb- 4">
          ENVIRONMENT MONITORING : 
          </h1>
          <p className="text-black/90  text-lg dark:text-white mb-6">
          Our AI-powered Environment Monitoring system analyzes air quality, water contamination, and disease outbreaks to detect potential health hazards in rural areas. By providing real-time data and alerts, we help communities and healthcare officials take preventive measures and ensure a safer, healthier environment. 🌍
          </p>
          <h1 className="text-2xl font-bold text-black dark:text-white mb- 4">
          EMERGENCY GUIDE : 
          </h1>
          <p className="text-black/90  text-lg dark:text-white mb-6">
          Our Emergency Guide provides step-by-step instructions for handling medical emergencies like accidents, heart attacks, and severe illnesses. With voice and text support, it offers instant first-aid guidance and helps users contact nearby hospitals or emergency services—ensuring help is just a tap away! 🚑⚡
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
