import React, { useState } from "react";
import Header from "../components/Header";
import { List, Typography, Input } from "@material-tailwind/react";
import ListingItem from "../components/ListingItem";
import Form from "../components/Forms/Form";
import { FormProvider } from "../context/FormContext";

function Register() {
  const [isSelected, setIsSelected] = useState(false);
  const [currentStep, setCurrentStep] = useState(3);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  // const handleSwitch = (e) => {
  //   e.preventDefault();
  //   console.log(currentStep);
  //   setCurrentStep((prev) => prev + 1);
  // };

  // const handleChange = () => {};

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
        <Header />
        <div className="grid grid-cols-12 h-screen mb-10 gap-3">
          <div className="lg:col-span-2 md:col-span-3 rounded-xl bg-card_light dark:bg-card_dark pt-8 col-span-0">
            <div className="">
              {/* Left Listing */}
              <List className="text-black min-w-full">
                <ListingItem
                  selected={isSelected}
                  completed={true}
                  onClick={handleClick}
                >
                  Personal
                </ListingItem>
                <ListingItem
                  selected={isSelected}
                  completed={true}
                  onClick={handleClick}
                >
                  Family Background
                </ListingItem>
                <ListingItem
                  selected={true}
                  completed={false}
                  onClick={handleClick}
                >
                  Qualification
                </ListingItem>
                <ListingItem
                  selected={false}
                  completed={false}
                  onClick={handleClick}
                >
                  LifeStyle
                </ListingItem>
                <ListingItem
                  selected={false}
                  completed={false}
                  onClick={handleClick}
                >
                  Partner's Detail
                </ListingItem>
                <ListingItem
                  selected={false}
                  completed={false}
                  onClick={handleClick}
                >
                  Partner's Family
                </ListingItem>
                <ListingItem
                  selected={false}
                  completed={false}
                  onClick={handleClick}
                >
                  Partner's Qualification
                </ListingItem>
              </List>
            </div>
          </div>

          {/* Right Body */}
          <div className="rounded-xl bg-card_light dark:bg-card_dark col-span-12 lg:col-span-10 md:col-span-9 p-10">
            <form className="pt-1 flex flex-col gap-4 justify-between h-full">
              <div className="flex w-full overflow-hidden h-full">
                <FormProvider>
                  <Form />
                </FormProvider>
              </div>

              {/* <div className="flex gap-4 w-96 ">
                <Button onClick={(e) => handleSwitch(e)} type="button">BACK</Button>
                <Button onClick={(e) => handleSwitch(e)} type="button">NEXT</Button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
