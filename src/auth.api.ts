import axios from "axios";

const submitLoginAxios = async data => {
  const res = await axios.get("/d78afd12-4a28-4e79-bcf7-a1a05191fe65", data);
  console.log(res.data);
  window.localStorage.setItem("auth_token", res.data.token);
  return true;
};

export {submitLoginAxios};
