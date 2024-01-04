import React from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Button from "../components/Button";

import {
  Typography,
  Chip,
  Checkbox,
  Textarea,
  IconButton,
} from "@material-tailwind/react";

import Message from "../components/Message";
import MessageDateChip from "../components/MessageDateChip";
import axios from "axios";
import Conversation from "../components/Conversation";

function Chat() {

  const [conversationId, setConversationId] = useState();
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");

  // MAKE STATICS VALUES - DYNAMIC
  const _senderId = "6571f16ba15ead32cc0a5907";
  const _receiverId = "6572343b20e0ba4957caf1fa";
  const socket = io("http://localhost:3000");

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await fetch("http://localhost:3000/message/get-messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatId: conversationId }),
        });

        const json = await response.json();
        console.log(json);
        setConversation(json.message);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
    
  }, [conversationId]);

  useEffect(() => {
    setConversationId("6572e52ade9c5c60389b7147");
    socket.on("connection", (res) => {
      console.log("Connection ID" + res.id);
    });
      
    socket.emit("get-id",{ senderId:_senderId, receiverId:_receiverId});
    
    // Convesation ID
    socket.on("connection-id", (converse) => {
      console.log("User conversation ID: " + converse.id);
      console.log("Result: "+converse.result); 
      // setConversationId(converse.result);
      setConversationId("6572e52ade9c5c60389b7147");
    });
      
    socket.on("message", (newMessage) => {
      console.log("User Message: " + message);
      setConversation((preMessages) => [...preMessages, newMessage]);
    });
    
    socket.on("reconnect_error", (error) => {
      socket.disconnect();
    });

    socket.on("connect_error", (error) => {
      console.log(error);
      socket.disconnect();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // EMIT MESSAGE TO BACKEND
    socket.emit("message", {
      chatId: conversationId,
      senderid: "6572343b20e0ba4957caf1fa",
      texts: message,
    });

    setMessage((prevMessage) => [
      ...prevMessage,
      {
        chatId: conversationId,
        senderId: "6572343b20e0ba4957caf1fa",
        text: message,
      },
    ]);

    setConversation((prevConversation) => [
      ...prevConversation,
      {
        chatId: conversationId,
        senderId: "6572343b20e0ba4957caf1fa",
        text: message,
      },
    ]);

    setMessage("");z
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-12 h-full mb-10 gap-2">
          <div className="col-span-1 h-[88vh]">
            <LeftBar />
          </div>

          {/* Chat Section &  dynamic hidden */}
          <div
            className={`md:h-[88vh] lg:col-span-8 hidden lg:grid  text-bg_dark`}
          >
            <div className="hidden md:flex md:flex-col md:h-[88vh] rounded-xl bg-card_light dark:bg-card_dark">
              {/* Chat Header */}
              <div className="w-full bg-button_light rounded-tr-2xl rounded-tl-2xl">
                <div className="w-full rounded-tl-2xl rounded-tr-2xl bg-button_light dark:bg-button_dark dark:text-white flex">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt="card-image"
                    className="w-20 h-20 object-cover object-top rounded-full p-2"
                  />
                  <div className="w-full flex justify-between mx-3">
                    <div className="flex flex-col justify-center">
                      <span className="text-xl font-semibold">George Chat</span>
                      <span className="text-xs text-black/50 dark:text-white/50">
                        🟢online
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4 pr-4">
                      <IconButton
                        variant="text"
                        className="rounded-full dark:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </IconButton>

                      <IconButton
                        variant="text"
                        className="rounded-full dark:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.25}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-auto p-8 h-[88vh] overflow-y-scroll">
                <div className="flex flex-col gap-3">
                  {/* Date Tags */}

                  <MessageDateChip>Became friends on 02 Nov</MessageDateChip>
                  {/* Other Side Message */}
                  {/* <Message our={false} />
                  <Message our={false} />
                  <Message our={false} /> */}

                  {/* Date Tags */}
                  <div className="flex justify-center">
                    <Chip
                      id="date"
                      value="25 Nov"
                      className="rounded-full w-min bg-button_light/40 text-black/70 dark:bg-button_dark/50 dark:text-white/70"
                    />
                  </div>
                  {/* Our Side Message */}
                  <Message our={false}>
                    Hello there!Hello there! Hello there! Hello there! Hello
                    there! Hello there! Hello there! ♦
                  </Message>
                  {conversation?.map((content) => {
                    return (
                      <Message
                        id={content.texts}
                        our={content.senderId == "6572343b20e0ba4957caf1fa"}
                      >
                        {content.text}
                      </Message>
                    );
                  })}
                </div>
              </div>

              {/* Chat Footer | INPUT Mesage*/}
              <div className="rounded-b-xl p-2">
                <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 dark:border-bg_light/70 dark:bg-bg_light/10  p-2">
                  <div className="flex">
                    <IconButton
                      variant="text"
                      className="rounded-full dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-7 w-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    </IconButton>
                  </div>
                  <Textarea
                    rows={1}
                    resize={false}
                    className="min-h-full !border-0 focus:border-transparent dark:text-white text-xl"
                    containerProps={{
                      className: "grid h-full",
                    }}
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                  <div>
                    <IconButton
                      variant="text"
                      className="rounded-full  dark:text-white"
                      onClick={sendMessage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-7 w-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Option Section */}
          <div
            className={`relative h-[88vh] lg:col-span-3 md:col-span-11 col-span-12  bg-card_light lg:rounded-tl-2xl lg:rounded-bl-2xl text-bg_dark dark:bg-card_dark dark:text-bg_light`}
          >
            <Typography variant="h4" className="mt-8 ml-8">
              Chats
            </Typography>

            {/* Chat List */}
            <div className="mt-8">
              <ul className="flex flex-col mx-6">
                {/* {conversation.map((c) => (
                  <Conversation/>
                ))} */}
                <Conversation />
                <Conversation />
                {/* <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2 shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <div>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-1"
                        >
                          Stephen Costa
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className=" font-extralight"
                        >
                          Like so many organizations these days
                        </Typography>
                      </div>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li>
                <li className="h-24">
                  <Card className="w-full max-w-[48rem] flex-row h-20 items-center gap-2  shadow-none">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 w-3/12  shrink-0 rounded-r-none"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt="card-image"
                        className="w-20 object-cover object-top h-20"
                      />
                    </CardHeader>
                    <CardBody className="px-0 pt-2 pb-0 overflow-hidden truncate">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-1"
                      >
                        Stephen Costa
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className=" font-extralight"
                      >
                        Like so many organizations these days
                      </Typography>
                    </CardBody>
                    <div className="h-6 w-8 mx-4 rounded-full flex justify-center items-center bg-button_light">
                      <p className="text-xs font-semibold">2</p>
                    </div>
                  </Card>
                </li> */}
              </ul>
            </div>

            {/* Request List */}
            <div className="absolute bottom-4 left-4 right-4 h-12">
              <Button>Request List</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
