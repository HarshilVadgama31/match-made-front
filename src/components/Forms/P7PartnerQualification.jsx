import React from "react";
import { Typography } from "@material-tailwind/react";
import InputChip from "../InputChip";
import InputSearch from "../InputSearch/InputSearch";
import FormOptions from "../../FormOptions.json";
import useFormContext from "../../hooks/useFormContext"

function PartnerQualification() {
  const { data, handleChange } = useFormContext();

  return (
    <>
      <div className="">
        <Typography variant="h4" color="blue-gray" className="dark:text-white">
          Partner's Qualification & Profession
        </Typography>
        <div className="my-4 flex flex-col w-full h-full">
          <div className="my-2 flex items-center gap-4">
            <div className="w-60">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium dark:text-white"
              >
                Qualification Preference
              </Typography>
              <InputChip
                name="P7PartnerQualification"
                id="P7PartnerQualification"
                list="qualifications"
                keyType="qualification"
                value={data.P7PartnerQualification}
                onChange={handleChange}
              />
            </div>
            <div className="w-60">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 font-medium dark:text-white"
              >
                Partner's Profession
              </Typography>
              <InputChip
                name="P7PartnerProfession"
                id="P7PartnerProfession"
                list="professions"
                keyType="profession"
                value={data.P7PartnerProfession}
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
                Annual Income
              </Typography>
              <InputChip
                name="P7PartnerAnnualIncome"
                id="P7PartnerAnnualIncome"
                list="annualIncomes"
                keyType="annualIncome"
                value={data.P7PartnerAnnualIncome}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerQualification;
