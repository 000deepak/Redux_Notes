export const getBooks = (books) => {
  return {
    type: "GET_BOOKS",
    payload: books,
  };
};

export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
