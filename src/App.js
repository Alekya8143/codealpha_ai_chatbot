import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Intelligent response generator
  const getBotResponse = (message) => {
    const text = message.toLowerCase();

    if (text.includes("machine learning"))
      return "Machine Learning is a branch of AI that allows computers to learn patterns from data without explicit programming.";

    if (text.includes("artificial intelligence") || text.includes("ai"))
      return "Artificial Intelligence enables machines to simulate human intelligence like learning and decision making.";

    if (text.includes("global warming"))
      return "Global warming refers to the rise in Earth's temperature caused by greenhouse gases.";

    if (text.includes("rbi"))
      return "RBI stands for Reserve Bank of India, which regulates India's banking and financial system.";

    if (text.includes("react"))
      return "React is a JavaScript library used to build fast and interactive user interfaces.";

    if (text.includes("hello") || text.includes("hi"))
      return "Hello 👋! Ask me anything about technology or general topics.";

    if (text.includes("who are you"))
      return "I am an AI Chatbot developed using React for the CodeAlpha Internship.";

    if (text.includes("bye"))
      return "Goodbye 👋! Have a great day.";

    // default smart reply
    return "That's an interesting question! I'm continuously learning. Try asking about AI, React, technology, or general knowledge.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botReply = {
      text: getBotResponse(input),
      sender: "bot",
    };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="app">
      <h1>🤖 CodeAlpha AI Chatbot</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;