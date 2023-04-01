export interface UserInterface {
  addUser: any;
  addAddress: any;
  addWishList: any;
  user: any;
  address: any;
  wishlist: any;
}

const userStore = (set, get) => ({
  // Variables
  user: {},
  address: {},
  wishlist: [],

  addUser: userAdd =>
    set(state => {
      state.user = userAdd.userInfo;
      state.address = userAdd.userAddress;
      state.wishlist = userAdd.userWishlist;
      return null;
    }),

  addAddress: addressAdd =>
    set(state => {
      state.address = addressAdd;
      return null;
    }),

  addWishList: wishlistAdd =>
    set(state => {
      state.wishlist = wishlistAdd;
      return null;
    }),

  clearAllTodo: () => set(state => (state.todos = [])),
});

export {userStore};
