import toast from "react-hot-toast";

const notify1 = s => toast.error(s);
const showPopupAuth = errors => {
  for (let o in errors) {
    notify1(errors[o].message);
  }
};

const notify2 = s => toast.error(s, {position: "top-right"});
const showPopupComment = s => {
  notify2(s);
};

const notify3 = s => toast.success(s, {position: "top-right"});
const showPopupSuccess = s => {
  notify3(s);
};

const notify4 = s => toast.error(s);
const showPopupSearch = s => {
  notify4(s);
};

export {showPopupAuth, showPopupComment, showPopupSuccess, showPopupSearch};
