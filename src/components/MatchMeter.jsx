import React from "react";
import MatchList from "./MatchList";
import MatchListItem from "./MatchListItem";

function MatchMeter({ clicked }) {
  return (
    <>
      <div className="hidden md:h-full md:grid md:grid-cols-1 md:w-full rounded-bl-xl rounded-tl-xl bg-card_light dark:bg-card_dark">
        <div className="justify-center flex flex-col gap-4 text-bg_dark dark:text-bg_light items-center">
          <p className="">Match Meter</p>
          <p className=" text-5xl font-semibold">86%</p>

          {!clicked ? (
            <div className="relative mt-4 h-[60vh] w-20 bg-bg_light rounded-xl border-2 border-bg_light dark:border-bg_light mx-auto">
              <div className="absolute bottom-0 z-10 bg-button_light dark:bg-button_dark h-[86%] w-[76px] rounded-lg"></div>
            </div>
          ) : (
            <MatchList>
              <MatchListItem title="Age" description="35"/>
              <MatchListItem title="Age" description="35"/>
              <MatchListItem title="Age" description="35" tick={false}/>
              <MatchListItem title="Age" description="35"/>
              <MatchListItem title="Age" description="35" tick={false}/>
              <MatchListItem title="Age" description="35"/>
              <MatchListItem title="Age" description="35" tick={false}/>
            </MatchList>
          )}
        </div>
      </div>
    </>
  );
}

export default MatchMeter;
