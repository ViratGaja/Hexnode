import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [messages, setMessages] = useState([]);
  const [newsItems, setNewsItems] = useState([
    { id: 1, title: 'Welcome to Our Service', content: 'Check out our latest updates!' },
    { id: 2, title: 'New Features Released', content: 'We\'ve added some exciting new features.' }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="home-section">
            <h4>Welcome!</h4>
            <p>How can we assist you today?</p>
          </div>
        );
      case 'messages':
        return (
          <div className="messages-section">
            {messages.length === 0 ? (
              <p>No messages yet. Start a conversation!</p>
            ) : (
              messages.map(msg => (
                <div key={msg.id} className="message">
                  <p>{msg.text}</p>
                  <small>{msg.timestamp.toLocaleTimeString()}</small>
                </div>
              ))
            )}
          </div>
        );
      case 'news':
        return (
          <div className="news-section">
            {newsItems.map(item => (
              <div key={item.id} className="news-item">
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isExpanded ? (
        <div className="chatbot-expanded">
          <div className="chatbot-header">
            <h3>Good Day!</h3>
            <p>How can we help?</p>
            <button
              className="chatbot-close"
              onClick={() => setIsExpanded(false)}
            >
              ✕
            </button>
          </div>
          <div className="chatbot-content">
            {renderContent()}
          </div>
          <div className="chatbot-body">
            <div className="message-input">
              <input
                type="text"
                placeholder="Send us a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend}>Send</button>
            </div>
            <div className="chatbot-nav">
              <div
                className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setActiveSection('home')}
              >
                <i className="home-icon">🏠</i>
                <span>Home</span>
              </div>
              <div
                className={`nav-item ${activeSection === 'messages' ? 'active' : ''}`}
                onClick={() => setActiveSection('messages')}
              >
                <div className="message-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#007bff">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </div>
                <span>Messages</span>
              </div>
              <div
                className={`nav-item ${activeSection === 'news' ? 'active' : ''}`}
                onClick={() => setActiveSection('news')}
              >
                <i className="news-icon">📰</i>
                <span>News</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="chatbot-minimized"
          onClick={() => setIsExpanded(true)}
        >
          💬
        </button>
      )}
    </div>
  );
}

export default Chatbot;