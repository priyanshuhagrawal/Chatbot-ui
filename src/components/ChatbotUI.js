import React, { useState } from "react";

const ChatbotUI = ({ customizations }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I am your Virtual Assistant. How can I help you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: "user", text: userInput }]);
      setUserInput("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: `2px solid ${customizations.borderColor || "#000"}`,
        borderRadius: `${customizations.borderRadius || 0}px`,
        fontFamily: customizations.font || "Arial",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
          borderTopLeftRadius: `${customizations.borderRadius || 0}px`,
          borderTopRightRadius: `${customizations.borderRadius || 0}px`,
        }}
      >
        {/* Title Text */}
        <div>
          <div
            style={{ fontSize: "20px", fontWeight: "700", lineHeight: "1.2" }}
          >
            Jinn Live
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.2",
              marginTop: "5px",
            }}
          >
            demo Chat
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        style={{
          flex: 1,
          padding: "10px 15px",
          overflowY: "auto",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                message.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "10px",
                borderRadius: "15px",
                backgroundColor:
                  message.sender === "user"
                    ? customizations.userBubbleBgColor || "#444"
                    : customizations.botBubbleBgColor || "#222",
                color: "#000",
                fontSize: "14px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* User Input */}
      <div
        style={{
          display: "flex",
          padding: "10px 15px",
          borderTop: "1px solid #ddd",
          backgroundColor: "#fff",
        }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #444",
            backgroundColor: "#fff",
            color: "#000",
            outline: "none",
            fontSize: "14px",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "10px 15px",
            marginLeft: "10px",
            borderRadius: "20px",
            backgroundColor: customizations.buttonIcon ? "#444" : "#4a90e2",
            color: "#fff",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {customizations.buttonIcon ? (
            <img
              src={customizations.buttonIcon}
              alt="Send"
              style={{ width: "20px", height: "20px" }}
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            "Send"
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatbotUI;
