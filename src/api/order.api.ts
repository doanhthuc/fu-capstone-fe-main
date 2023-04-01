import {OrderClient} from "../utils/axios/order.api";

export const createOrderAxios = async data => {
  try {
    await OrderClient.post("/order/create", data);
  } catch (e) {
    alert("Create order failed! Try again later");
    return false;
  }
  return true;
};

export const getOrderHistoryAxios = async id => {
  console.log(id);
  let dd;
  try {
    dd = await OrderClient.get(`/order/getAllByUserId/${id}`);
  } catch (e) {
    alert("Get User History Failed! Try again later");
    return false;
  }
  return dd;
};
