// Import necessary dependencies
import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import Message from "../components/Message";

function Chat() {
  // State to manage messages, input text, and username
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [userName, setUserName] = useState(
    `user${Math.floor(Math.random() * 100000)}`
  );

  // Ref for chatbox and socket connection
  const chatbox = useRef(null);
  const socket = useRef(null);

  // UseEffect for establishing socket connection and event listeners
  useEffect(() => {
    // Connect to the Socket.IO server
    socket.current = io('/chat');

    // Event listener for receiving chat messages
    socket.current.on('chatMessage', (data) => {
      // Update messages state with the new message
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Event listener for receiving chat history
    socket.current.on('chatHistory', (chatHistory) => {
      // Update messages state with the chat history
      setMessages((prevMessages) => [...prevMessages, ...chatHistory]);
    });

    // Cleanup when the component is unmounted
    return () => {
      socket.current.disconnect();
    };
  }, []);

  // UseEffect to scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatbox.current) {
      chatbox.current.scrollTop = chatbox.current.scrollHeight;
    }
  }, [messages]);

  // UseEffect to set the username from local storage on component mount
  useEffect(() => {
    if (localStorage.getItem("userName")) {
      setUserName(localStorage.getItem("userName"));
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (text.trim() !== '') {
      // Emit chat message to the server
      socket.current.emit('chatMessage', { message: text, sender: userName });
      setText(''); // Clear the input field
    }
  };

  // Function to handle username change
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    localStorage.setItem("userName", e.target.value);
  };

  return (
    <div className="p-2 w-screen flex justify-start items-center h-screen flex-col space-y-4">
      {/* Chatbox container */}
      <div
        className="w-full h-96 p-2 pt-4 rounded-xl ring-1 overflow-y-scroll flex flex-col justify-center items-start bg-t"
        ref={chatbox}
      >
        {/* Render messages */}
        {messages.length !== 0 ? (
          messages.map((message, index) => (
            <div className="my-2" key={index}>
              {/* Message component with unique key */}
              <Message
                key={index}
                text={message.message}
                time={dayjs.utc(message.timestamp).fromNow()}
                username={message.sender}
              />
            </div>
          ))
        ) : (
          // Display a welcome message if no messages are available
          <div className="w-full h-full flex justify-center items-center">
            <h1>Welcome To Chat App!</h1>
          </div>
        )}
      </div>

      {/* Input form for sending messages */}
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
