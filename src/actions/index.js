export const ADD_EXPENSE = 'ADD_EXPENSE';

export const ADD_CATEGORY = 'ADD_CATEGORY';

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const EMAIL = 'EMAIL';

export const setAddExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload,
});

export const setAddCategory = (payload) => ({
  type: 'ADD_CATEGORY',
  payload,
});

export const getDeleteExpense = (payload) => ({
  type: 'DELETE_EXPENSE',
  payload,
});

export const getEmail = (payload) => ({
  type: 'EMAIL',
  payload,
});
