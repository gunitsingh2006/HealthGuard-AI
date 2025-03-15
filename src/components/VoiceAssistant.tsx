import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { getAIResponse } from '../lib/gemini';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (window.SpeechRecognition || (window as any).webkitSpeechRecognition) {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = async (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        setIsListening(false);
        
        // Get AI response
        const aiResponse = await getAIResponse(text);
        setResponse(aiResponse);
        
        // Text-to-speech
        const speech = new SpeechSynthesisUtterance(aiResponse);
        window.speechSynthesis.speak(speech);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const toggleListening = () => {
    if (!recognition) {
      setResponse("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <Volume2 className="h-8 w-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Voice Assistant</h2>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <button
              onClick={toggleListening}
              className={`p-8 rounded-full transition-colors ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isListening ? (
                <MicOff className="h-8 w-8 text-white" />
              ) : (
                <Mic className="h-8 w-8 text-white" />
              )}
            </button>
          </div>

          {transcript && (
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="font-medium mb-2 text-gray-900 dark:text-white">You said:</p>
              <p className="text-gray-700 dark:text-gray-300">{transcript}</p>
            </div>
          )}

          {response && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="font-medium mb-2 text-gray-900 dark:text-white">AI Response:</p>
              <p className="text-gray-700 dark:text-gray-300">{response}</p>
            </div>
          )}

          <div className="text-center text-gray-600 dark:text-gray-300">
            {isListening ? 'Listening...' : 'Click the microphone to start speaking'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;