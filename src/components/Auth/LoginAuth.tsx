import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useNavigate} from "react-router-dom";
import {useNormalEffect} from "../../utils/hook/useUpdateEffect";
import Popup_Auth from "../Reuse/Popup/PopupAuth";
import {showPopupAuth} from "../../utils/showPopup";
import {checkIfHaveSpecialCharactersAuth} from "../../utils/helper";
import {submitLoginAxios} from "../../api/auth.api";
import useStore from "../../store/store";

const Loginschema = z.object({
  username: z
    .string()
    .min(4, {message: "username needs at least 4 characters"})
    .max(20, {message: "the maximum length of username is 20 characters"})
    .refine(v => checkIfHaveSpecialCharactersAuth(v), {
      message: "String must not contain any special character",
    }),
  password: z
    .string()
    .min(4, {message: "password needs at least 4 characters"})
    .max(20, {message: "the maximum length of password is 20 characters"}),
});

const LoginAuth = () => {
  const {addUser} = useStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(Loginschema),
  });

  useNormalEffect(() => {
    if (Object.keys(errors).length !== 0) {
      showPopupAuth(errors);
    }
  }, [errors]);

  const submitLogin = async data => {
    const loginIdentity = await submitLoginAxios(data);
    addUser(loginIdentity);
    navigate(0);
  };

  return (
    <>
      <div className="col p-6 m-12">
        <Popup_Auth />
        <form
          method="post"
          encType="multipart/form-data"
          className="checkout-form-validate">
          <h2 className="form-validate-title">Login</h2>
          <div className="row no-gutters">
            <div className="col p-12 m-12">
              <label className="form-validate-name">Username *</label>
              <input
                {...register("username")}
                type="text"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Password *</label>
              <input
                {...register("password")}
                type="password"
                className="form-validate-input"
              />
            </div>
            <div className="account-page-renember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="form-validate-name">
                {" "}
                Remember me
              </label>
            </div>
          </div>
          <br />
          <button
            style={{cursor: "pointer"}}
            onClick={handleSubmit(submitLogin)}
            type="submit"
            className="form-validate-submit-btn">
            Login
          </button>
          <span className="lost-password">Lost your password?</span>
        </form>
      </div>
    </>
  );
};

export default LoginAuth;
