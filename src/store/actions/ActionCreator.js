import ADD_ITEM_TO_SWIPER from "./ActionType";
export const addItem = () => {
  return {
    type: ADD_ITEM_TO_SWIPER,
  };
};

// export const getAllPosts = () => {
//   return (dispatch) => {
//     //   fetch placeholder data from jsonplaceholder
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((result) =>
//         //dispatch response to the store
//         dispatch({ type: "DO_THIS", payload: result })
//       );
//   };
// };
