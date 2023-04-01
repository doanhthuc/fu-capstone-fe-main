import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {checkIfHaveSpecialCharactersAuth} from "../../utils/helper";
import {useNormalEffect} from "../../utils/hook/useUpdateEffect";
import {showPopupAuth} from "../../utils/showPopup";
import {submitLoginAxios, submitRegisterLoginAxios} from "../../api/auth.api";
import useStore from "../../store/store";
import {useNavigate} from "react-router-dom";

const Registerschema = z
  .object({
    username: z
      .string()
      .min(4, {message: "username needs at least 4 characters"})
      .max(20, {message: "the maximum length of username is 20 characters"})
      .refine(v => checkIfHaveSpecialCharactersAuth(v), {
        message: "String must not contain any special character",
      }),
    email: z
      .string()
      .min(6, {message: "email needs at least 6 characters"})
      .max(30, {message: "the maximum length of email is 30 characters"})
      .refine(v => checkIfHaveSpecialCharactersAuth(v), {
        message: "String must not contain any special character",
      }),
    phoneNumber: z
      .string()
      .min(6, {message: "phone needs at least 6 characters"})
      .max(30, {message: "the maximum length of phone is 30 characters"}),
    avatarUrl: z.string().min(4, {message: "avatar must be an url"}),
    password: z
      .string()
      .min(4, {message: "password needs at least 4 characters"})
      .max(20, {message: "the maximum length of password is 20 characters"}),
    confirmPassword: z
      .string()
      .min(4, {message: "password needs at least 4 characters"})
      .max(20, {message: "the maximum length of password is 20 characters"}),
  })
  .superRefine(({confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "passwords did not match",
      });
    }
  });

const RegisterAuth = () => {
  const {addUser} = useStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(Registerschema),
  });

  useNormalEffect(() => {
    if (Object.keys(errors).length !== 0) {
      showPopupAuth(errors);
    }
  }, [errors]);

  const submitRegister = async data => {
    data.gender = "MALE";
    data.streetAddress = "02 Nguyen Huu Tho";
    data.district = "Hai Chau";
    data.city = "Da Nang";
    data.country = "Viet Nam";
    data.zipCode = "5500";
    const registerIdentity = await submitRegisterLoginAxios(data);
    addUser(registerIdentity);
    navigate(0);
  };

  return (
    <>
      <div className="col p-6 m-12">
        <form
          method="post"
          encType="multipart/form-data"
          className="checkout-form-validate">
          <h2 className="form-validate-title">Register</h2>
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
              <label className="form-validate-name">Email *</label>
              <input
                {...register("email")}
                type="text"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Phone *</label>
              <input
                {...register("phoneNumber")}
                type="number"
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
            <div className="col p-12 m-12">
              <label className="form-validate-name">Confirm Password *</label>
              <input
                {...register("confirmPassword")}
                type="password"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Avatar URL *</label>
              <input
                {...register("avatarUrl")}
                type="text"
                className="form-validate-input"
                defaultValue="https://art.pixilart.com/f402092b706d0dd.png"
              />
            </div>
          </div>
          <div className="checkout-cart-order-des">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our&nbsp;
            <span>privacy policy.</span>
          </div>
          <button
            style={{cursor: "pointer"}}
            onClick={handleSubmit(submitRegister)}
            type="submit"
            className="form-validate-submit-btn">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterAuth;
