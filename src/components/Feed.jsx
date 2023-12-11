import React from "react";
import CarouselDefault from "./CarouselDefault";
import Button from "./Button";

import { ButtonGroup, Typography } from "@material-tailwind/react";

function Feed({children}) {
  console.log(children)
  const dob = new Date(Date.parse(children.dob)).toLocaleDateString()
  return (
    <>
        {/* Grid - 3 Columns */}
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-2 md:overflow-scroll md:max-h-[82vh]">
          {/* 1st Column (Span - 1)*/}
          <div className="md:px-4 md:col-span-2 lg:col-span-1">
            <div className="">
              <CarouselDefault />
            </div>
            <div className="md:mt-4 md:flex md:gap-4">
              <div className="md:h-12 md:w-full">
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </Button>
              </div>
              <div className="md:h-12 md:w-full">
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </Button>
              </div>
              <div className="md:h-12 md:w-full">
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* 2nd Column (Span - 2)*/}
          <div className=" max-h-[82vh] md:col-span-2 mx-4 flex flex-col gap-6 dark:text-bg_light text-bg_dark lg:overflow-scroll">
            {/* Name, Location & Horoscope */}
            <div className="flex flex-col gap-0">
              <p class="text-4xl mt-6 font-semibold text-black/80 dark:text-bg_light">
                Stephen Costa
              </p>
              <p class="text-lg font-light text-black/70 dark:text-bg_light/70">
                {children.city},{children.state}
              </p>
              <p class="text-lg text-black/70 dark:text-bg_light/70">
                {dob}
              </p>
            </div>

            {/* Short Cards */}
            <div className="grid lg:grid-cols-4 lg:gap-4 md:gap-1 md:grid-cols-2  ">
              <div className="flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
                <p className="text-xs dark:text-bg_light/60">Age</p>
                <h2 className="text-2xl">{children.age}</h2>
              </div>
              <div className="flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
                <p className="text-xs dark:text-bg_light/60">Height</p>
                <h2 className="text-2xl">{children.height}</h2>
              </div>
              <div className="col-span-2 flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
                <p className="text-xs dark:text-bg_light/60">Caste</p>
                <h2 className="text-2xl">{children.community} - {children.religion}</h2>
              </div>
              <div className="col-span-2 flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
                <p className="text-xs dark:text-bg_light/60">Maritial Status</p>
                <h2 className="text-2xl">{children.marital_status}</h2>
              </div>
              <div className="col-span-2 flex flex-col rounded-xl p-4 gap-2 bg-button_light/40 dark:bg-button_dark/40">
                <p className="text-xs dark:text-bg_light/60">Mother Tongue</p>
                <h2 className="text-2xl">{children.mother_tongue.join(", ")}</h2>
              </div>
            </div>

            {/* Description */}
            <div className="">
              <Typography variant="h5">Description</Typography>
              <Typography variant="small" className="mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque ducimus non architecto deserunt esse, dicta odit
                provident. Soluta nemo repellat magni molestiae dolorum
                corporis, quas aspernatur velit magnam reiciendis vero. Quae
                inventore quam eius autem. Officiis ad et modi eos aliquid
                facilis corporis, assumenda quos voluptas.
              </Typography>
            </div>

            {/* Detailed Cards */}
            <div className="grid lg:grid-cols-2 gap-4 auto-rows-auto">
              {/* Lifestyle */}
              <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
                <svg
                  fill="none"
                  width="50px"
                  height="50px"
                  viewBox="0 -3.84 122.88 122.88"
                  version="1.1"
                  className="fill-button_light dark:fill-bg_light/10"
                >
                  <g>
                    <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <p className="text-xs dark:text-bg_light/60">Diet</p>
                  <Typography variant="h5" className="md:text-base lg:text-xl">
                    {children.diet}
                  </Typography>
                </div>
              </div>

              {/* Education*/}
              <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
                <svg
                  fill="none"
                  width="50px"
                  height="50px"
                  viewBox="0 0 14 14"
                  className=" fill-button_light dark:fill-bg_light/10"
                >
                  <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
                </svg>
                <div className="flex flex-col justify-between">
                  <p className="text-xs dark:text-bg_light/60">Education</p>
                  <Typography variant="h5">{children.qualification}</Typography>
                  <Typography variant="h5">{children.profession}</Typography>
                </div>
              </div>
              {/* Background */}
              <div className="flex gap-4 bg-button_light/20 dark:bg-button_dark/30 p-4 rounded-xl">
                <svg
                  fill="none"
                  height="50px"
                  width="50px"
                  viewBox="0 0 472.615 472.615"
                  version="1.1"
                  className=" fill-button_light dark:fill-bg_light/10"
                >
                  <path
                    d="M413.538,335.557V256H246.154v-59.569c49.723-5.021,88.615-47.065,88.615-97.969C334.769,44.111,290.56,0,236.308,0
			s-98.462,44.111-98.462,98.462c0,50.905,38.892,92.949,88.615,97.969V256H59.077v79.557C25.698,340.282,0,369.034,0,403.692
			c0,38.006,30.917,68.923,68.923,68.923c38.006,0,68.923-30.917,68.923-68.923c0-34.659-25.698-63.41-59.077-68.135v-59.865
			h147.692v59.865c-33.378,4.725-59.077,33.477-59.077,68.135c0,38.006,30.917,68.923,68.923,68.923s68.923-30.917,68.923-68.923
			c0-34.659-25.698-63.41-59.077-68.135v-59.865h147.692v59.865c-33.378,4.725-59.077,33.477-59.077,68.135
			c0,38.006,30.917,68.923,68.923,68.923s68.923-30.917,68.923-68.923C472.615,369.034,446.917,340.282,413.538,335.557z"
                  />
                </svg>
                <div className="flex flex-col justify-between">
                  <p className="text-xs dark:text-bg_light/60">Background</p>
                  <Typography variant="h5">{children.community}, {children.religion}</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Feed;
