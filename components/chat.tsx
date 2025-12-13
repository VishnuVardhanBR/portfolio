import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, isUser: boolean }[]>([]);
  const [inputText, setInputText] = useState('');
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      setIsHeaderExpanded(false);
    }
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');
      setIsHeaderExpanded(false);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 bg-black rounded-lg shadow-lg overflow-hidden mb-2"
          >
            <motion.div
              animate={{ height: isHeaderExpanded ? "40%" : "auto" }}
              className="relative overflow-hidden"
              style={{
                background: isHeaderExpanded
                  ? "linear-gradient(45deg, #333, #666)"
                  : "black"
              }}
            >
              <div className="p-4 flex flex-col justify-end h-full">
                <h2 className="text-white text-2xl font-bold mb-2">
                  Hello there.
                </h2>
                <p className="text-white text-xl">
                  How can we help?
                </p>
              </div>
            </motion.div>
            <div 
              ref={chatBodyRef}
              className="h-96 overflow-y-auto p-4 space-y-4 bg-black"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-3/4 p-3 rounded-2xl ${
                    msg.isUser ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'
                  } shadow`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 bg-black">
              <div className="flex rounded-full bg-gray-800 shadow-lg">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask a question"
                  className="flex-grow px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-3 text-white hover:text-blue-400 focus:outline-none"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default PortfolioChatWindow;