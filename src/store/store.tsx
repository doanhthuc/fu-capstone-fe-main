import create from "zustand";
import {persist} from "zustand/middleware";
import {TodosInterface, todosStore} from "./todo";
import {RecentViewInterface, recentViewStore} from "./recentView";
import {CartsInterface, cartsStore} from "./cart";
import {UserInterface, userStore} from "./user";

const useStore = create<
  TodosInterface & RecentViewInterface & CartsInterface & UserInterface
>()(
  persist(
    (...a) => ({
      // @ts-ignore
      ...todosStore(...a),
      // @ts-ignore
      ...recentViewStore(...a),
      // @ts-ignore
      ...cartsStore(...a),
      // @ts-ignore
      ...userStore(...a),
    }),
    {name: "chinchon"},
  ),
);

export default useStore;
