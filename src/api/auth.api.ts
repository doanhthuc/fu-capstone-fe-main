import {AuthClient} from "../utils/axios/auth.api";
import {ShopClient} from "../utils/axios/shop.api";

export const submitLoginAxios = async data => {
  let authResponse;
  try {
    authResponse = await AuthClient.post("/login", data);
  } catch (e) {
    alert("Wrong username or password");
    return false;
  }
  const currenData = authResponse?.data;
  window.localStorage.setItem("auth_token", currenData?.accessToken);

  let userInfo, userAddress, userWishlist;
  let allInfo = {
    userInfo,
    userAddress,
    userWishlist,
  };
  try {
    userInfo = await AuthClient.get(`/auth/user/${currenData.id}`);
    userAddress = await AuthClient.get(`/auth/userAddress/${currenData.id}`);
    allInfo.userInfo = userInfo.data;
    allInfo.userAddress = userAddress.data;
  } catch (e) {
    alert("Can't get user information from cloud");
  }

  try {
    userWishlist = await ShopClient.get(`/shopping/wishlist?userId=${currenData.id}`);
    allInfo.userWishlist = userWishlist.data.itemList;
  } catch (e) {
    allInfo.userWishlist = [];
    alert("Can't get wishlist from cloud, trying to refetch");
  }
  return allInfo;
};

export const submitRegisterLoginAxios = async data => {
  console.log(data);
  try {
    await AuthClient.post("/auth/register", data);
  } catch (e) {
    alert("Something wrong when register, try again later!" + e);
    return false;
  }
  return submitLoginAxios({username: data.username, password: data.password});
};
