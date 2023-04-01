import {CSSProperties} from "react";
import ClockLoader from "react-spinners/ClockLoader";
import ClipLoader from "react-spinners/ClipLoader";
import {useIsFetching, useIsMutating} from "@tanstack/react-query";

const override1: CSSProperties = {
  display: "block",
  margin: "22rem auto",
  borderColor: "red",
};
const override2: CSSProperties = {
  position: "fixed",
  bottom: "0",
  right: "0",
  zIndex: 1000,
};

const LoadingSpinnerOverlay = () => {
  return (
    <>
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            <ClockLoader size={150} cssOverride={override1} color="#36d7b7" />
          </div>
        </div>
      </div>
    </>
  );
};

const LoadingAllTheTimeIfSomeThingIsRunning = () => {
  return (
    <ClipLoader
      loading={useIsFetching() + useIsMutating() > 0}
      cssOverride={override2}
      size={30}
    />
  );
};

export {LoadingSpinnerOverlay, LoadingAllTheTimeIfSomeThingIsRunning};
