export interface CartsInterface {
  carts: any;
  cartsInfo: any;
  addToCart: any;
  deleteOneCart: any;
  clearAllCarts: any;
  calculateDiscountTotalPrice: any;
  returnPrevTotalPrice: any;
  addTransferfee: any;
  removeTransferfee: any;
}

const cartsStore = (set, get) => ({
  // Variables
  carts: [
    // {
    //   id: "
    //   img: "",
    //   name: "",
    //   color: "",
    //   size: "",
    //   price: "",
    //   quantity: "",
    // },
  ],
  cartsInfo: {
    totalPrice: 0,
    prevPrice: 0,
    totalItem: 0,
    coupon: "Not selected",
  },

  addToCart: product =>
    set(state => {
      state.carts.push(product);
      state.cartsInfo.totalItem = calculateItem(state.carts);
      state.cartsInfo.totalPrice = calculatePrice(state.carts);
      state.cartsInfo.prevPrice = state.cartsInfo.totalPrice;
      return null;
    }),
  deleteOneCart: id =>
    set((state: any) => {
      state.carts = state.carts.filter(c => c.id !== id);
      state.cartsInfo.totalItem = calculateItem(state.carts);
      state.cartsInfo.totalPrice = calculatePrice(state.carts);
      return null;
    }),
  clearAllCarts: () =>
    set((state: any) => {
      state.carts = [];
      state.cartsInfo.totalItem = 0;
      state.cartsInfo.totalPrice = 0;
      return null;
    }),
  calculateDiscountTotalPrice: (money, couponX) =>
    set((state: any) => {
      const type = money[2];
      money = parseInt(money.slice(0, -1));
      console.log(type, money);
      if (type == "%") {
        state.cartsInfo.totalPrice -= Math.floor(
          (state.cartsInfo.totalPrice * money) / 100,
        );
      } else if (type == "$") {
        state.cartsInfo.totalPrice -= money;
      }
      state.cartsInfo.coupon = couponX;
      return null;
    }),
  addTransferfee: () =>
    set((state: any) => {
      state.cartsInfo.totalPrice += 15;
      return null;
    }),
  removeTransferfee: () =>
    set((state: any) => {
      state.cartsInfo.prevPrice = state.cartsInfo.totalPrice;
      state.cartsInfo.totalPrice -= 15;
      return null;
    }),

  returnPrevTotalPrice: () =>
    set((state: any) => {
      state.cartsInfo.totalPrice = state.cartsInfo.prevPrice;
      state.cartsInfo.coupon = "Not selected";
      return null;
    }),
});

const calculateItem = (arr: any) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].quantity;
  }
  return total;
};

const calculatePrice = (arr: any) => {
  return arr.reduce((accumulator, p) => {
    // return accumulator + p.quantity * Number(p.price.replace(/[^0-9.-]+/g, ""));
    return accumulator + p.quantity * Number(p.price);
  }, 0);
};

export {cartsStore};
