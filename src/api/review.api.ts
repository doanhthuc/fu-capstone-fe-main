import {ReviewClient} from "../utils/axios/review.api";

export const createAndUpdateReviewAxios = async (reviewId, data) => {
  try {
    await ReviewClient.put(`/review/update/${reviewId}`, data);
  } catch (e) {
    alert("Create review failed! Try again later");
    return false;
  }
  return true;
};