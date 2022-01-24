import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import InputTable from '../components/InputTable';
import CardSection from '../components/CardSection';
import Table from '../components/Table';
import EditTable from '../components/EditTable';
import CardTable from '../components/CardTable';

export default function Wallet() {
  const [editExpense, setEditExpense] = useState();
  const [edit, setEdit] = useState(true);
  const [width, setWidth] = useState(true);

  function handleClick(expense) {
    setEditExpense(expense);
    setEdit(false);
  }

  // REF: https://cursos.alura.com.br/forum/topico-como-executar-uma-funcao-do-javascript-se-a-janela-do-browser-diminuir-de-800px-41605
  document.body.onresize = function () {
    if (document.body.clientWidth < 700) {
      setWidth(false);
    } else {
      setWidth(true);
    }
  };

  useEffect(() => {
    if (document.body.clientWidth < 700) {
      setWidth(false);
    } else {
      setWidth(true);
    }
  }, []);

  return (
    <>
      <Header />
      <CardSection />
      {edit ? (
        <InputTable />
      ) : (
        <EditTable setEdit={setEdit} expense={editExpense} />
      )}
      {width ? (
        <Table handleClick={handleClick} />
      ) : (
        <CardTable handleClick={handleClick} />
      )}
    </>
  );
}
