import React from "react";
import { Typography } from "@material-tailwind/react";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import InputChip from "../InputChip";
import useFormContext from "../../hooks/useFormContext"

function Others() {
  const { data, handleChange } = useFormContext();

  return (
    <div className="">
      <Typography variant="h4" color="blue-gray" className="dark:text-white">
        Other Details
      </Typography>
      <div className="my-4 flex flex-col w-full h-full">
        <div className="my-2 flex items-center gap-4">
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Marital Status
            </Typography>
            <InputSearch
              name="P4MaritialStatus"
              id="P4MaritialStatus"
              placeholder="Eg. Never"
              list={FormOptions.maritialStatuses}
              keyType="maritialStatus"
              value={data.P4MaritialStatus}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-2 flex items-center gap-4">
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Diet
            </Typography>
            <InputSearch
              name="P4Diet"
              id="P4Diet"
              placeholder="Eg. Vegetarian"
              list={FormOptions.diets}
              keyType="diet"
              value={data.P4Diet}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-2 flex items-center gap-4">
          <div className="w-60">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium dark:text-white"
            >
              Hobby
            </Typography>
            <InputChip
              name="P4Hobby"
              id="P4Hobby"
              list="hobbies"
              keyType="hobby"
              value={data.P4Hobby}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Others;
