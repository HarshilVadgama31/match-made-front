import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Feed from "../components/Feed";
import MatchMeter from "../components/MatchMeter";
import ProfileSettings from "../components/ProfileSettings";
import IconButton from "../components/IconButton";

function MatchFeed() {
  const [mvalue, setMvalue] = useState("col-span-2");
  const [fvalue, setFvalue] = useState("col-span-9");
  const [click, setClick] = useState(false);
  const [data, setData] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // const [prevIconDisabled, setprevIconDisabled] = useState(true);
  // const [nextIconDisabled, setNextIconDisabled] = useState(false);

  function handleNext() {
    if (data && currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  // function handleNext() {
  //   console.log(data.length);
  //   if (feedIndex < data.length - 1) {
  //     console.log(data);
  //     feedIndex += 1;
  //     if (feedIndex == data.length - 1) {
  //       setNextIconDisabled(true);
  //     }
  //     setprevIconDisabled(false);
  //   }
  // }

  // function handlePrev() {
  //   if (feedIndex > 0) {
  //     console.log(feedIndex);
  //     feedIndex -= 1;
  //     console.log(feedIndex);
  //     if (feedIndex == 0) {
  //       console.log(feedIndex);
  //       setprevIconDisabled(true);
  //       setNextIconDisabled(false);
  //     }
  //     setNextIconDisabled(false);
  //   }
  // }

  // const fetchData = async () => {
  //   await fetch("http://192.168.1.3:3000/api/account/search/partner", {
  //     method: "POST",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json.data.documents);
  //       setData(json.data.documents);
  //       // localStorage.setItem("data", json.data.documents);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   // const items = JSON.parse(localStorage.getItem("data"));
  //   // if (data) {
  //   //   setData(data);
  //   // } else {
  //     fetchData();
  //   // }
  // }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.7:3000/api/account/search/partner",
        {
          method: "POST",
        }
      );
      const json = await response.json();

      setData(json.data.documents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (click) => {
    setClick(click);
    if (click) {
      setFvalue("col-span-7");
      setMvalue("col-span-4");
    } else {
      setFvalue("col-span-9");
      setMvalue("col-span-2");
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-12 h-screen mb-10">
          <div className="col-span-1 lg:pr-2 md:pr-1">
            <LeftBar activeAt={1}/>
          </div>
          {/* <div className="h-full col-span-11">
            <ProfileSettings/>
          </div> */}
          <div className={`h-full ${fvalue} lg:pr-2 md:pr-1`}>
            <div className="hidden md:flex md:flex-col md:h-full rounded-xl bg-card_light dark:bg-card_dark">
              <div className="md:h-12 flex justify-between items-center mx-6">
                <span>Personal Preferences</span>
                {data && (
                  <div className=" text-bg_dark dark:text-bg_light  mt-4">
                    <button
                      disabled={currentIndex === 0}
                      onClick={handlePrev}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <button
                      disabled={currentIndex === data.length - 1}
                      onClick={handleNext}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              {data && <Feed>{data[currentIndex]}</Feed>}
            </div>
          </div>
          <div
            className={`relative ${mvalue}`}
            onClick={() => handleClick(!click)}
          >
            <MatchMeter clicked={click} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchFeed;
