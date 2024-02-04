import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"; // import utc plugin
import relativeTime from "dayjs/plugin/relativeTime";
import Message from "../components/Message";
// import LiveCounter from "../components/LiveCounter";
// import Script from "next/script";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [userName, setUserName] = useState(
    `user${Math.floor(Math.random() * 100000)}`
  );
  const chatbox = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    // Connect to the Socket.IO server
    socket.current = io('/chat');

    // Event listener for receiving chat messages
    socket.current.on('chatMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Event listener for receiving chat history
    socket.current.on('chatHistory', (chatHistory) => {
      setMessages(chatHistory);
    });

    // Cleanup when the component is unmounted
    return () => {
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chatbox.current) {
      chatbox.current.scrollTop = chatbox.current.scrollHeight;
    }
  }, [messages]);

  // extend dayjs with the plugins
  dayjs.extend(utc);
  dayjs.extend(relativeTime);

  useEffect(() => {
    if (localStorage.getItem("userName"))
      setUserName(localStorage.getItem("userName"));
    // fetchMsg();
    console.log(messages);
  }, []);

  const handleSubmit = () => {
    if (text.trim() !== '') {
      socket.current.emit('chatMessage', { message: text, sender: userName });
      setText('');
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    localStorage.setItem("userName", e.target.value);
  };;

  return (
    <div className="p-2 w-screen flex justify-start items-center h-screen flex-col space-y-4">
      {/* ... rest of your component ... */}
      <div
        className="w-full h-96 p-2 pt-4 rounded-xl ring-1 overflow-y-scroll flex flex-col justify-center items-star bg-t"
        ref={chatbox}
      >
        {messages.length !== 0 ? (
          messages.map((message, index) => (
            <div className="my-2" key={index}>
              <Message
                text={message.message}
                time={dayjs.utc(message.timestamp).fromNow()}
                username={message.sender}
              />
            </div>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h1>Welcome To Chat App!</h1>
          </div>
        )}
      </div>
      {/* ... rest of your component ... */}
    </div>
  );
}

export default Chat;
