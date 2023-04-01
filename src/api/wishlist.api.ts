import {ShopClient} from "../utils/axios/shop.api";

export const toggleWishListAPI = async data => {
  let wl;
  try {
    wl = await ShopClient.put("/shopping/toggleAddItemToWishlist", data);
  } catch (e) {
    alert(e);
    return false;
  }
  return wl.data;
};
