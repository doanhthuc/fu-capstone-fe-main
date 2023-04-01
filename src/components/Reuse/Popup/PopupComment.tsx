import {Toaster} from "react-hot-toast";

const PopupComment = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            fontSize: "12px",
            color: "#713200",
            width: "40rem",
          },
        }}
      />
    </>
  );
};

export default PopupComment;
