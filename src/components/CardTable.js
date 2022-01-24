import React from 'react';
import { useSelector } from 'react-redux';

import './CardTable.css';

export default function CardTable() {
  const expenses = useSelector((state) => state.wallet.expenses);

  const setDate = (date) => ({
    '01': `${date.substr(8, 2)} JAN`,
    '02': `${date.substr(8, 2)} FEV`,
    '03': `${date.substr(8, 2)} MAR`,
    '04': `${date.substr(8, 2)} ABR`,
    '05': `${date.substr(8, 2)} MAI`,
    '06': `${date.substr(8, 2)} JUN`,
    '07': `${date.substr(8, 2)} JUL`,
    '08': `${date.substr(8, 2)} AGO`,
    '09': `${date.substr(8, 2)} SET`,
    10: `${date.substr(8, 2)} OUT`,
    11: `${date.substr(8, 2)} Novembro`,
    12: `${date.substr(8, 2)} DEZ`,
  });

  return (
    <div>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <p className="card-date">
              {setDate(expense.date)[expense.date.substr(5, 2)]}
            </p>
            <div className="conteiner-card-table">
              <div className="item-card">
                <p>Categoria:</p>
                <p>{expense.category}</p>
              </div>
              <hr />
              <div className="item-card">
                <p>Descrição:</p>
                <p>{expense.description}</p>
              </div>
              <hr />
              <div className="item-card">
                <p>Valor:</p>
                <p className={expense.value > 0 ? 'green' : 'red'}>
                  {expense.value > 0
                    ? `R$ ${expense.value.toFixed(2)}`
                    : `R$ ${(expense.value * -1).toFixed(2)}`}
                </p>
              </div>
              <button>Editar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
