import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Car as CarIcon } from 'lucide-react';
import Button from './Button';
import { ChatMessage, CarRecommendation } from '../types';
import { generateResponse } from '../utils/chatbot';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI assistant. How can I help you find the perfect car for your rental needs?",
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const aiResponse = await generateResponse(inputValue);
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Math.random().toString(),
        text: "I apologize, but I'm having trouble processing your request. Please try again.",
        isUser: false,
        timestamp: new Date(),
        type: 'error'
      }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessage = (message: ChatMessage) => {
    switch (message.type) {
      case 'carRecommendation':
        return (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">{message.text}</p>
            {message.data && (
              <div className="space-y-2 mt-3">
                {(message.data as CarRecommendation[]).map((rec) => (
                  <div
                    key={rec.car.id}
                    className="rounded-xl overflow-hidden"
                    style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}
                  >
                    <div className="flex items-center gap-3 p-3">
                      <img
                        src={rec.car.image}
                        alt={rec.car.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold truncate" style={{ color: 'var(--color-text-primary)' }}>{rec.car.name}</h4>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-accent)' }}>${rec.car.price}/day</p>
                        <ul className="mt-1.5 space-y-0.5">
                          {rec.reasoning.slice(0, 2).map((reason, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                              <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--color-accent)' }} />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'error':
        return <p className="text-sm" style={{ color: '#f87171' }}>{message.text}</p>;

      default:
        return <p className="text-sm leading-relaxed">{message.text}</p>;
    }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 z-40 hover:scale-105 active:scale-95"
        style={{ background: isOpen ? 'var(--color-surface-2)' : 'var(--color-accent)', border: '1px solid var(--color-border)' }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen
          ? <X size={18} style={{ color: 'var(--color-text-secondary)' }} />
          : <MessageCircle size={18} color="#0D1117" />
        }
      </button>

      <div
        className="fixed bottom-22 right-6 w-full sm:w-96 rounded-2xl z-40 overflow-hidden transition-all duration-400"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
          bottom: '4.5rem',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transformOrigin: 'bottom right',
          transition: 'opacity 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="flex items-center justify-between p-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-accent)' }}>
              <CarIcon size={14} color="#0D1117" />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200"
            style={{ color: 'var(--color-text-muted)', background: 'var(--color-surface-2)' }}
          >
            <X size={14} />
          </button>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-luxury" style={{ background: 'var(--color-surface-2)' }}>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[85%]">
                <div
                  className="px-3.5 py-2.5 rounded-2xl"
                  style={message.isUser
                    ? { background: 'var(--color-accent)', color: '#0D1117', borderBottomRightRadius: '6px' }
                    : { background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)', borderBottomLeftRadius: '6px' }
                  }
                >
                  {renderMessage(message)}
                </div>
                <p className="text-xs mt-1 px-1" style={{ color: 'var(--color-text-muted)', textAlign: message.isUser ? 'right' : 'left' }}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="px-3.5 py-3 rounded-2xl rounded-bl-md" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="typing-indicator">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about car recommendations..."
              className="flex-1 px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-primary)',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            />
            <button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === '' || isTyping}
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'var(--color-accent)' }}
            >
              <Send size={14} color="#0D1117" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
