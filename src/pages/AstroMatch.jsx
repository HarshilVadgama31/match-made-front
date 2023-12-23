import React from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";

function PremiumPay() {
  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-12 h-screen mb-10">
          <div className="col-span-1 lg:pr-2 md:pr-1">
            <LeftBar activeAt={3} />
          </div>
          <div
            className={`h-full lg:col-span-7 hidden lg:grid lg:pr-2 md:pr-1`}
          >
            <div className="hidden md:flex md:flex-col md:h-full rounded-xl bg-card_light dark:bg-card_dark"></div>
          </div>
          <div
            className={`relative lg:col-span-4 md:col-span-11 col-span-12 md:mr-2 lg:mr-0 bg-card_light lg:rounded-tl-2xl lg:rounded-bl-2xl dark:bg-card_dark dark:text-bg_light`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default PremiumPay;
