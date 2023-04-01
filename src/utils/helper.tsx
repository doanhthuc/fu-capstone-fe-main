import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const mapToArray = map => {
  return Array.from(map.entries());
};

const currencyFormatter = c => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(c);
};

const scrollToTopPage = () => {
  window.scrollTo({
    top: 0,
  });
};

const showNumberOfStars = numberOfThings => {
  let stars = [];
  for (let i = 0; i < numberOfThings; i++) {
    stars.push(
      <i key={i}>
        <FontAwesomeIcon icon={faStar} />
      </i>,
    );
  }
  return <>{stars.map(p => p)}</>;
};

const checkIfHaveSpecialCharactersAuth = str => {
  const format = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/; // allow @ and .
  return !format.test(str);
};

const addToArray = (arr, string) => {
  console.log(arr);
  const res = [];
  let x;
  for (x of arr.get(string)) {
    if (string == "category") res.push(x.category);
    if (string == "size") res.push(x.size);
    if (string == "color") res.push(x.color);
  }
  return res;
};
const convertOutputLeftSearch = mapProperties => {
  return {
    category: addToArray(mapProperties, "category"),
    price: mapProperties.get("price"),
    color: addToArray(mapProperties, "color"),
    size: addToArray(mapProperties, "size"),
  };
};

const splitDescription = des => {
  return des.split("%%%");
};

const chooseSizeBaseOnColor = (cur_color, arr) => {
  if (!Array.isArray(arr)) return [];
  const res = [];
  for (let obj of arr) {
    if (obj.color == cur_color) res.push(obj.size);
  }
  return res;
};

const choosePriceStockBaseOnColorAndSize = (color, size, arr) => {
  if (!Array.isArray(arr)) return {};
  if (color == "" || size == "" || arr.length == 0) return {};
  let res = {};
  for (let obj of arr) {
    if (obj.color == color && obj.size == size) res = obj;
  }
  return res;
};

const createOrderHistory = (orderHistory) => {
  const res = [];
  for (let fullOrder of orderHistory) {
    for (let item of fullOrder.orderItemList) {
      res.push({...item, status: fullOrder.status, message: fullOrder.message, createdAt: fullOrder.createdAt});
    }
  }
  return res;
};

const convertDateInOrderHistory = (dateTimeInput) => {
  const date = new Date(dateTimeInput);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
};

const getUserIdFromReviewOfProduct = (data, userId) => {
  for (let x of data) {
    if (x.user.id == userId) {
      return x.id;
    }
  }
  return null;
};

export {
  mapToArray,
  currencyFormatter,
  scrollToTopPage,
  showNumberOfStars,
  checkIfHaveSpecialCharactersAuth,
  convertOutputLeftSearch,
  splitDescription,
  chooseSizeBaseOnColor,
  choosePriceStockBaseOnColorAndSize,
  createOrderHistory,
  convertDateInOrderHistory,
  getUserIdFromReviewOfProduct,
};
