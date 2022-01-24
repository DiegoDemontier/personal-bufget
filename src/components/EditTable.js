import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeleteExpense, setAddExpense } from '../actions';

import './InputTable.css';

export default function InputTable(props) {
  const [date, setDate] = useState(props.expense.date);
  const [category, setCategory] = useState(props.expense.category);
  const [description, setDescription] = useState(props.expense.description);
  const [value, setValue] = useState(Math.abs(props.expense.value));

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const categories = useSelector((state) => state.wallet.categories);

  function handleDelete(event) {
    event.preventDefault();
    dispatch(getDeleteExpense(props.expense.id));
    props.setEdit(true);
  }

  function handleEdit(event) {
    event.preventDefault();
    const controlValue = categories[category] ? value * -1 : value;

    const index = expenses.findIndex(
      (expense) => expense.id === props.expense.id
    );
    const expense = {
      id: props.expense.id,
      date,
      category,
      description,
      value: Number(controlValue),
    };
    expenses.splice(index, 1, expense);
    dispatch(setAddExpense(expenses));
    props.setEdit(true);
  }

  function renderCategory() {
    return (
      <label className="input_category" htmlFor="category">
        Categoria
        <select
          className="form_input"
          value={category}
          id="category"
          onChange={({ target }) => setCategory(target.value)}
        >
          {Object.keys(categories).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    );
  }

  function renderDate() {
    return (
      <label className="input_date" htmlFor="date">
        Data
        <input
          className="form_input"
          value={date}
          /* required */
          id="date"
          type="date"
          onChange={({ target }) => setDate(target.value)}
        />
      </label>
    );
  }

  function renderDescription() {
    return (
      <label className="input_description" htmlFor="description">
        Descrição
        <input
          className="form_input"
          id="description"
          value={description}
          required
          type="text"
          onChange={({ target }) => setDescription(target.value)}
        />
      </label>
    );
  }

  function renderValue() {
    return (
      <label className="input_value" htmlFor="value">
        Valor
        <input
          className="form_input"
          id="value"
          value={value}
          step="0.01"
          required
          type="number"
          onChange={({ target }) => setValue(target.value)}
        />
      </label>
    );
  }

  return (
    <form className="edit-form-expense">
      {renderDate()}
      {renderCategory()}
      {renderDescription()}
      {renderValue()}
      <button className="btn-salve" type="submit" onClick={handleEdit}>
        Salvar
      </button>
      <button className="btn-delete" type="submit" onClick={handleDelete}>
        Deletar
      </button>
    </form>
  );
}
