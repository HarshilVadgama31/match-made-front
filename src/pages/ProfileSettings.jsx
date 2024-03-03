import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import { Link } from "react-router-dom";
import Form from "../components/Forms/Form";
import {
  Typography,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Alert,
} from "@material-tailwind/react";
import InputField from "../components/InputField";
import InputChip from "../components/InputChip";
import InputSearch from "../components/InputSearch/InputSearch";
import FormOptions from "../FormOptions.json";
import BuyPlanDialog from "../components/BuyPlanDialog";
import { useCookies } from "react-cookie";
import useFormContext from "../hooks/useFormContext";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfileSettings() {
  const {
    setPage,
    data,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
    handleChange,
  } = useFormContext();

  const [userData, setUserData] = useState({
    phone: "",
    gender: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    height: "",
    weight: "",
    dob: "",
    pob: "",
    horoscope: "",
    city: "",
    state: "",
    religion: "",
    community: "",
    motherTongue: "",
    familyType: "",
    familyCity: "",
    qualification: "",
    university: "",
    profession: "",
    organization: "",
    annualIncome: "",
    maritialStatus: "",
    diet: "",
    hobby: "",
  });

  const navigate = useNavigate();

  const handleDiscard = () => {
    navigate("/matchfeed");
  };

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const data2 = new FormData(data);

  //   // try {
  //   data.userId = "6572343b20e0ba4957caf1fa";
  //   const res = await fetch("http://localhost:3000/user/update", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });

  //   console.log(await res.json());

  //   // .post("http://192.168.56.1:3000/user/create", data)
  //   // .then((response) => {
  //   //   console.log(response);
  //   // })
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // });
  //   //   console.log(res);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  //   // console.log(JSON.stringify(data));

  //   // console.log(data);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    // const data2 = new FormData(data);

    // try {

    // data.userId = "6572343b20e0ba4957caf1fa";
    const formData = new FormData();

    // formData.append("P8ProfilePicture", data.P8ProfilePicture);
    // data.P8ProfilePicture = null;
    formData.append("OtherData", JSON.stringify(data));

    const result = await axios.post(
      "http://localhost:3000/user/update",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    console.log(result.data);

    if (result.data.message.modifiedCount >= 1) {
      localStorage.setItem("horoscope", result.data.user.horoscope);
      navigate("/matchfeed");
    } else {
      setOpenAlert(!openAlert);
    }

    // const res = await fetch("http://localhost:3000/user/update", {
    //   method: "POST",
    //   headers: { "Content-Type": "multipart/form-data" },
    //   body: JSON.stringify(data),
    // });

    // console.log(await user.json());

    // .post("http://192.168.56.1:3000/user/create", data)
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(JSON.stringify(data));

    // console.log(data);
  };

  const [alertOpen, setAlertOpen] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
  // const [userData, setUserData] = useState(null);

  const loadData = async () => {
    // console.log();

    try {
      const result = await axios.post("http://localhost:3000/user/find", "", {
        headers: {
          Cookie: "token=" + cookies.token,
        },
        withCredentials: true,
      });
      console.log(result.data.message);
      console.log(data);
      
      setUserData(result.data.message);
      // setDetails(result.data.message[0]);
      // console.log(details)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const [profilePic, setProfilePic] = useState();

  const handlePreview = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
    // handleChange(e);
    setAlertOpen(true);
  };

  return (
    <>
      <div className="flex flex-col md:h-screen h-full w-full bg-bg_light dark:bg-bg_dark">
        <Header />

        <div className="md:grid md:grid-cols-12 md:h-full md:gap-2 flex flex-col-reverse h-full gap-2 mb-12">
          <div className="md:col-span-1 md:h-[88vh] md:block">
            <LeftBar activeAt={3} />
          </div>
          <div
            className={`lg:col-span-7 md:col-span-6 md:grid md:h-[88vh] h-full rounded-xl bg-card_light dark:bg-card_dark overflow-y-scroll`}
          >
            {/* <div className="hidden lg:h-full md:flex md:flex-col md:h-full rounded-xl bg-card_light dark:bg-card_dark overflow-y-scroll"> */}
            <form className="flex flex-col gap-4 justify-between h-full m-10">
              <div className="flex w-full overflow-hidden h-full">
                <div className="flex-col w-full">
                  {/* P1 */}
                  <div className="min-w-full">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        Personal Details
                      </Typography>
                    </div>
                    <div className="my-4 flex flex-col md:w-4/6 lg:w-auto h-full">
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            First Name
                          </Typography>
                          <InputField
                            name="P1FirstName"
                            id="P1FirstName"
                            value={userData?.firstName}
                            type="text"
                            placeholder="Ramesh"
                            required={true}
                            //value={data?.P1FirstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Last Name
                          </Typography>
                          <InputField
                            name="P1LastName"
                            id="P1LastName"
                            value={userData?.lastName}
                            type="text"
                            placeholder="Doe"
                            required={true}
                            //value={data?.P1LastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Age
                          </Typography>
                          <InputField
                            name="P1Age"
                            id="P1Age"
                            value={userData?.age}
                            type="number"
                            placeholder="21"
                            min="0"
                            required={true}
                            //value={data?.P1Age}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Height
                          </Typography>
                          <InputField
                            name="P1Height"
                            id="P1Height"
                            value={userData?.height}
                            type="text"
                            placeholder="5.2"
                            required={true}
                            //value={data?.P1Height}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Weight
                          </Typography>
                          <InputField
                            name="P1Weight"
                            id="P1Weight"
                            value={userData?.weight}
                            type="text"
                            placeholder="56"
                            required={true}
                            //value={data?.P1Weight}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="md:w-60 w-full">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Date Of Birth
                          </Typography>
                          <InputField
                            name="P1Dob"
                            id="P1Dob"
                            value={userData?.dob}
                            type="date"
                            placeholder=""
                            required={true}
                            //value={data?.P1Dob}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Place Of Birth
                          </Typography>
                          <InputSearch
                            name="P1Pob"
                            type="text"
                            id="P1Pob"
                            value={userData?.pob}
                            list={FormOptions.cities}
                            keyType="city"
                            //value={data?.P1Pob}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            City
                          </Typography>
                          <InputSearch
                            name="P1City"
                            id="P1City"
                            value={userData?.city}
                            list={FormOptions.cities}
                            keyType="city"
                            //value={data?.P1City}
                            required={true}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            State
                          </Typography>
                          <InputSearch
                            name="P1State"
                            id="P1State"
                            value={userData?.state}
                            list={FormOptions.states}
                            keyType="state"
                            //value={data?.P1State}
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* P2 */}
                  <div className="">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        Family Background
                      </Typography>
                    </div>
                    <div className="my-4 flex flex-col md:w-4/6 lg:w-auto w-full h-full">
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Religion
                          </Typography>
                          <InputSearch
                            name="P2Religion"
                            id="P2Religion"
                            value={userData?.religion}
                            placeholder="Eg. Hindu"
                            list={FormOptions.religions}
                            keyType="religion"
                            //value={data?.P2Religion}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Community
                          </Typography>
                          <InputSearch
                            name="P2Community"
                            id="P2Community"
                            value={userData?.community}
                            placeholder="Eg. Agarwal"
                            list={FormOptions.communities}
                            keyType="community"
                            //value={data?.P2Community}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col md:flex-row md:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Mother Tongue
                          </Typography>
                          <InputSearch
                            name="P2MotherTongue"
                            id="P2MotherTongue"
                            value={userData?.motherTongue}
                            placeholder="Eg. Gujarati"
                            list={FormOptions.motherTongues}
                            keyType="motherTongue"
                            //value={data?.P2MotherTongue}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Family Type
                          </Typography>
                          <InputSearch
                            name="P2FamilyType"
                            id="P2FamilyType"
                            value={userData?.familyType}
                            placeholder="Eg. Joint"
                            list={FormOptions.familyTypes}
                            keyType="familyType"
                            //value={data?.P2FamilyType}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Family City
                          </Typography>
                          <InputSearch
                            name="P2FamilyCity"
                            id="P2FamilyCity"
                            value={userData?.city}
                            placeholder="Eg. Delhi"
                            list={FormOptions.cities}
                            keyType="city"
                            //value={data?.P2FamilyCity}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* P3 */}
                  <div className="">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        Personal Details Qualification & Profession
                      </Typography>
                    </div>
                    <div className="my-4 flex flex-col md:w-4/6 lg:w-auto w-full h-full">
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Qualification
                          </Typography>
                          <InputSearch
                            name="P3Qualification"
                            id="P3Qualification"
                            value={userData?.qualification}
                            placeholder="Eg. Bachelors"
                            list={FormOptions.qualifications}
                            keyType="qualification"
                            //value={data?.P3Qualification}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            University
                          </Typography>
                          <InputSearch
                            name="P3University"
                            id="P3University"
                            value={userData?.university}
                            placeholder="Eg. Nirma University"
                            list={FormOptions.universities}
                            keyType="university"
                            //value={data?.P3University}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Profession
                          </Typography>
                          <InputSearch
                            name="P3Profession"
                            id="P3Profession"
                            value={userData?.profession}
                            placeholder="Eg. Civil Services"
                            list={FormOptions.professions}
                            keyType="profession"
                            //value={data?.P3Profession}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Organization
                          </Typography>
                          <InputSearch
                            name="P3Organization"
                            id="P3Organization"
                            value={userData?.organization}
                            placeholder="Eg. Adani Group"
                            list={FormOptions.organizations}
                            keyType="organization"
                            //value={data?.P3Organization}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Annual Income
                          </Typography>
                          <InputSearch
                            name="P3AnnualIncome"
                            id="P3AnnualIncome"
                            value={userData?.annualIncome}
                            placeholder="Eg. 5 Lakhs"
                            list={FormOptions.annualIncomes}
                            keyType="annualIncome"
                            //value={data?.P3AnnualIncome}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* P4 */}
                  <div className="">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        Other Details
                      </Typography>
                    </div>
                    <div className="my-4 flex flex-col md:w-4/6 lg:w-auto w-full h-full">
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
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
                            value={userData?.maritialStatus}
                            placeholder="Eg. Never"
                            list={FormOptions.maritialStatuses}
                            keyType="maritialStatus"
                            //value={data?.P4MaritialStatus}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
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
                            value={userData?.diet}
                            placeholder="Eg. Vegetarian"
                            list={FormOptions.diets}
                            keyType="diet"
                            //value={data?.P4Diet}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
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
                            value={userData?.hobby}
                            list="hobbies"
                            keyType="hobby"
                            //value={data?.P4Hobby}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* P5 */}
                  <div className="">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        Partner Preference
                      </Typography>
                    </div>
                    <div className="my-4 flex flex-col md:w-4/6 lg:w-auto h-full">
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Age Range
                          </Typography>
                          <InputChip
                            name="P5AgeRange"
                            id="P5AgeRange"
                            value={userData?.ageRange}
                            list="ages"
                            keyType="age"
                            //value={data?.P5AgeRange}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="lg:w-60 w-full">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Maritial Preference
                          </Typography>
                          <InputChip
                            name="P5MaritialPreference"
                            id="P5MaritialPreference"
                            value={userData?.maritialPreference}
                            list="maritialStatuses"
                            keyType="maritialStatus"
                            //value={data?.P5MaritialPreference}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            Diet
                          </Typography>
                          <InputChip
                            name="P5PartnerDiet"
                            id="P5PartnerDiet"
                            value={userData?.partnerDiet}
                            list="diets"
                            keyType="diet"
                            //value={data?.P5PartnerDiet}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            City
                          </Typography>
                          <InputChip
                            name="P5PartnerCity"
                            id="P5PartnerCity"
                            value={userData?.partnerCity}
                            list="cities"
                            keyType="city"
                            //value={data?.P5PartnerCity}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="lg:w-60 w-full">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 font-medium dark:text-white"
                          >
                            State
                          </Typography>
                          <InputChip
                            name="P5PartnerState"
                            id="P5PartnerState"
                            value={userData?.partnerState}
                            list="states"
                            keyType="state"
                            //value={data?.P5PartnerState}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* P6 */}
                  <div className="">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        Partner's Family Background
                      </Typography>
                    </div>
                    <div className="my-4 flex flex-col md:w-4/6 lg:w-auto w-full h-full">
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
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
                            value={userData?.partnerReligion}
                            list="religions"
                            keyType="religion"
                            //value={data?.P6PartnerReligion}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="lg:w-60 w-full">
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
                            value={userData?.partnerCommunity}
                            list="communities"
                            keyType="community"
                            //value={data?.P6PartnerCommunity}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex items-center gap-4">
                        <div className="lg:w-60 w-full">
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
                            value={userData?.partnerFamilyType}
                            list="familyTypes"
                            keyType="familyType"
                            //value={data?.P6PartnerFamilyType}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* P7 */}
                  <div className="">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        Partner's Qualification and Profession
                      </Typography>
                    </div>
                    <div className="my-4 flex flex-col md:w-4/6 lg:w-auto w-full h-full">
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
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
                            value={userData?.partnerQualification}
                            list="qualifications"
                            keyType="qualification"
                            //value={data?.P7PartnerQualification}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="lg:w-60 w-full">
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
                            value={userData?.partnerProfession}
                            list="professions"
                            keyType="profession"
                            //value={data?.P7PartnerProfession}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="my-2 flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="lg:w-60 w-full">
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
                            value={userData?.partnerAnnualIncome}
                            list="annualIncomes"
                            keyType="annualIncome"
                            //value={data?.P7PartnerAnnualIncome}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* P8 */}
                  <div className="">
                    <div className="flex justify-between">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="dark:text-white"
                      >
                        About You
                      </Typography>
                      <span className="text-bg_dark/60 dark:text-bg_light/40 md:hidden">
                        8/8
                      </span>
                    </div>
                    <div className="my-4 flex flex-col w-auto h-full">
                      <div className=" lg:w-72">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2 font-medium dark:text-white"
                        >
                          Email
                        </Typography>
                        <InputField
                          name="P8ProfileEmail"
                          id="P8ProfileEmail"
                          value={userData?.profileEmail}
                          type="email"
                          placeholder="ramesh@gmail.com"
                          required={true}
                          //value={data?.P8ProfileEmail}
                          // onChange={handleChange}
                        />
                        <div className=" lg:w-[30rem]">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mt-4 mb-2 font-medium dark:text-white"
                          >
                            Description
                          </Typography>
                          <InputField
                            name="P8ProfileDescription"
                            id="P8ProfileDescription"
                            value={userData?.profileDescription}
                            type="textarea"
                            placeholder="I'm a morning person, who loves to do adventurous hikes & loves cooking..."
                            required={true}
                            //value={data?.P8ProfileDescription}
                            // onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer>
                    <div className="ml-1 flex gap-4">
                      {/* <button
                          type="button"
                          onClick={handlePrev}
                          disabled={disablePrev}
                          className={`flex p-2 rounded-xl w-full lg:w-1/6 border-solid border-2 text-bg_dark dark:text-bg_light  h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${prevHide}`}
                        >
                          Prev
                        </button> */}

                      <button
                        type="button"
                        onClick={handleDiscard}
                        disabled={disableNext}
                        className={`flex p-2 rounded-xl w-full lg:w-1/6 border-solid border-2 text-bg_dark dark:text-bg_light h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${nextHide}`}
                      >
                        Discard
                      </button>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className={`flex p-2 rounded-xl w-full lg:w-1/6 border-solid border-2 text-bg_dark dark:text-bg_light h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${submitHide}`}
                      >
                        Update
                      </button>
                    </div>
                  </footer>
                </div>
              </div>
            </form>
            {/* </div> */}
          </div>
          {/* Right Card */}
          <div
            className={`relative flex flex-col items-center rounded-xl md:h-[88vh] lg:col-span-4 md:col-span-5 bg-card_light md:rounded-tl-2xl md:rounded-bl-2xl dark:bg-card_dark dark:text-bg_light`}
          >
            <div className="w-[60%] h-[48vh] p-2">
              <img
                className="h-full w-full rounded-lg object-cover object-center mt-2"
                src={profilePic || `profile/jash.avif`}
                alt="nature image"
              />
            </div>
            {/* Upload Button */}
            <div className="items-center w-[55%] h-10 m-2">
              <label className="flex p-2 cursor-pointer rounded-xl border-solid border-2 text-bg_dark dark:text-bg_light w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark mt-2">
                upload
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .avif"
                  name="P8ProfilePicture"
                  id="P8ProfilePicture"
                  className="hidden"
                  onChange={handlePreview}
                />
              </label>
              <Alert
                open={alertOpen}
                onClose={() => setAlertOpen(false)}
                color="white"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 100 },
                }}
              >
                Updated successfully
                <Link to="/matchfeed" preventScrollReset={true}>
                  <span className="mx-4 py-1 px-4 bg-white/20 hover:bg-white/25 rounded-2xl">
                    Home
                  </span>
                </Link>
              </Alert>
              {/* <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div> */}
            </div>

            <Card className="mt-24 mb-4 w-2/3 bg-white dark:bg-black">
              <CardBody>
                <Typography
                  variant="h4"
                  className="text-black dark:text-bg_light"
                >
                  Membership Status
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <BuyPlanDialog>
                  <svg
                    className="w-4 h-4 mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.9996 0.5L16.2256 6.68342L23.4123 8.7918L18.8374 14.7217L19.053 22.2082L11.9996 19.6897L4.94617 22.2082L5.16179 14.7217L0.586914 8.7918L7.7736 6.68342L11.9996 0.5ZM9.99959 12H7.99959C7.99959 14.2091 9.79045 16 11.9996 16C14.1418 16 15.8907 14.316 15.9947 12.1996L15.9996 12H13.9996C13.9996 13.1046 13.1042 14 11.9996 14C10.9452 14 10.0814 13.1841 10.0051 12.1493L9.99959 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="mr-2 text-xl">Buy</span>
                </BuyPlanDialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSettings;
