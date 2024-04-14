import VehicleForm from "./VehicleForm";
import { useState } from "react";

const ToggleVehicleForm = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <VehicleForm handleCancel={changeToggle} />
      ) : (
        <button onClick={changeToggle} className="btn-white w-54">
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              viewBox="0 0 24 24"
              className="mr-2"
            >
              <path
                fill="currentColor"
                d="m20.772 10.155l-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845M7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6M5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16m13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16"
              />
            </svg>
            <div>Realizar solicitud</div>
          </span>
        </button>
      )}
    </>
  );
};

export default ToggleVehicleForm;
