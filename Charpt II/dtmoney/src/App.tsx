import { useState } from "react";

import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {
  const [isNewOpenModalTransaction, setIsNewOpenModalTransaction] = useState(false);

  function handleOpenModalTransaction() {
    setIsNewOpenModalTransaction(true);
  }

  function handleCloseModalTransaction() {
    setIsNewOpenModalTransaction(false);
  }

  return (

    <>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenModalTransaction} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewOpenModalTransaction}
        onRequestClose={handleCloseModalTransaction}
      />
    </>
  );
}


