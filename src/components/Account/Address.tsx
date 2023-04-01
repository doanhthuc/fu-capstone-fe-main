// noinspection DuplicatedCode

import {useForm} from "react-hook-form";
import useStore from "../../store/store";
import {updateAddressAPI} from "../../api/address.api";
import {useNavigate} from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const {address, addAddress} = useStore();
  const {register, handleSubmit} = useForm();

  const submitAddress = async data => {
    const res = await updateAddressAPI(address.id, data);
    if (!res) return;
    addAddress(res);
    navigate(0);
  };

  return (
    <>
      <div className="info-content-item active">
        <form
          method="post"
          encType="multipart/form-data"
          className="checkout-form-validate">
          <h2 className="form-validate-title">Address</h2>
          <div className="row no-gutters">
            <div className="col p-12 m-12">
              <label className="form-validate-name">Country / Region *</label>
              <input
                {...register("country")}
                defaultValue={address.country}
                type="text"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">City *</label>
              <input
                {...register("city")}
                defaultValue={address.city}
                type="text"
                className="form-validate-input"
              />
            </div>
            {/*<div className="col p-12 m-12">*/}
            {/*  <label className="form-validate-name">Town (optional)</label>*/}
            {/*  <input*/}
            {/*    {...register("state")}*/}
            {/*    defaultValue={address.state}*/}
            {/*    type="text"*/}
            {/*    className="form-validate-input"*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="col p-12 m-12">
              <label className="form-validate-name">District (optional)</label>
              <input
                {...register("district")}
                defaultValue={address.district}
                type="text"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Address</label>
              <input
                {...register("streetAddress")}
                defaultValue={address.streetAddress}
                type="text"
                className="form-validate-input"
              />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Zip Code</label>
              <input
                {...register("zipCode")}
                defaultValue={address.zipCode}
                type="text"
                className="form-validate-input"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit(submitAddress)}
            type="submit"
            className="form-validate-submit-btn">
            Update Address
          </button>
        </form>
      </div>
    </>
  );
};

export default Address;
