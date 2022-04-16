import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "./../assets/assets";
import { CardTS, initialTS, usersTS } from "./../interface/interface";
const initialState: initialTS = {
  users: [],
  sum: 0,
  product: Card,
  basket: [],
  autorization: false,
};

interface DeleteComment {
  id: any;
  descriotion: string;
}
interface Comment {
  name: string;
  descriotion: string;
  id: any;
  date: any;
  img?: string;
}
interface Edit {
  id: any;
  descriotion: string;
  date: any;
}
const createStore = createSlice({
  name: "Shopping",
  initialState: initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<CardTS>) => {
      state.sum += action.payload.price;
      if (state.basket.find((item) => item.id === action.payload.id)) {
        const result = state.basket.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
        state.basket = result;
      } else {
        const newBasket = {
          price: action.payload.price,
          name: action.payload.name,
          img: action.payload.img,
          id: action.payload.id,
          count: action.payload.count,
        };

        state.basket = [...state.basket, newBasket];
      }
    },

    AddUser: (state, action: PayloadAction<usersTS>) => {
      state.users = [...state.users, action.payload];
      console.log(state.users);
    },
    DeleteComment: (state, action: PayloadAction<DeleteComment>) => {
      const newComment = state.product.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload);
          return {
            ...item,
            coment: item.coment?.filter(function (item: Comment) {
              return item.descriotion !== action.payload.descriotion;
            }),
          };
        } else {
          return item;
        }
      });
      state.product = newComment;
    },
    AddComent: (state, action: PayloadAction<any>) => {
      const result = state.product.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, coment: [...item.coment, action.payload] };
        } else {
          return item;
        }
      });
      state.product = result;
    },
    AddProducts: (state, action: PayloadAction<CardTS>) => {
      state.product = [...state.product, action.payload];
    },

    CleanBasket: (state) => {
      state.basket = [];
      state.sum = 0;
    },

    CleanAccount: (state) => {
      const result = state.users.map((item) => {
        return { ...item, isLoggedIn: !item.isLoggedIn };
      });
      state.users = result;
    },
    EditComment: (state, action: PayloadAction<Edit>) => {
      console.log(action.payload);
      const newComment = state.product.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            coment: item.coment.map((item: Comment) => {
              if (item.date === action.payload.date) {
                return { ...item, descriotion: action.payload.descriotion };
              } else {
                return item;
              }
            }),
          };
        } else {
          return item;
        }
      });
      state.product = newComment;
    },
    DeleteBasket: (state, action: PayloadAction<CardTS>) => {
      state.sum -= action.payload.price;
      if (
        state.basket.find(
          (item) => item.id === action.payload.id && item.count > 1
        )
      ) {
        const result = state.basket.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
        state.basket = result;
      } else {
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const {
  addToBasket,
  DeleteBasket,
  AddProducts,
  CleanBasket,
  AddUser,
  AddComent,
  DeleteComment,
  CleanAccount,
  EditComment,
} = createStore.actions;
export default createStore.reducer;
