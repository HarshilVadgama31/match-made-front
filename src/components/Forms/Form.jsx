import FormInputs from "./FormInputs";
import useFormContext from "../../hooks/useFormContext";
import Button from "../Button";
// import axios from "axios";

const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data2 = new FormData(data);

    // try {
    data.userId = "6572343b20e0ba4957caf1fa";
    const res = await fetch("http://localhost:3000/user/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(await res.json());

    
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

  return (
    <form className="flex-col">
      <FormInputs />
      <footer>
        <div className="ml-1 flex gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={disablePrev}
            className={`flex p-2 rounded-xl border-solid border-2 text-bg_dark dark:text-bg_light w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${prevHide}`}
          >
            Prev
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={disableNext}
            className={`flex p-2 rounded-xl border-solid border-2 text-bg_dark dark:text-bg_light w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${nextHide}`}
          >
            Next
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`flex p-2 rounded-xl border-solid border-2 text-bg_dark dark:text-bg_light w-full h-full font-light items-center justify-center bg-button_light focus:z-10 focus:ring-2 focus:ring-button_dark dark:bg-button_dark dark:focus:z-10 dark:focus:ring-2 dark:focus:ring-button_dark dark:focus:border-bg_dark ${submitHide}`}
          >
            Submit
          </button>
        </div>
      </footer>
    </form>
  );
};
export default Form;
