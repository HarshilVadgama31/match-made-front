import React from "react";
import { Typography } from "@material-tailwind/react";
import InputChip from "../InputChip";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import useFormContext from "../../hooks/useFormContext"

function PartnerFamilyDetails() {
  const { data, handleChange } = useFormContext();

  return (
    <>
      <div className="">
        <Typography variant="h4" color="blue-gray" className="dark:text-white">
          Partner's Family Background
        </Typography>
        <div className="my-4 flex flex-col w-full h-full">
          <div className="my-2 flex items-center gap-4">
            <div className="w-60">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium dark:text-white"
              >
                Religion
              </Typography>
              <InputChip
                name="P6PartnerReligion"
                id="P6PartnerReligion"
                list="religions"
                keyType="religion"
                value={data.P6PartnerReligion}
                onChange={handleChange}
              />
            </div>
            <div className="w-60">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium dark:text-white"
              >
                Community
              </Typography>
              <InputChip
                name="P6PartnerCommunity"
                id="P6PartnerCommunity"
                list="communities"
                keyType="community"
                value={data.P6PartnerCommunity}
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
                Family Type
              </Typography>
              <InputChip
                name="P6PartnerFamilyType"
                id="P6PartnerFamilyType"
                list="familyTypes"
                keyType="familyType"
                value={data.P6PartnerFamilyType}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerFamilyDetails;
