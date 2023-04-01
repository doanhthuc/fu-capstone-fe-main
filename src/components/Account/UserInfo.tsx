import {useForm} from "react-hook-form";
import useStore from "../../store/store";
import {submitLoginAxios} from "../../api/auth.api";

const UserInfo = () => {
  const {user} = useStore();
  const {register, handleSubmit} = useForm();

  const submitUserInfo = async data => {
    console.log(data);
    // const loginIdentity = await submitLoginAxios(data);
    // addUser(loginIdentity);
    // navigate(0);
  };

  // if (errors) return console.log(errors);

  return (
    <>
      <div className="info-content-item active">
        <form
          method="post"
          encType="multipart/form-data"
          className="checkout-form-validate">
          <h2 className="form-validate-title">User Info</h2>
          <div className="row ">
            <div className="col p-12 m-12">
              <label className="form-validate-name">Username</label>
              <p className="form-validate-input">{user?.username}</p>
            </div>
            <div className="col p-6 m-12">
              <label className="form-validate-name">Gender</label>
              <input
                {...register("gender")}
                defaultValue={user?.gender}
                type="email"
                className="form-validate-input"
              />
            </div>
            <div className="col p-6 m-12">
              <label className="form-validate-name">Phone number</label>
              <input
                {...register("phoneNumber")}
                defaultValue={user?.phoneNumber}
                type="email"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Email Address</label>
              <input
                {...register("email")}
                defaultValue={user?.email}
                type="email"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Avatar</label>
              <input
                {...register("avatarUrl")}
                defaultValue={user?.avatarUrl}
                type="email"
                className="form-validate-input"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit(submitUserInfo)}
            type="submit"
            className="form-validate-submit-btn">
            Update Info
          </button>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
