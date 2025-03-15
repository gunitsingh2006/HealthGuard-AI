import React, { useState, useRef, useEffect } from 'react';
import { Video, Phone, PhoneOff, Camera, CameraOff } from 'lucide-react';
import { getAIResponse } from '../lib/gemini';

const VideoConsultation = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setIsCameraOn(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      setAiResponse('Unable to access camera. Please check permissions.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
  };

  const startCall = async () => {
    setIsConnecting(true);
    const response = await getAIResponse("You are a medical AI assistant. Greet the patient and ask about their symptoms.");
    setAiResponse(response);
    setIsConnecting(false);
    setIsConnected(true);
  };

  const endCall = () => {
    setIsConnected(false);
    setAiResponse('');
    stopCamera();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <Video className="h-8 w-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Video Consultation</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              {!isCameraOn && (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  Your camera feed
                </div>
              )}
            </div>
            
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              {isConnected ? (
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
                  alt="AI Doctor"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    {isConnecting ? (
                      <div className="space-y-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                        <p>Connecting to AI doctor...</p>
                      </div>
                    ) : (
                      <p>AI doctor feed</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {aiResponse && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="font-medium mb-2 text-gray-900 dark:text-white">AI Doctor:</p>
              <p className="text-gray-700 dark:text-gray-300">{aiResponse}</p>
            </div>
          )}

          <div className="flex justify-center space-x-4">
            <button
              onClick={isCameraOn ? stopCamera : startCamera}
              className="btn-primary flex items-center space-x-2"
            >
              {isCameraOn ? (
                <>
                  <CameraOff className="h-5 w-5" />
                  <span>Stop Camera</span>
                </>
              ) : (
                <>
                  <Camera className="h-5 w-5" />
                  <span>Start Camera</span>
                </>
              )}
            </button>

            {isCameraOn && !isConnected && (
              <button
                onClick={startCall}
                disabled={isConnecting}
                className="btn-primary flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>{isConnecting ? 'Connecting...' : 'Start Consultation'}</span>
              </button>
            )}

            {isConnected && (
              <button
                onClick={endCall}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
              >
                <PhoneOff className="h-5 w-5" />
                <span>End Call</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;