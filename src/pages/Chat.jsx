import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Feed from "../components/Feed";
import Button from "../components/Button";
import MatchMeter from "../components/MatchMeter";
import {
  Typography,
  Chip,
  Checkbox,
  Textarea,
  IconButton,
} from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import Message from "../components/Message";
import MessageDateChip from "../components/MessageDateChip";
import axios from "axios";
import Conversation from "../components/Conversation";

function Chat() {
  const [conversation, setConversation] = useState([]);

  const userId = "65661c786bd9afa3c606938d";

  useEffect(() => {
    const getConversations = async () => {
      try {
        // await fetch("http://localhost:3000/chat/65661c786bd9afa3c606938d")
        //   .then((response) => response.json())
        //   .then((json) => console.log(json));
        const res = await axios.get(
          "http://localhost:3000/chat/65661c786bd9afa3c606938d"
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [userId]);

  //   console.log(object);

  const customTheme = {
    tabsHeader: {
      defaultProps: {
        className: "",
      },
      styles: {
        base: {
          bg: "bg-bg_light dark:bg-bg_dark",
          bgOpacity: "bg-opacity-100",
        },
      },
    },
    tab: {
      defaultProps: {
        className: "",
        activeClassName: "",
        disabled: false,
      },
      styles: {
        base: {
          tab: {
            initial: {
              display: "flex",
              alignItems: "items-center",
              justifyContent: "justify-center",
              textAlign: "text-center",
              width: "w-full",
              height: "h-full",
              position: "relative",
              bg: "bg-transparent",
              py: "py-1",
              px: "px-2",
              color: "text-bg_dark dark:text-bg_light",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-xl",
              fontWeight: "font-normal",
              lineHeight: "leading-relaxed",
              userSelect: "select-none",
              cursor: "cursor-pointer",
            },
            disabled: {
              opacity: "opacity-50",
              cursor: "cursor-not-allowed",
              pointerEvents: "pointer-events-none",
              userSelect: "select-none",
            },
          },
          indicator: {
            position: "absolute",
            inset: "inset-0",
            zIndex: "z-10",
            height: "h-full",
            bg: "bg-button_light dark:bg-card_dark",
            borderRadius: "rounded-md",
            boxShadow: "shadow",
          },
        },
      },
    },
  };
  //   const data = null;
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const [favouriteButton, unsetFavouriteButton] = useState("fill-red-400");
  const [favouriteButtonOutline, unsetFavouriteButtonOutline] = useState("");

  function handlefavourite() {
    unsetFavouriteButton("fill-none");
    unsetFavouriteButtonOutline("currentColor");
  }

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-12 h-screen mb-10">
          <div className="col-span-1 lg:pr-2 md:pr-1 ">
            <LeftBar />
          </div>

          {/* Chat Section &  dynamic hidden */}
          <div
            className={`h-full lg:col-span-8 hidden lg:grid lg:pr-2 md:pr-1`}
          >
            <div className="hidden md:flex md:flex-col md:h-full rounded-xl bg-card_light dark:bg-card_dark">
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
              <div className="flex-auto p-8 h-[70vh] overflow-y-scroll">
                <div className="flex flex-col gap-3">
                  {/* Date Tags */}
                  <MessageDateChip>Became friends on 02 Nov</MessageDateChip>
                  {/* Other Side Message */}
                  <Message our={false} />
                  <Message our={false} />
                  <Message our={false} />

                  {/* Date Tags */}
                  <div className="flex justify-center">
                    <Chip
                      value="25 Nov"
                      className="rounded-full w-min bg-button_light/40 text-black/70 dark:bg-button_dark/50 dark:text-white/70"
                    />
                  </div>
                  {/* Our Side Message */}
                  <Message our={false}>
                    Hello there!Hello there! Hello there! Hello there! Hello
                    there! Hello there! Hello there! ♦
                  </Message>
                  <Message our={true} />
                  <Message our={true} />
                  <Message our={true} />
                  <Message our={true}>
                    Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeyyyyyyyy!!!
                  </Message>
                  <Message our={true} />
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
                  />
                  <div>
                    <IconButton
                      variant="text"
                      className="rounded-full  dark:text-white"
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
            className={`relative lg:col-span-3 md:col-span-11 col-span-12 rounded-2xl md:mr-2 lg:mr-0 bg-card_light lg:rounded-tl-2xl lg:rounded-bl-2xl dark:bg-card_dark dark:text-bg_light`}
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
