import React from 'react';
import { useSelector } from 'react-redux';

import './CardSection.css';

export default function Section() {
  const expenses = useSelector((state) => state.wallet.expenses);

  const totalIncome = expenses.reduce((acc, curr) => {
    if (curr.value > 0) return acc + curr.value;
    return acc;
  }, 0);

  const totalExpenses = expenses.reduce((acc, curr) => {
    if (curr.value < 0) return acc + curr.value;
    return acc;
  }, 0);

  const totalBalance = totalIncome + totalExpenses;

  return (
    <section className="conteiner-info-cad">
      <div className="conteiner-card">
        <div className="card-info">
          <h4>{`R$ ${totalIncome.toFixed(2)}`}</h4>
          <p>Receita</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/ultraviolet/50/000000/money--v2.png"
            alt=""
          />
        </div>
      </div>

      <div className="conteiner-card">
        <div className="card-info">
          <h4>{`R$ ${(totalExpenses * -1).toFixed(2)}`}</h4>
          <p>Despesa</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/ultraviolet/50/000000/check.png"
            alt=""
          />
        </div>
      </div>

      <div className="conteiner-card">
        <div className="card-info">
          <h4 className={totalBalance >= 0 ? 'green' : 'red'}>
            {totalBalance > 0
              ? `R$ ${totalBalance.toFixed(2)}`
              : `R$ ${(totalBalance * -1).toFixed(2)}`}
          </h4>
          <p>Balanço</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/ultraviolet/50/000000/wallet.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
