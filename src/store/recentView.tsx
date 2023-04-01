export interface RecentViewInterface {
  recentViewProducts: any;
  addRecentViewProducts: any;
  deleteOneRecentViewProduct: any;
}

const recentViewStore = (set, get) => ({
  recentViewProducts: [
    // {
    //   id: "
    //   time: "",
    //   img: "",
    //   star: "",
    //   review: "",
    //   name: "",
    //   oldPrice: "",
    //   newPrice: "",
    // },
  ],
  addRecentViewProducts: p =>
    set(state => {
      if (
        state.recentViewProducts.filter(recent => recent.id === p.id).length > 0
      ) {
        state.recentViewProducts = state.recentViewProducts.filter(
          c => c.id !== p.id,
        );
      }
      console.log(p.time);
      state.recentViewProducts.unshift(p);
      return null;
    }),
  deleteOneRecentViewProduct: id =>
    set((state: any) => {
      state.recentViewProducts = state.recentViewProducts.filter(
        c => c.id !== id,
      );
      return null;
    }),
});

export {recentViewStore};
