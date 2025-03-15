import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const AiChatbot = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your AI health assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I understand your concern. Based on the symptoms you've described, I recommend consulting with a healthcare professional. Would you like me to help you schedule a video consultation?",
        isBot: true
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card1 mb-4">
        <div className="flex items-center space-x-3 mb-6">
          <Bot className="h-8 w-8 text-blue-500" />
          <h2 className="text-2xl font-bold">AI Health Assistant</h2>
        </div>
        
        <div className="h-[500px] overflow-y-auto mb-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-4 rounded-lg ${
                msg.isBot 
                  ? 'bg-gray-100 dark:bg-gray-700' 
                  : 'bg-blue-500 text-white'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your symptoms..."
            className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
          <button onClick={handleSend} className="btn-primary">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiChatbot;