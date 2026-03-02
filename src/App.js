import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("hello")) return "Hello 👋 I'm your AI assistant!";
    if (msg.includes("react")) return "React makes UI development fast 🚀";
    if (msg.includes("ai")) return "AI helps machines think like humans 🤖";
    if (msg.includes("bye")) return "Goodbye! Have an amazing day 🌟";

    return "Interesting 🤔 Tell me more!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // typing animation
    setTyping(true);

    setTimeout(() => {
      const botReply = {
        text: getBotReply(input),
        sender: "bot",
      };

      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 1200);
  };

  // Enter key send
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="app">
      <h1>🤖 CodeAlpha AI Chatbot</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-row ${msg.sender}`}>
            <div className="avatar">
              {msg.sender === "bot" ? "🤖" : "👤"}
            </div>

            <div className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="chat-row bot">
            <div className="avatar">🤖</div>
            <div className="typing">AI is typing...</div>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;